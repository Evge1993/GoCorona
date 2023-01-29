"use strict";

const mobileMenuBtn = document.querySelector(".header__burger"),
      mobileMenuClose = document.querySelector(".header__close"),
      mobileLogoClose = document.querySelector(".logo"),
      headerFlexWrapper = document.querySelector(".header__flex-wrapper"),
      headerDownload = document.querySelector(".header__download"),
      nav = document.querySelector(".nav"),
      navList = document.querySelector(".nav__list"),
      navItem = document.querySelectorAll(".nav__item"),
      navLink = document.querySelectorAll(".nav__link"),
      body = document.body,
      header = document.querySelector("header"),
      titleHoverBlue = document.querySelector("#blue"),
      btnHover = document.querySelector("#hover"),
      allLinks = document.querySelectorAll("a");

mobileMenuBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleMobileMenu();
});

mobileMenuClose.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleMobileMenu();
});

function toggleMobileMenu() {
    headerFlexWrapper.classList.toggle("active");
    headerDownload.classList.toggle("active");
    nav.classList.toggle("active");
    navList.classList.toggle("active");

    navItem.forEach((element) => {
        element.classList.toggle("active");
    });
    navLink.forEach((element) => {
        element.classList.toggle("active");
    });

    mobileMenuBtn.classList.toggle("active");
    mobileMenuClose.classList.toggle("active");
    mobileLogoClose.classList.toggle("active");
    body.classList.toggle("hidden");
    header.classList.toggle("background");
};

function hoverOnBtn() {
    btnHover.addEventListener("mouseover", function() {
        titleHoverBlue.style.color = "#4285F4";
        titleHoverBlue.style.transition = "all 0.4s ease 0s";
    });
    btnHover.addEventListener("mouseout", function() {
        titleHoverBlue.style.color = "#EC5863";
        titleHoverBlue.style.transition = "all 0s ease 0s";
    });
};

function links() {
    allLinks.forEach((element) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
        });
    });
}

hoverOnBtn();
links();