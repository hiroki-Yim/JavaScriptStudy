  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");


  context.beginPath();
  context.moveTo(120,20);
  context.lineTo(20,50);
  context.lineTo(150,120);
  context.lineTo(120,20);
  context.strokeStyle="magenta";
  context.stroke();
