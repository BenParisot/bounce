** html
<div id="here" class="container">
  <canvas width='400' height='400' id='canvas'></canvas>
</div>

** css

body {
  margin: 0;
}
.container {
  display: flex;
  height: 100vh;
  background-color: red;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
}
#canvas {
  position: absolute;
  top: 10px;
  left: 40px;
}

** js
let ctx = document.getElementById('canvas').getContext('2d')

ctx.fillStyle = 'green';
ctx.fillRect(0,0,400,400);
