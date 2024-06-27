document.getElementById('openPopup').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    // document.body.classList.remove('blurred');
};



// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById('popupForm');
    var popupContent = document.querySelector('.popup-content');

    if (event.target == popup && !popupContent.contains(event.target)) {
        popup.style.display = 'block';
        // document.body.classList.remove('blurred');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const menu = document.getElementById('menu');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});

// this javascript is for slider
const slides  = document.querySelectorAll(".slide");
    var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`;
    }
)

const slideImages = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
const goNext = ()=>{
    counter++;
    slideImages()
    if(counter===7){
        counter =-1;
    }
}
const goPrev = ()=>{
    counter--;
    slideImages();
    if(counter===0){
        counter =8;
    }
}

// this javascript is for data parsing to thankyou page
document.addEventListener('DOMContentLoaded', () => {
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