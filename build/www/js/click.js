// Create an audio object for the sound effect
const clickSound = new Audio('.click.wav');

// Add an event listener to play the sound on every click
document.addEventListener('click', () => {
    clickSound.play();
});
