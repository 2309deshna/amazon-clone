// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    '/amazon clone/',
    '/amazon clone/index.html',
    '/amazon clone/script.js',
    '/amazon clone/style.css',
    '/amazon clone/assests/amazon_logo.png',
    '/amazon clone/assests/amazon_logo_dark.png',
    '/amazon clone/assests/box1-1.jpg',
    '/amazon clone/assests/box1-2.jpg',
    '/amazon clone/assests/box1-3.jpg',
    '/amazon clone/assests/box1-4.jpg',
    '/amazon clone/assests/box2-1.jpg',
    '/amazon clone/assests/box2-2.jpg',
    '/amazon clone/assests/box2-3.jpg',
    '/amazon clone/assests/box2-3.jpg',
    '/amazon clone/assests/box3-1.jpg',
    '/amazon clone/assests/box3-2.jpg',
    '/amazon clone/assests/box3-3.jpg',
    '/amazon clone/assests/box3-4.jpg',
    '/amazon clone/assests/cart_banner.png',
    '/amazon clone/assests/cart_icon.png',
    '/amazon clone/assests/circle_icon.png',
    '/amazon clone/assests/dropdown_icon.png',
    '/amazon clone/assests/header1.jpg',
    '/amazon clone/assests/header2.jpg',
    '/amazon clone/assests/header3.jpg',
    '/amazon clone/assests/header4.jpg',
    '/amazon clone/assests/header5.jpg',
    '/amazon clone/assests/header6.jpg',
    '/amazon clone/assests/hero_image.jpg',
    '/amazon clone/assests/ipad_img.jpg',
    '/amazon clone/assests/location_icon.png',
    '/amazon clone/assests/menu_icon.png',
    '/amazon clone/assests/product_img.jpg',
    '/amazon clone/assests/product1-1.jpg',
    '/amazon clone/assests/product1-10.jpg',
    '/amazon clone/assests/product1-2.jpg',
    '/amazon clone/assests/product1-3.jpg',
    '/amazon clone/assests/product1-4.jpg',
    '/amazon clone/assests/product1-5.jpg',
    '/amazon clone/assests/product1-6.jpg',
    '/amazon clone/assests/product1-7.jpg',
    '/amazon clone/assests/product1-8.jpg',
    '/amazon clone/assests/product1-9.jpg',
    '/amazon clone/assests/product2-1.jpg',
    '/amazon clone/assests/product2-10.jpg',
    '/amazon clone/assests/product2-2.jpg',
    '/amazon clone/assests/product2-3.jpg',
    '/amazon clone/assests/product2-4.jpg',
    '/amazon clone/assests/product2-5.jpg',
    '/amazon clone/assests/product2-6.jpg',
    '/amazon clone/assests/product2-7.jpg',
    '/amazon clone/assests/product2-8.jpg',
    '/amazon clone/assests/product2-9.jpg',
    '/amazon clone/assests/rating_img.png',
    '/amazon clone/assests/search_icon.png',
    '/amazon clone/assests/us_flag.png',
    


    // '/EBOOK/index.html',
    // '/EBOOK/css/bootstrap-icons.css',
    // '/EBOOK/css/bootstrap.min.css',
    // '/EBOOK/css/templatemo-ebook-landing.min.css',  
    // '/EBOOK/js/bootstrap.bundle.min.js',
    // '/EBOOK/js/click-scroll.js',
    // '/EBOOK/js/custom.js',
    // '/EBOOK/js/jquery.min.js',
    // '/EBOOK/js/jquery.sticky.js',
    // '/EBOOK/images/avatar/businessman-sitting-by-table-cafe.jpg',
    // '/EBOOK/images/avatar/circle-scatter-haikei.png',
    // '/EBOOK/images/avatar/education-online-books.png',
    // '/EBOOK/images/avatar/portrait-mature-smiling-authoress-sitting-desk.jpg',
    // '/EBOOK/images/avatar/tablet-screen-contents.jpg'
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});