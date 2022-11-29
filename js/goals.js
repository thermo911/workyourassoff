function expandItemOnClick(element) {
    if (element.classList.contains('goals__item-text')) {
        element.classList.remove('goals__item-text');
        element.classList.add('goals__item-text_expanded');
    } else if (element.classList.contains('goals__item-text_expanded')) {
        element.classList.remove('goals__item-text_expanded');
        element.classList.add('goals__item-text');
    }
}

function showLoading(loadingId) {
    let classList = document.getElementById(loadingId).classList;
    if (classList.contains('goals__loading_hidden')) {
        classList.remove('goals__loading_hidden')
    }
}

function hideLoading(loadingId) {
    let classList = document.getElementById(loadingId).classList;
    if (!classList.contains('goals__loading_hidden')) {
        classList.add('goals__loading_hidden')
    }
}

function showLoadingFailure(loadingFailureId) {
    let classList = document.getElementById(loadingFailureId).classList;
    if (classList.contains('goals__loading-failure_hidden')) {
        classList.remove('goals__loading-failure_hidden')
    }
}

function hideLoadingFailure(loadingFailureId) {
    let classList = document.getElementById(loadingFailureId).classList;
    if (!classList.contains('goals__loading-failure_hidden')) {
        classList.add('goals__loading-failure_hidden')
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getGoalHtml(goal) {
    return `<div class="goals__item" onclick="expandItemOnClick(this)">
    <p class="goals__item-title">${goal.title}</p>
    <p class="goals__item-text" onclick="expandItemOnClick(this)">${goal.title.repeat(1 + getRandomInt(10))}</p>
</div>`;
}


function addGoalItems(items, goalsWrapperId) {
    let goalsWrapper = document.getElementById(goalsWrapperId);
    items.forEach(elem => goalsWrapper.innerHTML += getGoalHtml(elem));
}


function fetchItems() {
    showLoading('goals-loading');
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${getRandomInt(5)}&completed=false`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            addGoalItems(data, 'goals');
        })
        .catch(() => {
            vex.dialog.confirm({
                message: 'Есть проблемы. Перезагрузить страницу?',
                className: 'vex-theme-wireframe',
                callback: function (value) {
                    if (value) {
                        window.location.reload();
                    }
                }
            });
            showLoadingFailure('goals-loading-failure');
        })
        .finally(() => hideLoading('goals-loading'));
}