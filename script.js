document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
    this.reset(); // Reset form setelah pengiriman
});