var sequence = "";
var isChecking = true;

function keyPressHandler(event) {
    var keyCode = event.keyCode || event.which;
    var keyPressed = String.fromCharCode(keyCode);
    if (isChecking) {
        if (sequence === "" && keyPressed === "Q") {
            sequence = "Q";
        } else if (sequence === "Q" && keyPressed === "U") {
            sequence += keyPressed;
        } else if (sequence === "QU" && keyPressed === "A") {
            sequence += keyPressed;
        } else if (sequence === "QUA" && keyPressed === "C") {
            sequence += keyPressed;
        } else if (sequence === "QUAC" && keyPressed === "K") {
            doSomethingAfterQUACK();
            isChecking = false;
        } else {
            sequence = "";
        }
    }
}

function doSomethingAfterQUACK() {
    console.log("Действия после ввода 'QUACK'");
}

document.addEventListener("keydown", keyPressHandler);
