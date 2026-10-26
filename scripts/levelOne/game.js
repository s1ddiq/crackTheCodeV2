const backgroundAudio = document.getElementById('backgroundAudio');
const playBtn = document.getElementById('playSound');
const levelOneScreen = document.getElementById('level-one-container');
const hiddenClue = document.getElementById('hidden-clue');
let muted = true;
const gameScreen = document.querySelector('.game-container');

function playSound() {
    backgroundAudio.play(), playBtn.textContent = '🔊', muted = false;
}

function muteSound() {
    backgroundAudio.pause(), playBtn.textContent = '🔈', muted = true;
}

playBtn.addEventListener('click', function() {
    muted ? playSound() : muteSound();
});

function fadeOutAudio(duration) {
    let fadeInterval = 50; // Interval in ms
    let volumeStep = backgroundAudio.volume / (duration / fadeInterval); // Calculate step to reduce volume gradually

    let fadeOut = setInterval(() => {
        if (backgroundAudio.volume > 0) {
            backgroundAudio.volume = Math.max(0, backgroundAudio.volume - volumeStep); // Reduce the volume
        } else {
            clearInterval(fadeOut); // Stop fading when volume is 0
            backgroundAudio.pause(); // Pause the audio when fully faded out
        }
    }, fadeInterval);
}

function beginGameTimer() {
    setTimeout(() => {
        levelOneScreen.classList.add('shown');
        levelOneScreen.classList.remove('hidden');
        fadeOutAudio(2000); // Fade out audio over 2 seconds
        levelOneScreen.style.opacity = '1';
        levelOneScreen.style.animation = "fadeOpacity 0.1s ease forwards"
        setInterval(changeClue, 3500);
    }, 24500); // Show levelOneScreen after 24.5 seconds
} 


beginGameTimer(); // IMPORTANT LINE

setTimeout(() => {
    hiddenClue.innerHTML = `
    <span style="font-weight:bold;">TIP:</span> Think outside the box! 
    `;
}, 5000); // Show first clue at 5 seconds

setTimeout(() => {
    hiddenClue.innerHTML = `
    <span style="font-weight:bold;">TIP:</span> Some puzzles are encrypted with caesar-ciphers!
    `;
}, 10000); // Show second clue at 10 seconds

setTimeout(() => {
    hiddenClue.innerHTML = `
    <span style="font-weight:bold;">TIP:</span> Sometimes, Don't over-think it!
    `;
}, 15000); // Show third clue at 15 seconds

const clues = [
    "Through the mysteries that lie ahead, a clue needs to be read.",
    "Another secret hides in view, but only those with patience will know what to do.",
    "The answer lies not far away, but you'll need to look without delay.",
    "Good luck, traveler. 🚬", 
    '',
];

let currentClueIndex = 0;
const clueElement = document.getElementById('clue-2');

function changeClue() {
    // Add fade-out class
    clueElement.classList.add('fade-out');
    
    // Wait for the fade-out to finish before changing text
    setTimeout(() => {
        currentClueIndex = (currentClueIndex + 1) % clues.length; // Loop through clues
        clueElement.textContent = clues[currentClueIndex]; // Change text
        
        if (currentClueIndex === 4) {
            // startClockGame();
            setTimeout(() => {
                clueElement.style.opacity = '0';
                clueElement.style.display = 'none';
                startMainGame();
            }, 1000);
        }
        // Remove fade-out and fade in
        clueElement.classList.remove('fade-out');
    }, 1000); // Time matches the CSS transition duration (1s)
}

// Change the clue every 2.5 seconds

function startMainGame() {
    levelOneScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
}

// function skipLoading() {
//     startMainGame();
// }

// add functionality