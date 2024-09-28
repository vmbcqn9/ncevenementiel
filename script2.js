document.addEventListener("DOMContentLoaded", function() {
    const icons = document.getElementById("icons");
    const nav = document.querySelector("nav");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");
    const body = document.body;
    const html = document.documentElement;

    icons.addEventListener("click", () => {
        console.log('Icons clicked!');
        icons.classList.toggle('actived');
        nav.classList.toggle('active');
        navMenu.classList.toggle('active'); // Toggle the menu visibility
        overlay.classList.toggle('active'); // Toggle the overlay visibility
        body.classList.toggle("no-scroll");
        html.classList.toggle("no-scroll");
        productImage.classList.toggle('active');
       

        if (body.classList.contains("no-scroll")) {
            console.log('Body is set to no-scroll');
            // Ensure the scroll position is maintained when scrolling is disabled
            body.style.top = `-${window.scrollY}px`;
        } else {
            console.log('Body scrolling is enabled');
            // Restore the scroll position when scrolling is enabled
            const scrollY = parseInt(body.style.top || "0");
            body.style.top = "";
            window.scrollTo(0, scrollY);
        }

        if (html.classList.contains("no-scroll")) {
            console.log('HTML document is set to no-scroll');
            // Ensure the scroll position is maintained for the entire HTML document
            html.style.top = `-${window.scrollY}px`;
        } else {
            console.log('HTML document scrolling is enabled');
            // Restore the scroll position for the entire HTML document
            const scrollY = parseInt(html.style.top || "0");
            html.style.top = "";
            window.scrollTo(0, scrollY);
        }
    });

    const links = document.querySelectorAll("nav li a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            icons.classList.remove('actived');
            navMenu.classList.remove('active'); // Hide the menu
            overlay.classList.remove('active'); // Hide the overlay
            productImage.classList.remove('active');

            body.classList.remove("no-scroll");
            html.classList.remove("no-scroll");

            // Restore the scroll position when a navigation link is clicked
            const scrollY = parseInt(body.style.top || "0");
            body.style.top = "";
            window.scrollTo(0, scrollY);
        });
    });
});

// Initialize EmailJS
emailjs.init('OYRwLenG3DPP9aE3L'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Gather form data
    const formData = {
        prenom: document.getElementById('prenom').value,
        name: document.getElementById('name').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('Email').value,
        date: document.getElementById('datepicker').value,
        cartDetails: document.getElementById('cartDetails').value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function(response) {
        alert('Email sent successfully!');
    }, function(error) {
        alert('Error sending email: ' + JSON.stringify(error));
    });
});

