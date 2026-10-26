const playBtn = document.getElementById('playBtn');
const creditsBtn = document.getElementById('creditsBtn');
const updatesBtn = document.getElementById('updatesBtn');

const playScreen = document.getElementById('playScreen');
const creditsScreen = document.getElementById('creditsScreen');
const updatesScreen = document.getElementById('updatesScreen');

const closeScreenBtn = document.querySelectorAll('.closeScreen');

const openScreenBtn = document.querySelectorAll('.sBtn');

const screenHub = document.getElementById('hub');

function hideButtons() {
    playBtn.classList.add('hidden');
    creditsBtn.classList.add('hidden');
    updatesBtn.classList.add('hidden');
}

function showButtons() {
    playBtn.classList.remove('hidden');
    creditsBtn.classList.remove('hidden');
    updatesBtn.classList.remove('hidden');
}

closeScreenBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
        const parentScreen = this.closest('.screen');
        if (parentScreen) {
            parentScreen.classList.add('hidden');
            showButtons();
        }
    })
})


playScreen.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        startLevelOne();
    }
})
