function changeMenuVisibility(menuId) {
    var element = document.getElementById(menuId);

    if (!element.classList.contains('menu')) {
        return;
    }

    if (element.classList.contains('menu_hidden')) {
        element.classList.remove('menu_hidden');
    } else {
        element.classList.add('menu_hidden');
    }
}