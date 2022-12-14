let width;
let height;
let intervalId;

window.addEventListener("load", init);

function init() {
    startEventHandler();
}

const removeCircleHandler = (ball) => {
    ball.addEventListener("click", () => {
        ball.remove();
    });
};

const addCircle = () => {
    resetCircles();
    const numberOfCircles = document.getElementById("number-of-circles").value;
    for (let i = 0; i < numberOfCircles; i++) {
        createCircle();
    }
    animate();
};

const animate = () => {
    let growthRate = document.getElementById("rate").value;
    let growthAmount = document.getElementById("growth-amount").value;
    const balls = document.getElementsByClassName("ball");
    intervalId = setInterval(() => {
        for (let i = 0; i < balls.length; i++) {
            height = parseInt(height) + parseInt(growthAmount);
            balls[i].style.width =
                parseInt(balls[i].style.width) + parseInt(growthAmount) + "px";
            balls[i].style.height =
                parseInt(balls[i].style.height) + parseInt(growthAmount) + "px";
            balls[i].style.top =
                parseInt(balls[i].style.top) - growthAmount / 2 + "px";
            balls[i].style.left =
                parseInt(balls[i].style.left) - growthAmount / 2 + "px";
            removeCircleHandler(balls[i]);
        }
    }, growthRate);
};

const resetCircles = () => {
    const container = document.getElementById("circle-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    clearInterval(intervalId);
};

const createCircle = () => {
    width = document.getElementById("width").value;
    height = width;
    const node = document.createElement("div");
    node.className = "ball";
    node.style.width = width + "px";
    node.style.height = height + "px";
    node.style.backgroundColor = getRamdomColorHex();
    node.style.top = getRndPosition(10, window.innerHeight) + "px";
    node.style.left = getRndPosition(10, window.innerWidth) + "px";
    document.getElementById("circle-container").appendChild(node);
};

const startEventHandler = () => {
    const start = document.getElementById("start");
    start.addEventListener("click", addCircle);
};

const getRamdomColorHex = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const getRndPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};