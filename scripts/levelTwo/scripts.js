const inputBoxContainer = document.getElementById('inputBoxContainer');
const inputBox = document.getElementById('inputBox');
let correctPassword = '2000';
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

function showInputBox() {
    inputBoxContainer.style.display = 'flex';
    inputBoxContainer.style.opacity = '5';
}

inputBox.addEventListener('change', (password) => {
    if (inputBox.value === correctPassword) {
        messageDisplay.style.color = 'green';
        correctSound.play();
        destroyLevel();
    } else if (inputBox.value === 'ownerCommand') {
        let trueOw = prompt('are you the owner?');

        trueOw === 'yes' ? ownerCmd() : null
    }
    else {
        messageDisplay.style.color = 'red';
        wrongSound.play();
    } 
})

function destroyLevel() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'levelThree.html';
    }, 3000);
}

function ownerCmd() {
    alert('go in console')
    console.log('CODE 2000, LEVELTHREE() FOR SKIPPING')
}


function LEVELTHREE() {
    alert('sure thing boss');
    window.location.href = 'levelThree.html';
}