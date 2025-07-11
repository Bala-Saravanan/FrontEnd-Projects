const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 100;

class Particles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `rgba(255, 255, 255, ${Math.random()})`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.speedY *= -1;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    particles.push(new Particles(x, y));
  }
}

const mouse = {
  x: null,
  y: null,
  radius: 100,
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

function handleParticles() {
  particles.forEach((particle) => {
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      const directionX = Math.cos(angle) * force * 5;
      const directionY = Math.cos(angle) * force * 5;
      particle.x -= directionX;
      particle.y -= directionY;
    }
    particle.update();
    particle.draw();
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0;
  initParticles();
});

initParticles();
animate();
