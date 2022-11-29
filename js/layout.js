(function(parentTagId) {
    const header = 
        `<header class="header">
            <div class="header__menu-btn" onclick="changeMenuVisibility('menu')">
                <img class="header__menu-btn-image" src="./resources/images/vector/menu.svg"/>
            </div>
            <nav id="menu" class="menu menu_hidden">
                <a class="menu__item" href="./index.html">главная</a>
                <a class="menu__item" href="./goals.html">цели</a>
                <a class="menu__item" href="./sport.html">спорт</a>
            </nav>
        </header>`;

    function nodeFromHtml(html) {
        const placeholder = document.createElement('div');
        placeholder.innerHTML = html;
        return placeholder.firstElementChild;
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const parent = document.getElementsByTagName(parentTagId)[0];
        parent.insertBefore(nodeFromHtml(header), parent.firstChild);
        document.dispatchEvent(new Event("layoutLoaded"));
    });
})("body");