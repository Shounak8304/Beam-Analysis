var mobileMenuBtn = document.getElementById("mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
var navList = document.querySelector(".nav-list");

mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
        mobileMenuBtn.innerHTML = "Close";
        navList.style.display = "none";
    } else {
        mobileMenu.style.display = "none";
        mobileMenuBtn.innerHTML = "Menu";
        navList.style.display = "block";
    }
});

var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.name = "sunny";
        icon.classList.remove("moon");
        icon.classList.add("sun");
    } else {
        icon.name = "moon";
        icon.classList.remove("sun");
        icon.classList.add("moon");
    }
}
