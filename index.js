var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "black";

const context = canvas.getContext("2d");

// //filled rectangle

// context.fillStyle = "rgba(0,0,255,0.5)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgba(0,255,0,0.5)";
// context.fillRect(200, 200, 100, 100);
// context.fillStyle = "rgba(255,0,0,0.5)";
// context.fillRect(300, 300, 100, 100);

// //line
// context.beginPath();
// context.moveTo(400, 400);
// context.lineTo(500, 200);
// context.lineTo(600, 400);
// context.lineTo(700, 200);
// context.lineTo(800, 400);
// context.strokeStyle = "red";
// context.stroke();

// arc //circle

class Circle {
  constructor(x, y, dx, dy, radius, color1, color2) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color1 = color1;
    this.color2 = color2;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = this.color1;
    context.fillStyle = this.color2;
    context.lineWidth = 5;
    context.stroke();
    context.fill();
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// let dx = (Math.random() - 0.5) * (6 - 4) + 4;
// let dy = (Math.random() - 0.5) * (6 - 4) + 4;
// let radius = 50;

const radius = Math.random() * 50;
let circleArray = [];

for (let i = 0; i < 200; i++) {
  let letters = "0123456789ABCDEF";
  let color1 = "#";
  let color2 = "#";
  for (let j = 0; j < 6; j++) {
    color1 += letters[Math.floor(Math.random() * 16)];
    color2 += letters[Math.floor(Math.random() * 16)];
  }
  circleArray.push(
    new Circle(
      Math.random() * (window.innerWidth - radius * 2) + radius,
      Math.random() * (window.innerHeight - radius * 2) + radius,
      (Math.random() - 0.5) * (4 - 2 + 2),
      (Math.random() - 0.5) * (4 - 2 + 2),
      Math.random() * 50,
      color1,
      color2
    )
  );
}

// const circle = new Circle(
//   Math.random() * (window.innerWidth - radius * 2) + radius,
//   Math.random() * (window.innerHeight - radius * 2) + radius,
//   Math.random() - 0.5,
//   Math.random() - 0.5,
//   50
// );

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();

// let x = 0;
// let y = 0;
// let dx = 4;
// let dy = 4;
// count = 0;
// let radius = 50;
// function animate() {
//   requestAnimationFrame(animate);

//   context.clearRect(0, 0, window.innerWidth, window.innerHeight);

//   context.beginPath();
//   context.arc(x, y, radius, 0, Math.PI * 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();

//   if ((x + radius > window.innerWidth || x - radius < 0) && count > radius) {
//     dx = -dx;
//   }
//   if ((y + radius > window.innerHeight || y - radius < 0) && count > radius) {
//     dy = -dy;
//   }
//   x += dx;
//   y += dy;
//   count++;
// }
// animate();

// for (let i = 0; i < 200; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var j = 0; j < 6; j++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   context.beginPath();
//   context.arc(x, y, 50, 0, Math.PI * 2, false);
//   context.strokeStyle = color;
//   context.stroke();
// }

// context.beginPath();
// context.arc(800, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
// context.fillStyle = "grey";
// context.fill();
// context.arc(800, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
// context.strokeStyle = "grey";
// context.stroke();

// for (let i = 0; i <= 1400; i += 100) {
//   context.beginPath();
//   context.arc(i, 0, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 100, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 300, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 400, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 500, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 600, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.arc(i, 700, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
// }

// for (let i = 0; i <= 1400; i += 100) {
//   context.beginPath();
//   context.arc(i, 0, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 100, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 300, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 400, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 500, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 600, 50, Math.PI / 2, (Math.PI * 3) / 2, true);
//   context.strokeStyle = "grey";
//   context.stroke();
//   context.beginPath();
//   context.arc(i, 700, 50, Math.PI / 2, (Math.PI * 3) / 2, false);
//   context.strokeStyle = "grey";
//   context.stroke();
// }
