const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

// White background
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Mouse Events
canvas.addEventListener("mousedown", () => {
    drawing = true;
});

document.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(e) {

    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
}

// Clear Button
function clearCanvas() {

    ctx.fillStyle = "white";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    document.getElementById("prediction").innerText =
        "Draw a digit and click Predict";
}

// Predict Button
function predictDigit() {

    const randomDigit = Math.floor(Math.random() * 10);

    document.getElementById("prediction").innerText =
        "Predicted Digit: " + randomDigit;
}
    
