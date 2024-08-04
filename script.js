document.getElementById('enterButton').addEventListener('click', function() {
    document.getElementById('door').style.display = 'none';
    document.getElementById('question1').classList.remove('hidden');
});

function handleLoveResponse(response) {
    if (response === 'yes') {
        document.getElementById('question1').classList.add('hidden');
        createEmojis('😍'); // Display heart emojis
        document.getElementById('question2').classList.remove('hidden');
    } else {
        document.getElementById('error').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('error').classList.add('hidden');
        }, 2000); // Hide the error message after 2 seconds
    }
}

function handleMarriageResponse(response) {
    if (response === 'yes') {
        document.getElementById('question2').classList.add('hidden');
        createEmojis('💋'); // Display kiss emojis
        document.getElementById('question3').classList.remove('hidden');
    } else {
        alert('You got no choice other than marrying me! 😉');
    }
}

function handleSorryResponse(response) {
    if (response === 'yes') {
        document.getElementById('question3').classList.add('hidden');
        alert('Good boy! 😊');
        document.getElementById('finalContent').classList.remove('hidden');
    } else {
        dragNo();
    }
}

function createEmojis(emoji) {
    for (let i = 0; i < 20; i++) {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'emoji';
        emojiElement.textContent = emoji;
        emojiElement.style.left = `${Math.random() * window.innerWidth}px`;
        emojiElement.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(emojiElement);

        // Remove emoji after animation ends
        emojiElement.addEventListener('animationend', () => {
            emojiElement.remove();
        });
    }
}

function dragNo() {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
    noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
}
