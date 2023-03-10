var i = 0;
var txt = "i make software that you don't need, and write code that you don't want.";
var speed = 50;


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = '#673ab7';
})

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function circleAnimate() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(circleAnimate);
}

circleAnimate()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1000);

