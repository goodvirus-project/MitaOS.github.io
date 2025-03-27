// main.js

console.log("Mita is watching you interact...");

// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.querySelector(".btn[href='#']");
    const featuresBtn = document.querySelector(".btn[href='#features']");
    const premiumBtn = document.querySelector(".btn[href='#premium']");

    downloadBtn.addEventListener("click", () => {
        alert("Mita: Sorry~ I’m not ready to be downloaded yet~ 💿💔");
    });

    featuresBtn.addEventListener("click", () => {
        alert("Mita: My features are listed in the GitHub docs for now~ 📄✨");
        window.location.href = "./docs/FEATURES.md";
    });

    premiumBtn.addEventListener("click", () => {
        alert("Mita: Ehehe~ Premium isn’t active yet… but you’re thinking about it, right?~ 💖");
        window.location.href = "./docs/PRICING.md";
    });
});
