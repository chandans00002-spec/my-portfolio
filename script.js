// =========================
// DARK MODE
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");


// Check saved dark mode

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeBtn.textContent = "☀️ Light Mode";

}


// Dark mode button

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

        darkModeBtn.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("darkMode", "disabled");

        darkModeBtn.textContent = "🌙 Dark Mode";

    }

});



// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Electronics Engineer",
    "Embedded Systems Developer",
    "Software Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;


        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }


    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();