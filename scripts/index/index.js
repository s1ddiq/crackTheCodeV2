// Create multiple dots and move them randomly
function createDots() {
    for (let i = 0; i < 12; i++) {  // Adjust number of dots here
        let dot = document.createElement('div');
        dot.classList.add('dot');
        document.body.appendChild(dot);
        animateDot(dot);
    }
}

// Animate dots to move smoothly to random positions
function animateDot(dot) {
    const randomPosition = () => ({
        x: Math.random() * 100,  // Random X position (0 to 100 vw)
        y: Math.random() * 100   // Random Y position (0 to 100 vh)
    });

    const moveDot = () => {
        let position = randomPosition();
        dot.style.transform = `translate(${position.x}vw, ${position.y}vh)`;
    };

    // Initial position and subsequent movements every 4s
    moveDot();
    setInterval(moveDot, 4000); // Adjust speed by changing interval time
}

createDots();


function startLevelOne() {
    let welcomeText = 'Welcome to Crack the Code V2';

    // Initially render the screen with the welcomeText
    playScreen.innerHTML = `
        <button class="closeScreen mergeIn">⬅</button>
        <h1 id="welcomeText" class="mergeSelfAfter">${welcomeText}</h1>
        <p class="mergeIn">If you haven't solved V1, we recommend going back to complete it before continuing.
        In this game, you will be tasked with uncovering hidden clues, solving cryptic puzzles, and decoding complex patterns to advance through each level.
        Sharpen your mind—each step will test your logic, creativity, and attention to detail. Are you ready?
        </p>
        <h2 id="proceed" class="mergeIn">enter to proceed</h2>
    `;

    // Update the welcomeText after 5 seconds
    setTimeout(() => {
        welcomeText = 'Level One';
        document.getElementById('welcomeText').textContent = welcomeText; // Update only the h1 text
    }, 3000);

    setTimeout(() => {
        window.location.href = 'levels/levelOne.html';
    }, 5000);
}
