function cloneImage(event) {
    const clickedImage = event.target;
    const clonedImage = clickedImage.cloneNode(true);

    clickedImage.parentNode.appendChild(clonedImage);
}
