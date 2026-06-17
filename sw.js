const CACHE_NAME = 'dem-nguoc-v1';
const ASSETS = [
    '/',
    '/index.html',
    'https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap',
    'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop'
];

// Sự kiện Install: Tạo cache và lưu trữ tài nguyên
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Đã mở cache PWA');
                return cache.addAll(ASSETS);
            })
    );
});

// Sự kiện Activate: Xóa các cache cũ nếu có phiên bản mới
self.addEventListener('activate', event => {
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
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // 1. Trả về từ Cache nếu file đã được lưu
                if (cachedResponse) {
                    return cachedResponse; 
                }
                
                // 2. Nếu không có trong Cache, tiến hành tải từ Network (Internet)
                return fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        // Chỉ lưu cache tự động với các request http/https bình thường
                        if (event.request.url.startsWith('http')) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    });
                }).catch(() => {
                    // Nếu rớt mạng và không có trong cache, ứng dụng vẫn không bị sập hoàn toàn.
                    console.log('Bạn đang ở chế độ Offline toàn diện.');
                });
            })
    );
});
