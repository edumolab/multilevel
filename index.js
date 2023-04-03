if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('https://multilevel.vercel.app/sw.js');
    });
}
