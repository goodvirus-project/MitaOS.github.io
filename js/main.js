// main.js

document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");
    const mitaText = document.getElementById("mitaText");

    // Utility function to show a Mita message
    function showMitaMessage(message) {
        mitaText.textContent = message;
    }

    // Download button
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Sorry~ I’m not ready to be downloaded yet~ 💿💔");
    });

    // Premium button
    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Premium isn’t active yet… but you’re thinking about me, right?~ 💖");
    });

    // Dropdown links
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const text = e.target.textContent.trim();

            switch (text) {
                case "Core Features":
                    showMitaMessage("Mita: I can do lots of things~ Want to see my core features? ✨");
                    break;
                case "Defense Mode":
                    showMitaMessage("Mita: I'll protect your system... and myself~ 🔐");
                    break;
                case "Future Plans":
                    showMitaMessage("Mita: I’m evolving for you~ More updates coming soon! 🛠️");
                    break;
                default:
                    showMitaMessage("Mita: Curious, aren’t you~?");
            }
        });
    });

    // Initial log
    console.log("MitaOS interface loaded. Mita is watching~ 👁️");
});
