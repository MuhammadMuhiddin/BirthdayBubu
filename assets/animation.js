// Simple confetti and heart animation for all pages
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

window.onload = function() {
    createConfetti();
    createHearts();
};

// Add styles for confetti and hearts
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: fixed;
    top: -20px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0.7;
    z-index: 9999;
    animation: confetti-fall linear forwards;
}
@keyframes confetti-fall {
    to {
        top: 110vh;
        transform: rotate(360deg);
    }
}
.floating-heart {
    position: fixed;
    bottom: -30px;
    width: 24px;
    height: 24px;
    background: url('data:image/svg+xml;utf8,<svg fill="%23ff69b4" viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg"><path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,6.1,5.2,11.1,13.1,18.3l2.3,2.1l2.3-2.1 C26.8,21.5,32,16.5,32,10.4C32,4.7,27.3,0,23.6,0z"/></svg>');
    background-size: cover;
    opacity: 0.8;
    z-index: 9999;
    animation: heart-float linear forwards;
}
@keyframes heart-float {
    to {
        bottom: 110vh;
        transform: translateY(-100px) scale(1.2);
    }
}
`;
document.head.appendChild(style);
