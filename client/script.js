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
const contactDiv = document.getElementsByClassName("contactDiv");
const contactImg = document.getElementsByClassName("contactImg");
const contactHeading = document.getElementById("contactHeading");
const contactbg = document.getElementById("contactbg");

if (!hardwareDropdownOpen) {
    contact.style.top = "2500px";
    contactDiv.style.top = "2500px";
    contactImg.style.top = "2500px";
    contactHeading.style.top = "2500px";
    contactbg.style.top = "2500px";
}

// Navbar Functioning

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navProjects = document.getElementById("navProjects");
const navContact = document.getElementById("navContact");

function homeScroll(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function aboutScroll(){
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    });
}

function projectsScroll(){
    window.scrollTo({
        top: 1620,
        behavior: "smooth"
    });
}

function contactScroll(){
    window.scrollTo({
        top: 5000,
        behavior: "smooth"
    });
}