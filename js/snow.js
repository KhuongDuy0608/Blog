document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    function updateCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    updateCanvasSize();
    const snowflakes = [];
    const maxSnowflakes = 400;

    class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 2 - 1;
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

        if (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width || this.x < 0) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    }

    function createSnowflakes() {
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(new Snowflake());
    }
    }

    function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animateSnow);
    }

    createSnowflakes();
    animateSnow();

    window.addEventListener('resize', () => {
    updateCanvasSize();
    snowflakes.length = 0;
    createSnowflakes();
    });
});