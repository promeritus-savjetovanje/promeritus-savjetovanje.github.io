$(document).ready(servicesPageLoaded);

services = {
    "pharmacoeconomic-analysis": "pharmacoeconomic_analysis", 
    "medical-affairs": "medical_affairs", 
    "regulatory-affairs": "regulatory_affairs", 
    "second-medical-opinion": "second_medical_opinion"
}

function servicesPageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadServicesStrings);
}

function loadServicesStrings() {
    document.title = strings.services_page_title;

    document.getElementById("services-title").innerText += strings.services_title;
    getServicesList();
    getServices();
}

function getServicesList() {
    let html = "";
    for (let service in services) {
        html +=
        `
        <div id="${service}" class="service">
            <div class="service-content">
                <img src="src/images/${service}.png" height=80px>
                <p class="service-title">${strings[services[service]]}</p>
                <button type="button" onclick="scrollToService('${service}')">${strings["read_more"]}</button>
            </div>
        </div>
        `;
    }

    document.getElementById("services-list").innerHTML += html;
}

function getServices() {
    let html = "";
    let i = 0;

    for (let service in services) {
        let imageHTML = 
        `
        <div class="centered-image">
            <img src="src/images/${service}-details.png">
        </div>
        `;

        let titleHTML =
        `
        <div class="centered-content-container">
            <div class="centered-content">${strings[services[service]].toUpperCase()}</div>
        </div>
        `;

        html +=
        `
        <div id="${service}-anchor" class="split-in-two-container">
            ${i % 2 == 0 ? imageHTML + titleHTML : titleHTML + imageHTML}
        </div>
        <p class="services-description">${strings[services[service] + "_description"]}</p>
        `;

        i += 1;

        html += "<div class='service-table'>";
        let j = 1;
        let list = strings[services[service] + "_list"];
        for (let index in list) {
            html += 
            `
            <p class="order-number">${j >= 10 ? j  : "0" + j}</p>
            <div class="vertical-separator"></div>
            <p class="service-table-element-content">${list[index]}</p>
            `;

            j += 1;
        }
        html += "</div>";

        html += `
        <div class='service-footer'>
            <div class='service-footer-content'>
                <button class="link-to-contact" onclick="redirectTo('contact');" type="button">${strings.link_to_contact}</button>
                <br><br>
                ${strings[services[service] + "_attribution"]}
            </div>
        </div>
        `;
    }

    document.getElementById("services").innerHTML += html;
}

function scrollToService(service) {
    document.getElementById(`${service}-anchor`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}