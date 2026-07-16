/* ===================================================== */
/* CREZCENT GALLERY */
/* FOUNDATION */
/* ===================================================== */

"use strict";

/* ===================================================== */
/* CONFIGURATION */
/* ===================================================== */

const IMAGE_SELECTOR = ".gallery-image";

/* ===================================================== */
/* DOM ELEMENTS */
/* ===================================================== */

const gallery = document.getElementById("gallery");

const backdrop = document.querySelector(".gallery-backdrop");

const track = document.querySelector(".gallery-track");

const previousButton = document.querySelector(".gallery-prev");

const nextButton = document.querySelector(".gallery-next");

const closeButton = document.querySelector(".gallery-close");

const currentCounter = document.getElementById("galleryCurrent");

const totalCounter = document.getElementById("galleryTotal");

const thumbnails = document.querySelectorAll(IMAGE_SELECTOR);

/* ===================================================== */
/* STATE */
/* ===================================================== */

let currentIndex = 0;

let isOpen = false;

let isAnimating = false;

/* ===================================================== */
/* INITIALIZATION */
/* ===================================================== */

function initializeGallery() {

    totalCounter.textContent = thumbnails.length;

    buildSlides();

    bindThumbnailEvents();

}

initializeGallery();

/* ===================================================== */
/* BUILD SLIDES */
/* ===================================================== */

function buildSlides() {

    track.innerHTML = "";

    thumbnails.forEach((thumbnail) => {

        const slide = document.createElement("div");

        slide.className = "gallery-slide";

        const image = document.createElement("img");

        image.src = thumbnail.src;

        image.alt = thumbnail.alt;

        slide.appendChild(image);

        track.appendChild(slide);

    });

}

/* ===================================================== */
/* OPEN */
/* ===================================================== */

function openGallery(index) {

    if (isOpen) return;

    currentIndex = index;

    updateTrack();

    updateCounter();

    gallery.classList.add("active");

    isOpen = true;

}

/* ===================================================== */
/* CLOSE */
/* ===================================================== */

function closeGallery() {

    gallery.classList.remove("active");

    isOpen = false;

}

/* ===================================================== */
/* UPDATE TRACK */
/* ===================================================== */

function updateTrack() {

    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

}

/* ===================================================== */
/* COUNTER */
/* ===================================================== */

function updateCounter() {

    currentCounter.textContent =
        currentIndex + 1;

}

/* ===================================================== */
/* NEXT */
/* ===================================================== */

function nextSlide() {

    if (isAnimating) return;

    isAnimating = true;

    currentIndex++;

    if (currentIndex >= thumbnails.length) {

        currentIndex = 0;

    }

    updateTrack();

    updateCounter();

    setTimeout(() => {

        isAnimating = false;

    }, 450);

}

/* ===================================================== */
/* PREVIOUS */
/* ===================================================== */

function previousSlide() {

    if (isAnimating) return;

    isAnimating = true;

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = thumbnails.length - 1;

    }

    updateTrack();

    updateCounter();

    setTimeout(() => {

        isAnimating = false;

    }, 450);

}

/* ===================================================== */
/* THUMBNAILS */
/* ===================================================== */

function bindThumbnailEvents() {

    thumbnails.forEach((thumbnail, index) => {

        thumbnail.addEventListener("click", () => {

            openGallery(index);

        });

    });

}

/* ===================================================== */
/* BUTTONS */
/* ===================================================== */

nextButton.addEventListener("click", nextSlide);

previousButton.addEventListener("click", previousSlide);

closeButton.addEventListener("click", closeGallery);

backdrop.addEventListener("click", closeGallery);

/* ===================================================== */
/* KEYBOARD */
/* ===================================================== */

document.addEventListener("keydown", (event) => {

    if (!isOpen) return;

    switch (event.key) {

        case "Escape":

            closeGallery();

            break;

        case "ArrowRight":

            nextSlide();

            break;

        case "ArrowLeft":

            previousSlide();

            break;

    }

});
