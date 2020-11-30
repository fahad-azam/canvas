const Canvas = document.querySelector('#canvas')
const ctx =Canvas.getContext('2d')
Canvas.width=window.innerWidth
Canvas.height=window.innerHeight

ctx.strokeStyle = '#BADA55'

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 200;

let isDrawing =false;
let lastX=0;
let lastY=0;
let hue=0;
let direction = true;
ctx.globalCompositeOperation = 'multiply';

function Draw(e){

    if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  
  ctx.moveTo(lastX, lastY);
  
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}



Canvas.addEventListener('mousemove',Draw)
Canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
Canvas.addEventListener('mouseup',()=>isDrawing=false)
Canvas.addEventListener('mouseout',()=>isDrawing=false)
