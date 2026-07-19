/* ===================================================== */
/* CREZCENT VIEWER */
/* OPEN & CLOSE */
/* ===================================================== */

// Images
const galleryImages = document.querySelectorAll(".screenshot-card img");

// Viewer
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

// Close Elements
const viewerBackdrop = document.querySelector(".viewer-backdrop");
const viewerClose = document.querySelector(".viewer-close");

/* ===================================================== */
/* OPEN VIEWER */
/* ===================================================== */

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        viewerImage.src = image.dataset.full;

        viewer.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

/* ===================================================== */
/* CLOSE VIEWER */
/* ===================================================== */

function closeViewer() {

    viewer.classList.remove("active");

    document.body.style.overflow = "";

}

viewerClose.addEventListener("click", closeViewer);

viewerBackdrop.addEventListener("click", closeViewer);

/* ===================================================== */
/* ESC KEY */
/* ===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeViewer();

    }

});
