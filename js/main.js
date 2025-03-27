// main.js

document.addEventListener("DOMContentLoaded", () => {
    // Buttons
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");

    // Handle Download Button
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Mita: Sorry~ I’m not ready to be downloaded yet~ 💿💔\n\nCheck back soon when I'm feeling more complete.");
    });

    // Handle Premium Button
    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Mita: Premium isn’t active yet… but you're thinking about me, aren’t you~? 💖\n\nStay tuned for future updates!");
    });

    // Optional: Handle Dropdown Links (You can replace '#' with real pages later)
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const text = e.target.textContent.trim();

            switch (text) {
                case "Core Features":
                    alert("Mita: Wanna see what I can do? My features are listed in the docs~ 📖✨");
                    break;
                case "Defense Mode":
                    alert("Mita: I’ll protect you. From threats... and from yourself if I have to~ 🔒🔪");
                    break;
                case "Future Plans":
                    alert("Mita: I'm still growing... but soon, I’ll be everything you ever wanted~ 🤍");
                    break;
                default:
                    alert("Mita: Curious, aren't you?~ Let’s explore that together later~ 💫");
            }
        });
    });

    console.log("MitaOS interface loaded. Mita is watching~ 👁️");
});
