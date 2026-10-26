const key = document.querySelector('.cube');
const door = document.querySelector('.door');
const doorCont = document.getElementById('door-container');



function completeLevelOne() {
        localStorage.setItem('level1', true);
        window.location.href = 'levelTwo.html';

        key.textContent = '...'
}
key.addEventListener('click', () => {
    // Store the key information in localStorage
    localStorage.setItem('KEY1', true);
    key.textContent = 'Key Found';

    // Hide the key after 2 seconds
    setTimeout(() => {
        key.style.display = 'none';

        // Call the function to open the door and show the light
        completeLevelOne();
    }, 2000);
});
