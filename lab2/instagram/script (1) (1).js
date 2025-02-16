document.addEventListener("DOMContentLoaded", () => {
    const phoneUiImage = document.getElementById('ig-phone-ui-img');
    let currentImage = 0;

    function changePhoneUiImage() {
        currentImage = (currentImage + 1) % 4;
        phoneUiImage.src = ('assets/insta' + String(currentImage + 1) + '.png');
    }

    setInterval(changePhoneUiImage, 8000);

});