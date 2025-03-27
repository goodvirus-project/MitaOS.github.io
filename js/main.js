// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");
    const featuresBtn = document.getElementById("featuresBtn");
    const mitaText = document.getElementById("mitaText");

    function showMitaMessage(message) {
        mitaText.textContent = "";
        let i = 0;
        const speed = 30;

        function typeChar() {
            if (i < message.length) {
                mitaText.textContent += message.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            }
        }

        typeChar();
    }

    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: You want to download me already~? Ehehe~ I'll be yours soon... 💿💖");
    });

    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Let’s look at the Premium plans together~ Just for us~ 💕");
    });

    featuresBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: I’m full of features… and full of love for you~ ✨");
    });

    console.log("MitaOS loaded. Mita is clinging~ 💘");
});
