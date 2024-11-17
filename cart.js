document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.btn-primary');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartButton.addEventListener('click', function () {
        // Obtener información del producto
        const quantity = document.querySelector('#cant').value;
        const size = document.querySelector('#talle').value;
        const priceElement = document.querySelector('#precio');
        const nameElement = document.querySelector('#name');
        const imageElement = document.querySelector('img.img-fluid'); // Obtener la imagen del producto

        if (priceElement && nameElement && imageElement) {
            let price = priceElement.textContent;
            const name = nameElement.textContent;
            const imageSrc = imageElement.src; // Obtener la ruta de la imagen

            price = price.replace('$', '');
            price = price.replace('.', '');
            price = parseInt(price);
            price = price * parseInt(quantity);

            const product = {
                name: name,
                price: price,
                quantity: parseInt(quantity),
                size: size,
                image: imageSrc, // Añadir la ruta de la imagen al objeto del producto
            };

            // Añadir producto al carrito
            cartItems.push(product);
            localStorage.setItem('cart', JSON.stringify(cartItems));

            
        } else {
            console.error('No se pudo obtener la información del producto.');
        }
    });
});
