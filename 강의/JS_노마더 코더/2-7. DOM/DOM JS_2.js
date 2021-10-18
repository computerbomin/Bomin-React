const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) { //!는 부정, 즉 hasClass 가 아닐 때
            title.classList = CLICKED_CLASS;
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
   if (hasClass) {
       title.classList.remove(CLICKED_CLASS);
   } else {
       title.classList.add(CLICKED_CLASS);
   }
}*/

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}
// 위 과정을 한 줄로 요약하는 함수


function init() {
    title.addEventListener("click", handleClick);
}
init();