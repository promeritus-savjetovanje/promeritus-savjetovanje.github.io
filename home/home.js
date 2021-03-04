var slideIndex = 0;

$(document).ready(homePageLoaded);

function homePageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadHomeStrings);

    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    slideIndex = (slideIndex + 1) % slides.length;

    setTimeout(showSlides, 6000);
}

function loadHomeStrings() {
    document.title = strings.home_page_title;

    let language = getCurrentLanguage().toUpperCase();
    let otherLanguage = (language == "HR" ? "EN" : "HR").toUpperCase();
        
    document.getElementById("first-selected-language").innerText += language;
    document.getElementById("first-unselected-language").innerText += otherLanguage;
    document.getElementById("second-selected-language").innerText += language;
    document.getElementById("second-unselected-language").innerText += otherLanguage;
    document.getElementById("third-selected-language").innerText += language;
    document.getElementById("third-unselected-language").innerText += otherLanguage;
}