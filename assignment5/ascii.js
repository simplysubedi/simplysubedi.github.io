window.onload = eventHandlers
let selectedAnimation = ""
let frames = []
let intervalID = ""
let index = 0;
function eventHandlers() {
    const animationSelect = document.getElementById("animation");
    const animationScreen = document.getElementById("animation-screen");
    const sizeSelect = document.getElementById("fontsize");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const turbo = document.getElementById("turbo");
    // console.log(ANIMATIONS)
    animationTypeGenerator(animationSelect, animationScreen)
    fontSelector(sizeSelect, animationScreen)
    startAnimation(start, animationScreen, stop, animationSelect)
    selectStopAnimation(animationSelect, stop, start, animationScreen)
    turboSelector(turbo, animationScreen)

}
function startAnimation(start, animationScreen, stop, animationSelect) {

    start.onclick = function () {
        if (selectedAnimation === "") return;
        stop.disabled = false;
        start.disabled = true;
        animationSelect.disabled = true;

        frames = selectedAnimation.split("=====\n")

        intervalID = setInterval(function () {
            if (index == frames.length) index = 0
            animationScreen.value = frames[index]
            index++
        }, 250);


    }

}

function animationTypeGenerator(anim, animationScreen) {

    anim.onchange = function (event) {
        selectedAnimation = ANIMATIONS[event.target.value]
        animationScreen.value = selectedAnimation;
        // console.log(ANIMATIONS[selectedValue])

    }

}


function fontSelector(size, animationScreen) {

    size.onchange = function (event) {
        const font = event.target.value
        animationScreen.style.fontSize = font
        console.log(font)

    }

}
function selectStopAnimation(animationSelect, stop, start, animationScreen) {
    stop.onclick = function () {
        clearInterval(intervalID)
        index = 0
        start.disabled = false
        animationSelect.disabled = false;
        animationScreen.value = selectedAnimation

    }
}
function turboSelector(turbo, animationScreen) {

    turbo.onchange = function (event) {
        const status = event.target.checked
        clearInterval(intervalID)
        if (status) {
            intervalID = setInterval(function () {
                if (index == frames.length) index = 0
                animationScreen.value = frames[index]
                index++
            }, 50);
        }
        else {
            intervalID = setInterval(function () {
                if (index == frames.length) index = 0
                animationScreen.value = frames[index]
                index++
            }, 250);
        }

    }
}