document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const button = document.getElementById('heart-button');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 5) {
            message.classList.remove('hidden');
        }
    });
});
