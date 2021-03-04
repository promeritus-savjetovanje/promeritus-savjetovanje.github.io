$(document).ready(pageLoaded);

pages = ["home", "about-us", "vision-and-mission", "services", "contact"]

function pageLoaded() {
    if (document.getElementById("header") != null) {
        showHeader();
    }

    let script = document.createElement("script");
    script.id = "strings"
    script.src = `src/strings/strings.${getCurrentLanguage()}.js`;

    if (document.getElementById("header") != null) {
        script.addEventListener("load", loadStrings);
    }

    document.head.appendChild(script);
}

function getCurrentLanguage() {
    if (window.location.href.indexOf('?') == -1) {
        return "hr";
    } else {
        return "en";
    }
}

function loadStrings() {
    document.getElementById("home-menu-item").innerText += strings.home;
    document.getElementById("about-us-menu-item").innerText += strings.about_us;
    document.getElementById("vision-and-mission-menu-item").innerText += strings.vision_and_mission;
    document.getElementById("services-menu-item").innerText += strings.services;
    document.getElementById("contact-menu-item").innerText += strings.contact;

    let language = getCurrentLanguage();
    document.getElementById("selected-language").innerText += language.toUpperCase();
    document.getElementById("unselected-language").innerText += (language == "hr" ? "en" : "hr").toUpperCase();
}

function showHeader() {
    document.getElementById('header').innerHTML +=
    `
    <div class="header-content">

            <div class="logo-container">
                <img width="180px" src="src/images/logo.png" alt="logo">
            </div>

            ${getPageMenu()}

            <div class="language-menu">
                <button id="selected-language" class="language-menu-button" type="button"></button>
                <div class="language-menu-content">
                  <a id="unselected-language" href="javascript:changeLanguage();"></a>
                </div>
            </div>
        
    </div>
    `
}

function getPageMenu() {
    let currentPageURL = window.location.href;
    let startIndex = currentPageURL.lastIndexOf("/") + 1;
    let potentialEndIndex = currentPageURL.indexOf("?");
    let endIndex = potentialEndIndex == -1 ? -1 : potentialEndIndex;
    let currentPage = endIndex == -1 ? 
        currentPageURL.substring(startIndex) : 
        currentPageURL.substring(startIndex, endIndex);

    let html = "<div class='page-menu'>"
    for (let i in pages) {
        let page = pages[i];

        html += 
        `
        <button 
            id='${page}-menu-item' 
            class=${currentPage == page ? 'selected-menu-item' : 'unselected-menu-item'}
            onclick='redirectTo("${page}");'
            type='button'>
        </button>
        `
    }
    html += "</div>"

    return html;
}

function changeLanguage() {
    let url = window.location.href;
    if (getCurrentLanguage() == "hr") {
        url += "?lang=en";
    } else {
        url = url.substring(0, url.indexOf('?'));
    }

    window.location.href = url;
}

function redirectTo(page) {
    let baseURL = `${page}`;
    window.location.href = getCurrentLanguage() == "en" ? baseURL + "?lang=en" : baseURL;
}