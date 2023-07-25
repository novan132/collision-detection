let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

const colors = [
    "#026E81",
    "#00ABBD",
    "#0099DD",
    "#FF9933",
]

addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener("resize", function(event) {
    canvas.width = innerWidth;
    canvas.height = inner.height;
    init();
})

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
    }

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
    }
}

let particles;

function init() {
    particles = [];
    for (let i = 0; i < 4; ++i) {
        const x = Math.random() * innerWidth;
        const y = Math.random() * innerHeight;
        const radius = 100;
        const color = "blue";

        if (i != 0) {
            for (let j = 0; j < particles.length; ++j) {
                
            }
        }
        particles.push(new Particle(x, y, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
    });

    let d = getDistance(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.radius + circle2.radius) circle1.color = "red";
    else circle1.color = "blue";
}

init();
animate();
