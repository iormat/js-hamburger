/*
MAKE THE HAMBURGER MENU CLOSE AND OPEN ON CLICK
TRYING TO USE CLASSLIST, ADD, REMOVE
*/

//create variables
const hamburgerMenu = document.querySelector(".hamburger-menu");

//create function to open
document.querySelector(".fa-bars").addEventListener ('click',

    function(){
        hamburgerMenu.classList.add("active");        
    }
);

//create function to close
document.querySelector(".close").addEventListener ('click',

    function(){
        hamburgerMenu.classList.remove("active");       
    }
);