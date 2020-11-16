
let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

let rectangles = [
    {
        "x": 10,
        "y": 10,
        "color": "green"
    },
    {
        "x": 20,
        "y": 20,
        "color": "blue"
    },
    {
        "x": 30,
        "y": 30,
        "color": "yellow"
    },
    {
        "x": 40,
        "y": 40,
        "color": "red"
    },
    {
        "x": 50,
        "y": 50,
        "color": "orange"
    }
];

/*
for (i = 0; i < rectangles.length; i++) {
    ctx.fillRect(rectangles[i].x, rectangles[i].y, 200, 100);
    console.log("x = " + rectangles[i].x + " : y= " + rectangles[i].y)
}
*/

rectangles.forEach(rectangle => {
    //ctx.fillRect(rectangle.x, rectangle.y, 200, 100);
    drawRect(rectangle);
})



function drawRect(rectangle) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = rectangle.color;
    ctx.rect(rectangle.x, rectangle.y, 150, 140);
    ctx.stroke();
}


function clearCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}