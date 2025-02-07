// 粒子背景效果
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.size -= 0.05;
        if (this.size < 0) {
            this.x = (Math.random() * canvas.width);
            this.y = 0;
            this.size = (Math.random() * 5) + 1;
            this.weight = (Math.random() * 2) + 0.1;
        }
        this.y += this.weight;
        this.weight += 0.1;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = (Math.random() * canvas.width);
        }
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = (Math.random() * 5) + 1;
        const color = '#00ffcc';
        const weight = 1;
        particlesArray.push(new Particle(x, y, size, color, weight));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

// 視差滾動效果
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const banner = document.querySelector('.banner');
    banner.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// 表單提交確認
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('感謝您的訊息！我會盡快回覆。');
});