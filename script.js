function mouseMovement(event) {
    const mousemove = document.getElementById("mousemove");
    const x = event.clientX;
    const y = event.clientY;
    mousemove.style.left = x + "px";
    mousemove.style.top = y + "px";
}