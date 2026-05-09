let menuOpenButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () =>  {
        document.body.classList.toggle("show-mobile-menu");
});

let menuCloseButton = document.querySelector("#menu-close-button");

menuCloseButton.addEventListener("click", () =>  {
        menuOpenButton.click();
});