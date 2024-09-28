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
               <p>Prix par unité: ${item.price} €</p>
               <p>Quantité: ${item.quantity}</p>
               <p class="prix">Prix: ${itemTotalPrice.toFixed(2)} €</p>
               <button class="remove-item-btn" data-index="${index}"><i class="fa fa-trash-o"></i> Retirer</button>

            `;

            cartContainer.appendChild(productDiv);
        });

        // Afficher le prix total
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total-price');
        totalDiv.innerHTML = `<h3 class="pTot">Prix Total: ${totalPrice.toFixed(2)} €</h3>`;
        cartContainer.appendChild(totalDiv);

        // Afficher ou masquer le bouton de confirmation en fonction des articles dans le panier
        confirmCartButton.style.display = 'block'; // Afficher le bouton

        // Logique de suppression d'un élément
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cart.splice(index, 1); // Supprimer l'article du tableau
                localStorage.setItem('cart', JSON.stringify(cart)); // Mettre à jour le localStorage
                window.location.reload(); // Recharger la page
            });
        });

    } else {
        // Si le panier est vide
        cartContainer.innerHTML = '<h2 class="Pvide">Votre panier est vide.</h2>';
        confirmCartButton.style.display = 'none'; // Masquer le bouton si aucun article
    }
});
