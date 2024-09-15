document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.container');
    const confirmCartButton = document.getElementById('confirm-cart-btn');
    let cart = localStorage.getItem('cart');
    let totalPrice = 0; // Variable pour stocker le prix total

    if (cart && JSON.parse(cart).length > 0) {
        cart = JSON.parse(cart);

        // Afficher les articles du panier
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');

            const itemTotalPrice = parseFloat(item.price) * parseInt(item.quantity);
            totalPrice += itemTotalPrice; // Ajouter le prix de l'article au total

            productDiv.innerHTML = `
               <h3>${item.title}</h3>
               <p>Quantité: ${item.quantity}</p>
            `;

            cartContainer.appendChild(productDiv);
        });

        // Afficher le prix total
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total-price');
        totalDiv.innerHTML = `<h3 class="pTot">Prix Total: ${totalPrice.toFixed(2)} €</h3>`;
        cartContainer.appendChild(totalDiv);



    } else {
        // Si le panier est vide
        cartContainer.innerHTML = '<h2 class="Pvide">Votre panier est vide.</h2>';
        confirmCartButton.style.display = 'none'; // Masquer le bouton si aucun article
    }
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get the content of the container (cart items)
    var containerContent = document.querySelector('.container').innerHTML;

    // Assign the container content to the hidden input field
    document.getElementById('cartDetails').value = containerContent;

    // Now allow the form to submit
    this.submit();
});
