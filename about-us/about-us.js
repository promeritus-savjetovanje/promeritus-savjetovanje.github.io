$(document).ready(aboutUsPageLoaded);

function aboutUsPageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadAboutUsStrings);
}

function loadAboutUsStrings() {
    document.title = strings.about_us_page_title;

    document.getElementById("about-us-title").innerText += strings.about_us_title;
    document.getElementById("about-us-content").innerText += strings.about_us_content;
}