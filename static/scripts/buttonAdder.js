function appearButton() {
    var button = document.getElementById("duckButton");
    button.style.display = "inline-block";
    requestAnimationFrame(function () {
        button.style.opacity = 1;
    });
}
