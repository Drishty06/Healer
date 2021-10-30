var canvas, context, w, h, prevX = 0, currX = 0, prevY = 0, currY = 0, draw = false;

// canvas tutorial mdn docs: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
function init(){
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
    canvas.onpointermove = handlePointerMove;
    canvas.onpointerdown = handlePointerDown;
    canvas.onpointerup = stopDrawing;
    canvas.onpointerout = stopDrawing;
    document.querySelector(".clear").onclick = clearCanvas;
}

function drawLine(){
    var a = prevX, a_ = a, b = prevY, b_ = h-b, c = currX, c_ = c, d = currY, d_ = h-d;
    context.strokeStyle = getColor();
    context.lineWidth = 4;
    context.lineCap = "round";
    context.beginPath(); // starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.

    context.moveTo(a, b); // begins a new sub-path at the point specified by the given (x, y) coordinates
    context.lineTo(c, d); // adds a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y) coordinates.

    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w-a; b_ = b, c_ = w-c; d_ = d;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w-a; b_ = h-b, c_ = w-c; d_ = h-d;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w/2+h/2-b; b_ = w/2+h/2-a, c_ = w/2+h/2-d; d_ = w/2+h/2-c;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w/2+h/2-b; b_ = h/2-w/2+a, c_ = w/2+h/2-d; d_ = h/2-w/2+c;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w/2-h/2+b; b_ = w/2+h/2-a, c_ = w/2-h/2+d; d_ = w/2+h/2-c;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);

    a_ = w/2-h/2+b; b_ = h/2-w/2+a, c_ = w/2-h/2+d; d_ = h/2-w/2+c;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);
    
    context.stroke(); // adds a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y) coordinates.
    context.closePath();
}

function stopDrawing(){ // when the pointer is not down
    draw = false;
} 
// origin of co-ordinates is top left corner

// we first work out a relativeX value, which is equal to the horizontal mouse position in the viewport (e.clientX)
// minus the distance between the left edge of the canvas and left edge of the viewport (canvas.offsetLeft) — 
// effectively this is equal to the distance between the canvas left edge and the mouse pointer. 
// If the relative X pointer position is greater than zero and lower than the Canvas width, the pointer is within the Canvas boundaries.

function recordPointerLocation(event){
    prevX = currX;
    prevY = currY;
    currX = event.clientX - canvas.offsetLeft;
    currY = event.clientY - canvas.offsetTop;
}

function handlePointerMove(event) {
    if (draw) {
        recordPointerLocation(event);
        drawLine();
    }
}

function handlePointerDown(e) { // when mouse is clicked - draw is set to true
    recordPointerLocation(e);
    draw = true;
}

function clearCanvas(){
    if(confirm("Want to clear the canvas?"))
    {
        context.clearRect(0, 0, w, h);
    }
}

function getColor() {
    return document.querySelector(".color").value;
}

