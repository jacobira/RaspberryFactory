toHome();

function toHome() {
    $(".contentCard").addClass("hidden");
    $("#homePage").toggleClass("hidden");
    console.log("Navigated to Home Page");
}

function toEducation() {
    $(".contentCard").addClass("hidden");
    $("#education").toggleClass("hidden");
    console.log("Navigated to Education Page");
}

function toSkills() {
    $(".contentCard").addClass("hidden");
    $("#skills").toggleClass("hidden");
    console.log("Navigated to Skills Page");
}

function toPortfolio() {
    $(".contentCard").addClass("hidden");
    $("#portfolio").toggleClass("hidden");
    console.log("Navigated to Portfolio Page");
}

function toAboutMe() {
    $(".contentCard").addClass("hidden");
    $("#aboutMe").toggleClass("hidden");
    console.log("Navigated to About Me Page");
}

function toContactInfo() {
    $(".contentCard").addClass("hidden");
    $("#contactInfo").toggleClass("hidden");
    console.log("Navigated to Contact Info Page");
}

function animateForward(element){
    $(element).addClass("animateForward");
}

function removeAnimateForward(element){
    $(element).removeClass("animateForward");
}
