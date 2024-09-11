document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.container');

    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);

        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');

            productDiv.innerHTML = `
                <h3>${item.title}</h3>
                <p>Prix: ${item.price}</p>
                <p>Quantité: ${item.quantity}</p>
                <button class="remove-item-btn" data-index="${index}">Retirer</button>
            `;

            cartContainer.appendChild(productDiv);
        });

        // Bouton pour vider le panier
        const clearCartBtn = document.getElementById('clear-cart-btn');
        clearCartBtn.addEventListener('click', function() {
            localStorage.removeItem('cart');
            cartContainer.innerHTML = '<h2>Votre panier est vide.</h2>';
        });

        // Boutons pour retirer un produit spécifique
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
            });
        });
    } else {
        cartContainer.innerHTML = '<h2>Votre panier est vide.</h2>';
    }
});
