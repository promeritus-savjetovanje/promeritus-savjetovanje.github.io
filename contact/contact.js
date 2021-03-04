$(document).ready(contactPageLoaded);

function contactPageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadContactStrings);
}

function loadContactStrings() {
    document.title = strings.contact_page_title;

    document.getElementById("contact-title").innerText += strings.contact_title;
    document.getElementById("contact-us-form-title").innerText += strings.contact_us_form_title;

    document.getElementById("contact-us-form-first-name").placeholder = strings.contact_us_form_first_name;
    document.getElementById("contact-us-form-last-name").placeholder = strings.contact_us_form_last_name;
    document.getElementById("contact-us-form-email").placeholder = strings.contact_us_form_email;
    document.getElementById("contact-us-form-message").placeholder = strings.contact_us_form_message;
    document.getElementById("contact-us-form-send").value = strings.contact_us_form_send;
}

window.onload = function() {
    document.getElementById('contact-us-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_0704oxm', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}