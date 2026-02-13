// Confetti
const confettiBtn = document.getElementById('confetti-btn');

confettiBtn.addEventListener('click', () => {
    // Basic confetti burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Heart shaped confetti
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInOut(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);

        // Since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInOut(0.1, 0.3), y: Math.random() - 0.2 },
            shapes: ['heart'],
            colors: ['#ff0000', '#ff80ab', '#ffffff']
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInOut(0.7, 0.9), y: Math.random() - 0.2 },
            shapes: ['heart'],
            colors: ['#ff0000', '#ff80ab', '#ffffff']
        }));
    }, 250);

    // Change button text
    confettiBtn.innerText = "¡Te Amo! ❤️";
    confettiBtn.disabled = true; // Prevent spamming
    setTimeout(() => {
        confettiBtn.innerText = "¡Sí! ❤️";
        confettiBtn.disabled = false;
    }, 4000);
});

// Intro Envelope Logic
const introSeal = document.getElementById('intro-seal');
const introOverlay = document.getElementById('intro-overlay');

introSeal.addEventListener('click', () => {
    // 1. Open the flap
    introOverlay.classList.add('opening');

    // 2. Slide up and reveal content after flap animation
    setTimeout(() => {
        introOverlay.classList.add('open');
    }, 800); // Wait for flap to open
});
