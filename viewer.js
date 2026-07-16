"use strict";

/* ===================================================== */
/* DOM */
/* ===================================================== */

const viewer = document.getElementById("viewer");

const viewerImage = document.querySelector(".viewer-image");

const viewerBackdrop = document.querySelector(".viewer-backdrop");

const viewerClose = document.querySelector(".viewer-close");

const viewerPrev = document.querySelector(".viewer-prev");

const viewerNext = document.querySelector(".viewer-next");

const viewerCurrent = document.getElementById("viewerCurrent");

const viewerTotal = document.getElementById("viewerTotal");

const thumbnails = document.querySelectorAll(".gallery-image");

/* ===================================================== */
/* STATE */
/* ===================================================== */

let currentIndex = 0;

/* ===================================================== */

viewerTotal.textContent = thumbnails.length;

/* ===================================================== */

function updateViewer(){

    viewerImage.src = thumbnails[currentIndex].src;

    viewerImage.alt = thumbnails[currentIndex].alt;

    viewerCurrent.textContent = currentIndex + 1;

}

/* ===================================================== */

function openViewer(index){

    currentIndex = index;

    updateViewer();

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";

}

/* ===================================================== */

function closeViewer(){

    viewer.classList.remove("active");

    document.body.style.overflow = "";

}

/* ===================================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex >= thumbnails.length){

        currentIndex = 0;

    }

    updateViewer();

}

/* ===================================================== */

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = thumbnails.length - 1;

    }

    updateViewer();

}

/* ===================================================== */

thumbnails.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openViewer(index);

    });

});

viewerNext.addEventListener("click",nextImage);

viewerPrev.addEventListener("click",previousImage);

viewerClose.addEventListener("click",closeViewer);

viewerBackdrop.addEventListener("click",closeViewer);

/* ===================================================== */

document.addEventListener("keydown",(event)=>{

    if(!viewer.classList.contains("active")) return;

    switch(event.key){

        case "Escape":

            closeViewer();

            break;

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

    }

});
