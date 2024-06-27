let buttons = document.querySelectorAll('.activities-menu div');
let tabContents = document.querySelectorAll(".pagin-content .images-wrap");
console.log(buttons, tabContents)
let contents = document.querySelectorAll(".pagin-content .images");
console.log(buttons, tabContents)

buttons.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        buttons.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        buttons[index].classList.add("active");
    })
});  

buttons.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        buttons.forEach((tab) => {
            tab.classList.remove("active");
        });
        contents[index].classList.add("active");
        buttons[index].classList.add("active");
    })
});  