$(document).ready(visionAndMissionPageLoaded);

function visionAndMissionPageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadVisionAndMissionStrings);
}

function loadVisionAndMissionStrings() {
    document.title = strings.vision_and_mission_page_title;

    document.getElementById("vision-subtitle").innerText += strings.vision_subtitle;
    document.getElementById("vision-description").innerText += strings.vision_description;

    document.getElementById("mission-subtitle").innerText += strings.mission_subtitle;
    document.getElementById("mission-description").innerText += strings.mission_description;
}