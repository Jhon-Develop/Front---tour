// Start francisco
const $menuButton = document.querySelector(".menu-toggle");
const $menu = document.getElementById("nav-menu");
console.log({ $menu });
const ARIA_EXPANDED = "aria-expanded";

$menuButton.addEventListener("click", () => {
  const isMenuOpened = $menuButton.getAttribute(ARIA_EXPANDED) === "true"; // -> 'true' 'false'
  isMenuOpened ? closeMenu($menu) : openMenu($menu);
});

function openMenu() {
  $menuButton.setAttribute(ARIA_EXPANDED, "true");
}

function closeMenu() {
  $menuButton.setAttribute(ARIA_EXPANDED, "false");
}
// Finish francisco
// Start alejandro

// Finish alejandro
// Start juan_pablo

// Finish juan_pablo
// Start samuel

// Finish samuel
