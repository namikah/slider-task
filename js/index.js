let images = document.querySelectorAll(".images-cards a");
let popup = document.querySelector(".popup");
let bigImage = document.querySelector(".popup .inner .slider-image img");
let close = document.querySelector(".popup .inner .close");
let rightArrow = document.querySelector(".arrows .right-arrow i");
let leftArrow = document.querySelector(".arrows .left-arrow i")

//image click for biggest
images.forEach(element => {
    element.addEventListener("click", function (e) {
        resetClassList();
        e.preventDefault();
        openPopup(this);
        this.classList.add("show-image");
    })
});

//right-arrow click for change image
rightArrow.addEventListener("click", (e) => {
    curElement = document.querySelector(".show-image");
    changeNext(curElement);
})
//left-arrow click for change image
leftArrow.addEventListener("click", (e) => {
    curElement = document.querySelector(".show-image");
    changePrev(curElement);
})

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

//open popup function
function openPopup(item) {
    let imgSrc = item.getAttribute("href");
    bigImage.setAttribute("src", imgSrc);
    popup.style.display = "flex";
}

//change images next function
function changeNext(currentElement) {
    resetClassList();
    if (currentElement.nextElementSibling !== null) {
        currentElement.nextElementSibling.classList.add("show-image");
        nextImageSrc = currentElement.nextElementSibling;
        openPopup(nextImageSrc);
    }
    else {
        currentElement.parentElement.children[0].classList.add("show-image");
        openPopup(currentElement.parentElement.children[0]);
    }
    // currentElement.classList.remove("show-image");
}

//change images prev function
function changePrev(currentElement) {
    resetClassList();
    let length = currentElement.parentElement.children.length;

    if (currentElement.previousElementSibling !== null) {
        currentElement.previousElementSibling.classList.add("show-image");
        nextImageSrc = currentElement.previousElementSibling;
        openPopup(nextImageSrc);
    }
    else {
        currentElement.parentElement.children[length - 1].classList.add("show-image");
        openPopup(currentElement.parentElement.children[length - 1]);
    }
    // currentElement.classList.remove("show-image");
}

function resetClassList() {
    images.forEach(item => {
        item.classList.remove("show-image")
    });
}
