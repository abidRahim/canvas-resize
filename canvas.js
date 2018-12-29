var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c = context

// // rectangle
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(200, 400, 100, 100);
// c.fillStyle = 'rgba(254, 255, 0, 0.5)';
// c.fillRect(500, 200, 100, 100);


// // line
// c.beginPath();
// c.moveTo(500, 300);
// c.strokeStyle = "#fa3464";
// c.lineTo(300, 200);
// c.strokeStyle = "#df9651";
// c.lineTo(20, 400);
// c.stroke();

// // Arc / Circle
// // c.beginPath();
// // c.arc(300, 300, 60, Math.PI * 2, false);
// // c.strokeStyle = 'violet';
// // c.stroke();

// for (var i = 0; i < 500; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;

//   var r = Math.random() * 255;
//   var g = Math.random() * 255;
//   var b = Math.random() * 255;

  
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
  }

  this.update = function() {
    if(this.x + radius > innerWidth || this.x - radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + radius > innerHeight || y - radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;       
  }

  this.draw();
}

var circle = new Circle(200, 200, 3, 3, 30); 

// var x = 200;
// var y =200;
// var dx = 4;
// var dy = 4;
// var radius = 30;

// function animate() {
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI *2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();

//   if( x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }

//   if( y + radius > innerHeight|| y - radius < 0) {
//     dy = -dy;
//   }

//   x += dx;
//   y += dy;
//   requestAnimationFrame(animate);
// }
  
// animate();