let imageGallery = document.querySelector("#image-gallery");
let imagesCards = document.querySelector(".images-cards");
let images = document.querySelectorAll(".images-cards a");
let popup = document.querySelector(".popup");
let bigImage = document.querySelector(".popup .inner .slider-image img");
let close = document.querySelector(".popup .inner .close");
let rightArrow = document.querySelector(".arrows .right-arrow i");
let leftArrow = document.querySelector(".arrows .left-arrow i")
let formLogin = document.querySelector("#form-sign-in");
let loginBtn = document.querySelector(".login-btn");
let username = document.querySelector(".user-name");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let welcomeText = document.createElement("h1");
    welcomeText.classList.add("user-style");

    if (username.value.length < 3) {
        window.alert("incorrect. Username at least 3 characters");
        username.value = "";
        return;
    }
    let counter = 0;
    Array.from(username.value).forEach(element => {
        if (!isValid(element)) {
            counter++;
        }
    });
    if (counter == 0) {
        welcomeText.innerText = "WELCOME, " + username.value.toUpperCase();
        imageGallery.insertBefore(welcomeText, imageGallery.firstChild);
        imageGallery.style.display = "block";
        formLogin.style.display = "none";
    } else {
        window.alert("incorrect. please valid username: not use ' ' ! @ # $ % & * () ? \\ / +");
        username.value = "";
        return;
    }

})
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

//keys action for popup
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") {
        curElement = document.querySelector(".show-image");
        changeNext(curElement);
    }
    if (e.code === "ArrowLeft") {
        curElement = document.querySelector(".show-image");
        changePrev(curElement);
    }
    if (e.code === "Escape") {
        closePopup();
    }
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

function isValid(char) {
    if (char !== "*" &&
        char !== "/" &&
        char !== "/" &&
        char !== "\\" &&
        char !== "," &&
        char !== "+" &&
        char !== "@" &&
        char !== "!" &&
        char !== "#" &&
        char !== "$" &&
        char !== "%" &&
        char !== "&" &&
        char !== "?" &&
        char !== "(" &&
        char !== " " &&
        char !== ")")
        return true;

    return false;
}