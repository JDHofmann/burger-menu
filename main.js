// sets the default of our menu
let toggleNavStatus = false;

// function to open the sidebar nav
let toggleNav = function (){
// when you are grabbing something name it with "get"
// create a variable for each html element we want to adjust
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  // variable specifically for sidebar item that isn't a link
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  // there are many links for .nav-sidebar so we make sure to specify
  // using querySelectorAll will put all instances into an array
  // otherwise only the first link will be selected
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false){
    // make our Sidebar ul visible
    getSidebarUl.style.visibility = "visible";
    // increase Sidebar width
    getSidebar.style.width = "272px";
    // changes opacity of Sidebar Title
    getSidebarTitle.style.opacity = ".7";

// run a loop for array so each item gets the same treatment

    for ( let i = 0; i < getSidebarLinks.length; i++) {
      // each iteration of loop "i" (item i [i] )
      // change opacity
      getSidebarLinks[i].style.opacity = "1";
    }
// changes toggleNavStatus to true so we can click again for opposite result
    toggleNavStatus = true;

// opposite results to close menu
  } else if (toggleNavStatus === true){

// back to original width
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for ( let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

// reset status to false so we can start over
    toggleNavStatus = false;
  }

}
