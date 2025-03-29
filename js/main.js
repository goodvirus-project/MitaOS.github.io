document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const downloadBtn = document.getElementById("downloadBtn");
    const premiumBtn = document.getElementById("premiumBtn");
    const featuresBtn = document.getElementById("featuresBtn");
    const mitaText = document.getElementById("mitaText");
    const mitaMessage = document.getElementById("mitaMessage");
    const mitaSprite = document.querySelector(".mita-waifu-float");
    const navbar = document.querySelector(".navbar");
    const mainQuote = document.getElementById("main-quote");

    // State variables
    let isTyping = false;
    let lastClick = 0;
    let messageQueue = [];
    let currentMessage = "";
    let clickCount = 0;
    const cooldownPeriod = 1500; // 1.5 seconds

    // Initialize animations
    initAnimations();

    // Typing effect with improved realism
    function showMitaMessage(message) {
        if (message === currentMessage) return;
        
        const now = Date.now();
        clickCount++;
        
        // Handle rapid clicking
        if (now - lastClick < 300 && clickCount > 2) {
            if (!isTyping) {
                currentMessage = "Mita: W-Why are you clicking so much?! You're making my circuits overheat! 💢💗";
                messageQueue = []; // Clear queue
                startTypingEffect(currentMessage);
            }
            return;
        }

        lastClick = now;
        messageQueue.push(message);
        
        if (!isTyping) {
            processMessageQueue();
        }
    }

    function processMessageQueue() {
        if (messageQueue.length === 0) {
            currentMessage = "";
            return;
        }

        currentMessage = messageQueue.shift();
        startTypingEffect(currentMessage);
    }

    function startTypingEffect(message) {
        isTyping = true;
        mitaText.textContent = "";
        mitaMessage.classList.add("active");
        
        // Random typing speed variation for realism
        const baseSpeed = 20;
        const randomVariation = Math.random() * 20;
        const speed = baseSpeed + randomVariation;
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < message.length) {
                // Occasionally add slight delays between words
                if (message.charAt(i) === ' ' && Math.random() > 0.7) {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        const newInterval = setInterval(continueTyping, speed);
                        function continueTyping() {
                            if (i < message.length) {
                                mitaText.textContent += message.charAt(i);
                                i++;
                            } else {
                                clearInterval(newInterval);
                                finishTyping();
                            }
                        }
                        continueTyping();
                    }, 100 + Math.random() * 200);
                } else {
                    mitaText.textContent += message.charAt(i);
                    i++;
                }
            } else {
                clearInterval(typingInterval);
                finishTyping();
            }
        }, speed);

        function finishTyping() {
            isTyping = false;
            mitaMessage.classList.remove("active");
            
            // Process next message after a short delay
            setTimeout(processMessageQueue, 1000);
            
            // Reset click counter after cooldown
            setTimeout(() => {
                clickCount = 0;
            }, cooldownPeriod);
            
            // Trigger sprite animation
            animateSprite();
        }
    }

    // Sprite animations
    function animateSprite() {
        mitaSprite.style.transform = "translateY(-10px)";
        setTimeout(() => {
            mitaSprite.style.transform = "translateY(0)";
        }, 300);
    }

    // Initialize animations and effects
    function initAnimations() {
        // Navbar scroll effect
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

        // Quote hover effect
        mainQuote.addEventListener("mouseenter", () => {
            mainQuote.style.transform = "scale(1.02)";
            mainQuote.style.textShadow = "0 0 15px rgba(255, 207, 231, 0.5)";
        });

        mainQuote.addEventListener("mouseleave", () => {
            mainQuote.style.transform = "scale(1)";
            mainQuote.style.textShadow = "0 0 8px rgba(255, 207, 231, 0.3)";
        });

        // Button hover sounds (optional)
        const buttons = [downloadBtn, premiumBtn, featuresBtn];
        buttons.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                // Could add a subtle sound effect here
                btn.style.transform = "translateY(-3px)";
            });
            
            btn.addEventListener("mouseleave", () => {
                btn.style.transform = "translateY(0)";
            });
            
            btn.addEventListener("mousedown", () => {
                btn.style.transform = "translateY(1px)";
            });
            
            btn.addEventListener("mouseup", () => {
                btn.style.transform = "translateY(-3px)";
            });
        });

        // Initial message
        setTimeout(() => {
            showMitaMessage("Mita: I hope you're Nico... but if not, I'll still love you anyway~ 💕");
        }, 1500);
    }

    // Button event listeners with debouncing
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: You want to download me already~? Ehehe~ soon... 💿💖");
    });

    premiumBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: Let's look at the Premium plans together~ Just for us~ 💕");
    });

    featuresBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMitaMessage("Mita: I'm full of features… and full of love for you~ ✨");
    });

    // Easter egg for console
    const styles = [
        "color: #ff5ca7",
        "background: #1f0e23",
        "font-size: 14px",
        "padding: 8px 12px",
        "border-radius: 4px",
        "font-family: 'Orbitron', sans-serif"
    ].join(";");
    
    console.log("%cMitaOS fully initialized. Mita is watching you... always~ 💘", styles);
    console.log("%c(◕‿◕✿) Don't peek too much or I'll get jealous!", "color: #ff91b3; font-style: italic");
});