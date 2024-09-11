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


document.addEventListener('DOMContentLoaded', function() {
    const rentButton = document.getElementById('rent-btn');

    rentButton.addEventListener('click', function() {
        const productTitle = document.querySelector('.product-title').textContent;
        const productPrice = document.querySelector('.product-price span').textContent;
        const quantity = document.getElementById('quantity').value;

        const product = {
            title: productTitle,
            price: productPrice,
            quantity: quantity
        };

        // Récupérer le panier du localStorage ou créer un nouveau panier
        let cart = localStorage.getItem('cart');
        if (cart) {
            cart = JSON.parse(cart);
        } else {
            cart = [];
        }

        // Ajouter le produit au panier
        cart.push(product);

        // Sauvegarder le panier dans le localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Rediriger vers la page du panier
        window.location.href = 'cart.html';
    });
});

