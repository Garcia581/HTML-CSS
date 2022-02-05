class MobileNavbar{
    constructor(mobileMenu, navList, navLins){
        this.MobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLins);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addClickEvent("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();
