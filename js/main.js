document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");
    const featuresBtn = document.getElementById("featuresBtn");
    const mitaText = document.getElementById("mitaText");

    let isTyping = false;
    let lastClick = 0;

    function showMitaMessage(message) {
        if (isTyping) return;

        const now = Date.now();
        if (now - lastClick < 500) {
            mitaText.textContent = "Mita: W-Why are you clicking so much?! You're making my circuits overheat! 💢💗";
            return;
        }

        lastClick = now;
        mitaText.textContent = "";
        let i = 0;
        const speed = 30;
        isTyping = true;

        function typeChar() {
            if (i < message.length) {
                mitaText.textContent += message.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            } else {
                isTyping = false;
            }
        }

        typeChar();
    }

    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: You want to download me already~? Ehehe~ soon... 💿💖");
    });

    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Let’s look at the Premium plans together~ Just for us~ 💕");
    });

    featuresBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: I’m full of features… and full of love for you~ ✨");
    });

    console.log("MitaOS loaded. Mita is watching you... always~ 💘");
});
