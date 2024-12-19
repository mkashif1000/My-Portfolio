let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let projectSection = document.querySelector(".projectSection");
let contactSection = document.querySelector(".contactSection");
let home = document.querySelectorAll("#home");
let projects = document.querySelectorAll("#projects");
let contact = document.querySelectorAll("#contact");
let navbar = document.querySelector(".navbar");
let movetotop = document.getElementById("movetotop");
let heroSection = document.querySelector(".heroSection");
let toggleButton = document.querySelector(".toggleButton");
let body = document.querySelector("body");


button1.addEventListener("click" , () => {
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})

button2.addEventListener("click" , () => {
    contactSection.scrollIntoView({ behavior: 'smooth' , block: 'start'});
})

movetotop.addEventListener("click" , () => {
    heroSection.scrollIntoView({ behavior: 'smooth' , block: 'start'});
})

home.forEach(element => {
    element.addEventListener("click" , () => {
        heroSection.scrollIntoView({ behavior: 'smooth' , block: 'start'});
    })
});

contact.forEach(element => {
    element.addEventListener("click" , () => {
        contactSection.scrollIntoView({ behavior: 'smooth' , block: 'start'});
    })
});

projects.forEach(element => {
    element.addEventListener("click" , () => {
        projectSection.scrollIntoView({ behavior: 'smooth' , block: 'start'});
    })
});

// Dark Mode Implementation


