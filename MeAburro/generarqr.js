document.addEventListener('DOMContentLoaded', function() {
    // Obtener el contenedor donde se colocará el código QR
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    // URL que se convertirá en el código QR
    const url = 'https://example.com';

    // Instanciar un nuevo objeto QRCode con la URL y el contenedor
    new QRCode(qrCodeContainer, url);
});
