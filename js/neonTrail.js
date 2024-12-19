const canvas = document.getElementById('trailCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

const trailPoints = [];

// Generate random neon color
function getRandomNeonColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 100%, 60%, 0.7)`;
}

// Handle mouse move
function handleMouseMove(e) {
    const point = {
        x: e.clientX,
        y: e.clientY,
        color: getRandomNeonColor(),
        timestamp: Date.now(),
    };
    trailPoints.push(point);
}

// Animation loop
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();

    // Draw trail points
    for (let i = 1; i < trailPoints.length; i++) {
        const prevPoint = trailPoints[i - 1];
        const currPoint = trailPoints[i];

        // Check if point is too old (2 seconds)
        if (now - currPoint.timestamp > 2000) {
            trailPoints.splice(i, 1);
            i--;
            continue;
        }

        // Fade effect based on time
        const age = now - currPoint.timestamp;
        const opacity = 1 - age / 2000;

        // Draw line
        ctx.beginPath();
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(currPoint.x, currPoint.y);

        // Set the line style
        ctx.strokeStyle = currPoint.color.replace('0.7', opacity);
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = currPoint.color;
        ctx.stroke();
    }

    // Continue the animation
    requestAnimationFrame(animate);
}

// Event listener for mouse move
window.addEventListener('mousemove', handleMouseMove);

// Start the animation
animate();
