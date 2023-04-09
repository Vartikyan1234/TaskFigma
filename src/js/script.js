window.addEventListener("DOMContentLoaded",() => {
    const mobileMenuBtn = document.querySelector("#burger-menu");
    const nav = document.querySelector(".menu-bar2");

    mobileMenuBtn.addEventListener("click", function(){
        if (nav.classList.toggle("active__nav")) {
            this.classList.add("close");
        }else{
            this.removeAttribute("class");
        }
    });
}); 