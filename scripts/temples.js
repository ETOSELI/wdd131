document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });

    // Update last modified date
    const modified = document.lastModified;
    document.getElementById("modified").textContent = modified;
});
