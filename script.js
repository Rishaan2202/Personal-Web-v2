function mouseMovement(e) {
    const mousemove = document.getElementById("mousemove");
    const x = e.clientX;
    const y = e.clientY;
    mousemove.style.left = x-5 + "px";
    mousemove.style.top = y-5 + "px";
}

document.addEventListener("mousemove", mouseMovement);