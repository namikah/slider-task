let images = document.querySelectorAll(".images-cards a");
let popup = document.querySelector(".popup");
let bigImage = document.querySelector(".popup .inner .slider-image img")
let close = document.querySelector(".popup .inner .close")


//image click
images.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let imgSrc = e.target.getAttribute("src");
        bigImage.setAttribute("src", imgSrc);
        popup.style.display = "flex";
    })
});

//close popup with X
close.addEventListener("click", () => {
    closePopup();
})

//Close popup with side click
popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        closePopup();
    }
})

//Close popup with Escape
document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.code === "Escape") {
        closePopup();
    }
})

//close popup function
function closePopup() {
    popup.style.display = "none";
}