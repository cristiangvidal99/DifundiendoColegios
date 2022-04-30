// menu hamburguesa
const menu = document.getElementById("myTopnav");
menu.addEventListener('click', openMenu)
function openMenu() {
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}
