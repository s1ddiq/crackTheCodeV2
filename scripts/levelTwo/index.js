const mirrors = document.querySelectorAll('.mirror');
const messageDisplay = document.getElementById('message-display');
const mirrorRoomContainer = document.querySelector('.mirror-room');

// Rotate the mirrors and check for alignment
mirrors.forEach(mirror => {
    mirror.addEventListener('click', () => {
        mirror.classList.toggle('rotated');

        // Check if the mirrors are correctly aligned
        checkAlignment();
    });
});

function checkAlignment() {
    const rotatedMirrors = document.querySelectorAll('.mirror.rotated');
    
    if (rotatedMirrors.length === mirrors.length) {
        // All mirrors rotated, reveal the secret message
        revealMessage();
    }
}



function revealMessage() {
    let randomMirrorValue = Math.floor(Math.random() * 3);
    console.log(randomMirrorValue)
    let secretMessage = mirrors[randomMirrorValue].getAttribute('data-hidden-message');
    
    messageDisplay.textContent = secretMessage;

    if (secretMessage === "Secret Code: 2000") {
        localStorage.setItem('level2', true); // GIVES LEVEL 2 ACHIEVEMNET TO PLAYER
        localStorage.setItem('key2', true);
        setTimeout(() => {
            destroyMirrorRoom();
        }, 1000);
    }
    messageDisplay.style.color = '#FFD700';
}

function destroyMirrorRoom() {
    mirrorRoomContainer.classList.add('glitch');
    setTimeout(() => {
        mirrorRoomContainer.classList.remove('glitch');
        showInputBox();

        setTimeout(() => {
            mirrorRoomContainer.classList.add('fade-out');
            messageDisplay.textContent = 'Input your code...';
        }, 1);
    }, 5000);
}
