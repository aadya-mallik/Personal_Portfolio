const roles = [
    "Frontend Web Developer",
    "Web Development Student",
    "Aspiring Web Intern"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const el = document.getElementById("typing");
    const text = roles[roleIndex];

    if (!deleting) {
        el.textContent = text.slice(0, ++charIndex);
        if (charIndex === text.length) deleting = true;
    } else {
        el.textContent = text.slice(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

/* Dark mode */
document.getElementById("darkToggle").onclick = () =>
    document.body.classList.toggle("dark-mode");

/* Contact */
document.getElementById("contactForm").onsubmit = e => {
    e.preventDefault();

    const smsBox = document.getElementById("smsBox");
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    document.getElementById("smsTime").innerText = time;
    smsBox.classList.remove("hidden");
    
document.querySelectorAll(".circle").forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    circle.style.setProperty("--percent", percent);
});
    e.target.reset();
};

