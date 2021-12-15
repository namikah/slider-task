let images = document.querySelectorAll(".images-cards a");
let popup = document.querySelector(".popup");
let bigImage = document.querySelector(".popup .inner .slider-image img");
let close = document.querySelector(".popup .inner .close");
let rightArrow = document.querySelector(".arrows .right-arrow i");
let leftArrow = document.querySelector(".arrows .left-arrow i")
//image click for biggest
images.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let imgSrc = e.target.getAttribute("src");
        images.forEach(item => {
            item.classList.remove("show-image")
        });
        openPopup(imgSrc);
        element.classList.add("show-image");

        //right-arrow click for change image
        rightArrow.addEventListener("click", (e) => {
            let curElement = document.querySelector(".show-image");
            changeNext(curElement);
        })
         //left-arrow click for change image
         leftArrow.addEventListener("click", (e) => {
            let curElement = document.querySelector(".show-image");
            changePrev(curElement);
        })
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

//open popup function
function openPopup(item) {
    bigImage.setAttribute("src", item);
    popup.style.display = "flex";
}

//change images next function
function changeNext(currentElement){
    if (currentElement.nextElementSibling !== null) {
        currentElement.nextElementSibling.classList.add("show-image");
        nextImageSrc = currentElement.nextElementSibling.getAttribute("href");
        openPopup(nextImageSrc);
    }
    else {
        currentElement.parentElement.children[0].classList.add("show-image");
        openPopup(currentElement.parentElement.children[0].getAttribute("href"));
    }
    currentElement.classList.remove("show-image");
}

//change images prev function
function changePrev(currentElement){
    let length = currentElement.parentElement.children.length;
    
    if (currentElement.previousElementSibling !== null) {
        currentElement.previousElementSibling.classList.add("show-image");
        nextImageSrc = currentElement.previousElementSibling.getAttribute("href");
        openPopup(nextImageSrc);
    }
    else {
        currentElement.parentElement.children[length-1].classList.add("show-image");
        openPopup(currentElement.parentElement.children[length-1].getAttribute("href"));
    }
    currentElement.classList.remove("show-image");
}
