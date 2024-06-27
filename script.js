document.getElementById('openPopup').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

document.getElementById('openPopup_bottom_nav').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById('popupForm');
    var popupContent = document.querySelector('.popup-content');

    if (event.target == popup) {
        popup.style.display = 'block';
        document.body.classList.add('blurred');
        document.body.style.overflow = 'hidden';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            menu.classList.remove('open');
        });
    });



    // Change navbar background color on scroll
    window.addEventListener('scroll', () => {
        bottom_nav = document.getElementById("bottom_nav");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'white';
            navbar.classList.add('scrolled');
            bottom_nav.style.display = 'flex';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.classList.remove('scrolled');
            bottom_nav.style.display = 'none';
        }
    });

    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    let counter = 0;
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const slideImages = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };

    window.goNextImage = () => {
        counter++;
        if (counter >= slides.length) {
            counter = 0;
        }
        slideImages();
    };

    window.goPrevImage = () => {
        counter--;
        if (counter < 0) {
            counter = slides.length - 1;
        }
        slideImages();
    };

    // Form submission
    const form = document.getElementById('enquiryForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const url = new URL('thankyou.html', window.location.href);
        url.searchParams.append('name', name);
        url.searchParams.append('email', email);
        url.searchParams.append('mobile', mobile);

        window.location.href = url.toString();
    });
});
