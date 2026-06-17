const CACHE_NAME = 'dem-nguoc-v2';

// Chỉ Cache trước các file local. Các link ngoài (Font, Ảnh) sẽ được Cache động khi trang load thành công.
const LOCAL_ASSETS = [
    './',
    './index.html'
];

// Sự kiện Install: Tạo cache và lưu trữ tài nguyên
self.addEventListener('install', event => {
    // Ép Service Worker cài đặt ngay lập tức (không chờ)
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Đã mở cache PWA');
                // Pre-cache local assets. Tránh addAll các link ngoài vì lỗi CORS sẽ làm sập quá trình Install.
                return cache.addAll(LOCAL_ASSETS);
            })
            .catch(error => console.error('Lỗi khi cache local assets:', error))
    );
});

// Sự kiện Activate: Xóa các cache cũ nếu có phiên bản mới
self.addEventListener('activate', event => {
    // Bắt đầu điều khiển các trang web ngay lập tức
    event.waitUntil(clients.claim());
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Đã xóa cache cũ: ', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Sự kiện Fetch: Cache First, Falling Back to Network
self.addEventListener('fetch', event => {
    // Chỉ xử lý các phương thức GET
    if (event.request.method !== 'GET') return;

    event.respondWith(
        // Dùng ignoreSearch để tránh việc các URL có chứa tham số (như link Unsplash) bị lỗi miss cache
        caches.match(event.request, { ignoreSearch: true })
            .then(cachedResponse => {
                // 1. Trả về từ Cache nếu đã từng load (Kể cả ảnh và font)
                if (cachedResponse) {
                    return cachedResponse; 
                }
                
                // 2. Nếu chưa có, tải từ Network và lưu tự động vào Cache (Dynamic Caching)
                return fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        // Lưu cache cho cả các request http/https ngoại lai
                        if (event.request.url.startsWith('http')) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    });
                }).catch(() => {
                    console.log('Ứng dụng đang chạy hoàn toàn Offline!');
                });
            })
    );
});
