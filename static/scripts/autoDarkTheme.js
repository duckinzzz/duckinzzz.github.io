const currentHour = new Date().getHours();

if (currentHour >= 20 || currentHour < 6) {
    document.addEventListener("DOMContentLoaded", function () {
        document.documentElement.style.setProperty('--bg-color', '#444444');
        document.documentElement.style.setProperty('--text-color', '#DEDEDEFF');
    });
}