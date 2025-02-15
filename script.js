const roles = ["AI & ML Engineer ", "Web Developer " ];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; 
const deletingSpeed = 50; 
const delayBeforeDelete = 2000; 
const delayBeforeNext = 1000; 

function typeEffect() {
    const spanElement = document.querySelector(".multiple-text");

    if (!spanElement) return;

    let currentRole = roles[index];
    if (isDeleting) {
        spanElement.innerText = currentRole.substring(0, charIndex--);
    } else {
        spanElement.innerText = currentRole.substring(0, charIndex++);
    }
    let nextDelay = isDeleting? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        nextDelay = delayBeforeDelete;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        nextDelay=delayBeforeNext;
    }

    setTimeout(typeEffect, nextDelay);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});
