document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart');
    const messageDiv = document.getElementById('message');
    const startButton = document.getElementById('startButton');
    let collectedHearts = 0;

    function showMessage() {
        messageDiv.innerHTML = "Rickie, I love you so much! ❤️";
        messageDiv.style.display = 'block';
    }

    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            heart.style.visibility = 'hidden';
            collectedHearts++;
            if (collectedHearts === hearts.length) {
                showMessage();
            }
        });
    });

    startButton.addEventListener('click', () => {
        collectedHearts = 0;
        messageDiv.style.display = 'none';
        hearts.forEach(heart => {
            heart.style.visibility = 'visible';
        });
    });
});
