/*
MAKE THE HAMBURGER MENU CLOSE AND OPEN ON CLICK
*/

//create variables
const hamburgerMenu = document.querySelector(".hamburger-menu");

//create function to open
document.querySelector(".fa-bars").addEventListener ('click',

    function(){
        hamburgerMenu.className += " active";        
    }
);

//create function to close
document.querySelector(".close").addEventListener ('click',

    function(){
        hamburgerMenu.className = "hamburger-menu";       
    }
);