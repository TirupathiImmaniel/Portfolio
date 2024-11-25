let education = document.getElementById("education");
let skills = document.getElementById("skills");
let certifications = document.getElementById("certifications");

let educationHeading = document.getElementById("educationHeading");
let skillsHeading = document.getElementById("skillsHeading");
let certificationsHeading = document.getElementById("certificationsHeading");

let homeButton = document.getElementById('homeButton');
let aboutButton = document.getElementById('aboutButton');
let projectsButton = document.getElementById('projectsButton');
let contactButton = document.getElementById('contactButton');


function showEducation(){
    educationHeading.classList.add("navigate");
    skillsHeading.classList.remove("navigate");
    certificationsHeading.classList.remove("navigate");

    education.classList.remove("none");
    skills.classList.add("none");
    certifications.classList.add("none");
}

showEducation();

function showSkills(){
    educationHeading.classList.remove("navigate");
    skillsHeading.classList.add("navigate");
    certificationsHeading.classList.remove("navigate");

    education.classList.add("none");
    skills.classList.remove("none");
    certifications.classList.add("none");
}

function showCertifications(){
    educationHeading.classList.remove("navigate");
    skillsHeading.classList.remove("navigate");
    certificationsHeading.classList.add("navigate");

    education.classList.add("none");
    skills.classList.add("none");
    certifications.classList.remove("none");
}




const scriptURL = "https://script.google.com/macros/s/AKfycbwj0-Tr1c-AWwl3Lvtw-PwLEbEJFuwEYO9Ht1syO_PVNGhbXFpuduCsyuZYHes8WSVOuQ/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e =>{
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function showMobile(){
    let mobileView = document.getElementById("mobile-view");
    let menubar2 = document.getElementById("menubar2");
    menubar = document.getElementById("menubar");
    mobileView.classList.add("showview");
    menubar.classList.remove("fa-solid","fa-bars");
    menubar2.classList.add("fa-solid","fa-x");
    menubar2.style.color="red";
    menubar2.onclick= function(){
        mobileView.classList.remove("showview");
        menubar.classList.add("fa-solid","fa-bars");
        menubar2.classList.remove("fa-solid","fa-x");
    }
}
function submitMessage(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name.value === "" || email.value === "" || message.value === ""){
        alert("Give a Valid Input");
    }
    else{
        alert("Your message sent successfully!");
    }
    
}