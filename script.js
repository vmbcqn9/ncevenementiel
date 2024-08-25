document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
});


document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    // Get product details
    const title = document.querySelector('.product-title').innerText;
    const price = document.querySelector('.product-price span').innerText.replace('€', '').trim();
    const quantity = document.getElementById('quantity').value;

    // Create a product object
    const product = {
        title,
        price,
        quantity
    };

    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, give feedback to the user
    alert('Produit ajouté au panier!');
});


