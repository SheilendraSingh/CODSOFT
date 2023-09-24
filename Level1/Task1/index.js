let openSideBarButton = document.getElementById("navlistopn");
let closeSideBarButton = document.getElementById("navclosbtn");

openSideBarButton.addEventListener("click", () => {
  //function calling for opening side bar
  openNav();
});

closeSideBarButton.addEventListener("click", () => {
  //function calling for closing side bar
  closeNav();
});

// Created function for opening side bar

function openNav() {
  document.getElementById("mySideNav").style.width = "45vw";
}

// Created function for closing side bar

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}
