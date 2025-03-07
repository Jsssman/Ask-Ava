
function showGif() {
    document.getElementById('gif-container').style.display = 'block';
}

function moveNo(button) {
    const offsetX = Math.random() * (window.innerWidth - button.clientWidth);
    const offsetY = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
}
