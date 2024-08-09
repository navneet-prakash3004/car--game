const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');
let carPosition = 180;
let obstaclePosition = -100;
let speed = 2;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && carPosition > 0) {
        carPosition -= 20;
    }
    if (event.key === 'ArrowRight' && carPosition < 360) {
        carPosition += 20;
    }
    car.style.left = carPosition + 'px';
});

function moveObstacle() {
    obstaclePosition += speed;
    if (obstaclePosition > 600) {
        obstaclePosition = -100;
        speed += 0.5;  // Increase speed to make the game harder
    }
    obstacle.style.top = obstaclePosition + 'px';
    requestAnimationFrame(moveObstacle);
}

moveObstacle();
