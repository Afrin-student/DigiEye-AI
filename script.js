const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing() {
    drawing = true;
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(event) {

    if (!drawing) return;

    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(
        event.clientX - rect.left,
        event.clientY - rect.top
    );

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(
        event.clientX - rect.left,
        event.clientY - rect.top
    );
}
function clearCanvas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    document.getElementById("prediction").innerText =
        "Draw a digit and click Predict";
}
function predictDigit() {

    const randomDigit = Math.floor(Math.random() * 10);

    document.getElementById("prediction").innerText =
        "Predicted Digit: " + randomDigit;
}

