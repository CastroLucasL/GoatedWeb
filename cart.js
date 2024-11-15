document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.btn-primary');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartButton.addEventListener('click', function () {
        // Obtener información del producto
        const quantity = document.querySelector('#cant').value;
        const size = document.querySelector('#talle').value;
        const price = document.querySelector('#precio').textContent;
        const name = document.querySelector('#name').textContent;
        let priceInt = price.replace('$', '');
        priceInt = priceInt.replace('.', '');
        priceInt = parseInt(priceInt);
        priceInt = priceInt * parseInt(quantity);
        const product = {
            name: name,
            price: priceInt,
            quantity: parseInt(quantity),
            size: size,
        };

        // Añadir producto al carrito
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Notificar al usuario
        alert('Producto agregado al carrito!');
    });
});
