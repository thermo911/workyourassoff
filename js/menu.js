const MENU_HIDDEN_CLASS = "menu_hidden";

function isMenuHidden(menu) {
    return menu.classList.contains(MENU_HIDDEN_CLASS);
}

function hideMenu(menu) {
    if (isMenuHidden(menu)) {
        return;
    } 
    menu.classList.add(MENU_HIDDEN_CLASS);
}

function changeMenuVisibility(menuId) {
    var menu = document.getElementById(menuId);
    menu.classList.toggle(MENU_HIDDEN_CLASS);
}

function hideMenuOnResize(menuId) {
    const match = window.matchMedia("(min-width: 35em)");
    if (match.matches) {
        return;
    }
    var menu = document.getElementById(menuId);
    hideMenu(menu);
}