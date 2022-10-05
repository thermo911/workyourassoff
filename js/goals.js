function expandItemOnClick(element) {
    if (element.classList.contains('goals__item-text')) {
        element.classList.remove('goals__item-text');
        element.classList.add('goals__item-text_expanded');
    } else if (element.classList.contains('goals__item-text_expanded')) {
        element.classList.remove('goals__item-text_expanded');
        element.classList.add('goals__item-text');
    }
}