// Mouse Hover Effect 
 function mouseMovement(e) {
        const mousemove = document.getElementById("mousemove");
        const x = e.clientX;
        const y = e.clientY;
        mousemove.style.left = x-5 + "px";
        mousemove.style.top = y-5 + "px";
    }

    document.addEventListener("mousemove", mouseMovement);

//Dropdown Logic
const hardwareCard = document.getElementById("hardwareCard");
const softwareCard = document.getElementById("softwareCard");
const cadCard = document.getElementById("cadCard");

const hardwareDropdown = document.getElementById("dropdown1");
const cadDropdown = document.getElementById("dropdown2");
const softwareDropdown = document.getElementById("dropdown3");

let hardwareDropdownOpen = false;
let cadDropdownOpen = false;
let softwareDropdownOpen = false;

hardwareCard.addEventListener("click", () => {  

    if (hardwareDropdownOpen) {
        hardwareDropdown.style.animation = "dropdownOpen 0.5s forwards";
    } else {
        hardwareDropdown.style.animation = "dropdownClose 0.5s forwards";
    }

    hardwareDropdownOpen = !hardwareDropdownOpen;

});

cadCard.addEventListener("click", () => {  

    if (cadDropdownOpen) {
        cadDropdown.style.animation = "dropdownOpen 0.5s forwards";
    } else {
        cadDropdown.style.animation = "dropdownClose 0.5s forwards";
    }

    cadDropdownOpen = !cadDropdownOpen;

});

softwareCard.addEventListener("click", () => {  

    if (softwareDropdownOpen) {
        softwareDropdown.style.animation = "dropdownOpen 0.5s forwards";
    } else {
        softwareDropdown.style.animation = "dropdownClose 0.5s forwards";
    }

    softwareDropdownOpen = !softwareDropdownOpen;

});

// Alignment Logic

const contact = document.getElementById("contact");
const contactDiv = document.getElementById("contactDiv");
const contactImg = document.getElementById("contactImg");
const contactHeading = document.getElementById("contactHeading");
const contactbg = document.getElementById("contactbg");

if (hardwareDropdownClose) {
    contact.style.top = "4000px";
    contactDiv.style.top = "4000px";
    contactImg.style.top = "4000px";
    contactHeading.style.top = "4000px";
    contactbg.style.top = "4000px";
}