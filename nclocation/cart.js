document.addEventListener('DOMContentLoaded', function() {
    const rentalItemsContainer = document.getElementById('rental-items');
    const buyingItemsContainer = document.getElementById('buying-items');
    const clearCartBtn = document.getElementById('clear-cart-btn');

    // Get the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        rentalItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        buyingItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    } else {
        let hasRentalItems = false;
        let hasBuyingItems = false;

        // Generate HTML for each cart item
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>Prix: ${item.price} €</p>
                <p>Quantité: ${item.quantity}</p>
                <p>Prix Total: ${item.quantity * item.price} €</p>
            `;

            // Check if the item is for rental or purchase
            if (item.type === 'rental') {
                rentalItemsContainer.appendChild(itemElement);
                hasRentalItems = true;
            } else if (item.type === 'buying') {
                buyingItemsContainer.appendChild(itemElement);
                hasBuyingItems = true;
            }
        });

        // Display empty message if no items in either section
        if (!hasRentalItems) {
            rentalItemsContainer.innerHTML = '<p>Pas d\'articles en location.</p>';
        }

        if (!hasBuyingItems) {
            buyingItemsContainer.innerHTML = '<p>Pas d\'articles à acheter.</p>';
        }
    }

    // Event listener for the clear cart button
    clearCartBtn.addEventListener('click', function() {
        // Clear the cart from localStorage
        localStorage.removeItem('cart');
        
        // Clear the cart items from the page
        rentalItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        buyingItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    });
});
