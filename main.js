// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close Menu When Clicking Links

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// Navbar Shadow on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});