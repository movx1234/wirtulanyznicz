// script.js
document.getElementById('lightCandle').addEventListener('click', function() {
    const candle = document.getElementById('candle');
    // Zmieniamy obrazek na zapalony znicz
    candle.src = 'candle_on.png';
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    if (message) {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        document.getElementById('message').value = ''; // Czyści pole tekstowe
    } else {
        alert('Wpisz wiadomość przed wysłaniem!');
    }
});
