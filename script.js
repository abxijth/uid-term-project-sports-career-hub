let menuOpenButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () =>  {
        document.body.classList.toggle("show-mobile-menu");
});

let menuCloseButton = document.querySelector("#menu-close-button");

menuCloseButton.addEventListener("click", () =>  {
        menuOpenButton.click();
});

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    })
    
});