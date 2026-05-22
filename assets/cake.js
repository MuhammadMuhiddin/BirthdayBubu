// Draw a cute birthday cake with candle animation
window.onload = function() {
    if (document.getElementById('cakeCanvas')) {
        drawCake();
    }
    if (typeof window.createConfetti === 'function') {
        window.createConfetti();
        window.createHearts();
    }
};

function drawCake() {
    const canvas = document.getElementById('cakeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cake base
    ctx.fillStyle = '#ffb6b9';
    ctx.fillRect(100, 250, 200, 80);
    ctx.strokeRect(100, 250, 200, 80);

    // Cake top
    ctx.beginPath();
    ctx.ellipse(200, 250, 100, 30, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();

    // Candle
    ctx.fillStyle = '#ffe066';
    ctx.fillRect(190, 170, 20, 60);
    ctx.strokeRect(190, 170, 20, 60);

    // Candle flame animation
    let flameY = 170;
    function drawFlame() {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(200, flameY, 10, 18, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#ffdf00';
        ctx.shadowColor = '#ffdf00';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();
    }
    function animateFlame() {
        ctx.clearRect(180, 150, 40, 40);
        flameY = 170 + Math.sin(Date.now()/200)*4;
        drawFlame();
        requestAnimationFrame(animateFlame);
    }
    animateFlame();

    // Cake decorations
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(120 + i*25, 285, 8, 0, Math.PI * 2);
        ctx.fillStyle = i%2===0 ? '#f67280' : '#c06c84';
        ctx.fill();
        ctx.stroke();
    }
}
