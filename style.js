/* ===========================
   SANTOSH NESARGI PORTFOLIO
=========================== */

/* TYPING ANIMATION */

const text = "Java Full Stack Developer";
let index = 0;

function typingEffect() {

    const typing = document.getElementById("typing");

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();

/* DARK / LIGHT MODE */

const themeToggle =
document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';
        }

    });
}

/* CONTACT FORM */

// const form =
// document.getElementById("contact-form");

// if (form) {

//     form.addEventListener("submit", (e) => {

//         e.preventDefault();

//         alert(
//             "Thank you for contacting me. Configure EmailJS to receive messages directly on your email."
//         );

//         form.reset();
//     });
// }

/* COUNTER ANIMATION */

const counters =
document.querySelectorAll(".counter");

const runCounters = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

            const increment =
            Math.ceil(target / 50);

            if (count < target) {

                count += increment;

                counter.innerText = count;

                setTimeout(
                    updateCounter,
                    40
                );

            } else {

                counter.innerText =
                target;
            }
        };

        updateCounter();
    });
};

runCounters();

/* SCROLL TO TOP BUTTON */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "100px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "55px";
scrollBtn.style.height = "55px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.background =
"linear-gradient(90deg,#7ee7ff,#7b61ff)";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";

/* SHOW BUTTON */

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display =
        "block";

    } else {

        scrollBtn.style.display =
        "none";
    }
});

/* CLICK */

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    }
);

/* ACTIVE NAV LINK */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add(
                "active"
            );
        }
    });
});

/* PROJECT IMAGE HOVER EFFECT */

const projectImage =
document.querySelector(
".project-card img"
);

if (projectImage) {

    projectImage.addEventListener(
        "mouseenter",
        () => {

            projectImage.style.transform =
            "scale(1.03)";

            projectImage.style.transition =
            ".4s";
        }
    );

    projectImage.addEventListener(
        "mouseleave",
        () => {

            projectImage.style.transform =
            "scale(1)";
        }
    );
}

/* PRELOADER (OPTIONAL) */

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
        "1";
    }
);

/* FUTURE EMAILJS PLACE */



document.getElementById("contact-form")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        name: document.querySelector(
            'input[type="text"]'
        ).value,

        email: document.querySelector(
            'input[type="email"]'
        ).value,

        message: document.querySelector(
            'textarea'
        ).value
    };

    const response = await fetch(
        "http://localhost:8080/api/contact",
        {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    if(response.ok){

        alert("Message Sent!");

        this.reset();

    }else{

        alert("Failed!");
    }
});



/* PORTFOLIO READY */

console.log(
"Portfolio Loaded Successfully"
);


window.addEventListener("load", () => {

    setTimeout(() => {

        const speech = new SpeechSynthesisUtterance(
            "Welcome to my portfolio. I am Santosh Nesargi, a Java Full Stack Developer skilled in Java,JPA,Servlet Spring Boot, HTML,CSS, JAVAscrift, React, OracalSQL and MySQL. Please explore my projects and feel free to contact me."
        );

        speech.lang = "en-US";
        speech.rate = 0.95;

        window.speechSynthesis.speak(speech);

    }, 1500);

});