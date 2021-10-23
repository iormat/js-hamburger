/*
MAKE THE HAMBURGER MENU CLOSE AND OPEN ON CLICK
TRYING TO USE CLASSLIST, ADD, REMOVE
*/

//create variables
const hamburgerMenu = document.querySelector(".hamburger-menu");

// //create function to open
// document.querySelector(".fa-bars").addEventListener ('click',

//     function(){
//         hamburgerMenu.classList.add("active");        
//     }
// );

// //create function to close
// document.querySelector(".close").addEventListener ('click',

//     function(){
//         hamburgerMenu.classList.remove("active");       
//     }
// );

// TRYING TOGGLE 
//create function to open
document.querySelector(".fa-bars").addEventListener ( 'click',

    function(){
        hamburgerMenu.classList.toggle("active");        
    },
);

//create function to close
document.querySelector(".fa-times").addEventListener ('click',

    function(){
        hamburgerMenu.classList.toggle("active");       
    }
);

//automaticly remove active based on width
window.addEventListener('resize',

    function(){
        if ($(window).width() > 1000)
        hamburgerMenu.classList.remove('active'); 
    }
)