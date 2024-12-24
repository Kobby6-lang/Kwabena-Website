const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = () => 
    {
        menu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    }
    document.addEventListener("DOMContentLoaded", function() {
        var nav = document.getElementById("nav");
    
        window.addEventListener("scroll", function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
            if (scrollTop === 0) {
                // At the top of the page - show the navbar
                nav.style.top = "0";
            } else {
                // Not at the top - hide the navbar
                nav.style.top = "-900px"; // Adjust the value based on your navbar height
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.getElementById('nav-links');
        const menu = document.getElementById('menu');
    
        function toggleMenu() {
            navLinks.classList.toggle('active');
        }
    
        function resizeHandler() {
            if (window.innerWidth <= 768) {
                navLinks.classList.add('mobile');
            } else {
                navLinks.classList.remove('mobile');
            }
        }
    
        // Initial check
        resizeHandler();
    
        // Add event listener
        window.addEventListener('resize', resizeHandler);
        menu.addEventListener('click', toggleMenu);
    });
    
    
    
    
        

    