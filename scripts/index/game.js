function showScreen(screenElement) {
    screenElement.classList.remove('hidden');
    // screenElement.classList.add('shown');
    hideButtons();
    screenElement.setAttribute('tabindex', '0');
    screenElement.focus();
}

function playGame() {
    showScreen(playScreen);
}

function openCredits() {
    showScreen(creditsScreen);
}

function openUpdates() {
    showScreen(updatesScreen);
}
