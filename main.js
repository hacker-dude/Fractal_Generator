function drawPoint(context, x, y, color, size) {
    if (color == null) {
        color = '#000';
    }
    if (size == null) {
        size = 5;
    }

    var radius = 0.5 * size;

    // to increase smoothing for numbers with decimal part
    var pointX = Math.round(x - radius);
    var pointY = Math.round(y - radius);

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(pointX, pointY, size, size);
    context.fill();
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Usage example:
var [A, B, C] = [[500, 50], [50, 700], [950, 700]]
var points = [A, B, C]



var canvas = document.querySelector('#my-canvas');
var context = canvas.getContext('2d');

drawPoint(context, A[0], A[1], 'red', 4);
drawPoint(context, B[0], B[1], 'red', 4);
drawPoint(context, C[0], C[1], 'red', 4);

var [r1, r2] = [Math.random(), Math.random()]
var s1 = r1 ** .5

var x = A[0] * (1.0 - s1) + B[0] * (1.0 - r2) * s1 + C[0] * r2 * s1
var y = A[1] * (1.0 - s1) + B[1] * (1.0 - r2) * s1 + C[1] * r2 * s1

drawPoint(context, x, y, 'blue', 2)

async function draw() {

    for (let i = 0; i < 50000; i++) {
        var point = points[Math.floor(Math.random() * points.length)]
        x = (x + point[0]) / 2
        y = (y + point[1]) / 2
        setTimeout(() => {
            drawPoint(context, x, y, 'blue', 1)
        }, 10);
       
        await sleep(0)
    }

}

draw()

