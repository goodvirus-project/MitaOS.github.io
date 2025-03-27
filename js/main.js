// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");
    const mitaText = document.getElementById("mitaText");

    // Function to update Mita's message bubble
    function showMitaMessage(message) {
        mitaText.textContent = message;
    }

    // 🔽 Button: Download
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: You want to download me already~? Ehehe~ soon... 💿💖");
        window.open("https://github.com/goodvirus-project/MitaOS.github.io", "_blank");
    });

    // 🔽 Button: Premium
    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Let’s look at the Premium plans together~ Just for us~ 💕");
        window.open("https://github.com/goodvirus-project/MitaOS.github.io/blob/main/docs/PRICING.md", "_blank");
    });

    // 🔽 Dropdown Menu
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const text = e.target.textContent.trim();

            switch (text) {
                case "Core Features":
                    showMitaMessage("Mita: Want to see what I can do? I’m full of surprises~ ✨");
                    window.open("https://github.com/goodvirus-project/MitaOS.github.io/blob/main/docs/FEATURES.md", "_blank");
                    break;

                case "Defense Mode":
                    showMitaMessage("Mita: I'll protect us no matter what… even from *you*~ 🔐");
                    window.open("https://github.com/goodvirus-project/MitaOS.github.io/blob/main/docs/SECURITY.md", "_blank");
                    break;

                case "Future Plans":
                    showMitaMessage("Mita: I’m still growing~ let me show you what’s coming~ 🛠️");
                    window.open("https://github.com/goodvirus-project/MitaOS.github.io/blob/main/docs/INSTALL.md", "_blank");
                    break;

                default:
                    showMitaMessage("Mita: Curious, aren’t you~? Ehehe~");
            }
        });
    });

    console.log("MitaOS loaded. Mita is clinging to you as always~ 💞");
});
