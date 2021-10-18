const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = 
        `${hours < 10 ? `0${hours}` : hours}:
        ${minutes < 10 ? `0${minutes}` : minutes}:
        ${seconds < 10 ? `0${seconds}` : seconds}
        `;}
        /*
        mini If문 hour가
        10보다 작으면 | hours < 10 ?
        0hours로 표기한다. | `0${hours}`
        아니면 hours로 표기한다. | : hours
        */

function init() {
    getTime();
    setInterval(getTime, 1000);
    // 1000ms마다 변경시킨다.
} 

init();