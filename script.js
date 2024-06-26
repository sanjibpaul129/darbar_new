document.getElementById('openPopup').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById('popupForm');
    if (event.target == popup) {
        popup.style.display = 'none';
        document.body.classList.remove('blurred');
    }
};
