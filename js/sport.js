class Activity {

    constructor(name, result, units) {
        this.name = name;
        this.result = result;
        this.units = units;
    }

    static from(json) {
        return Object.assign(new Activity(), json);
    }
}

function toString(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
}

function toTableRow(activity) {
    return `<tr class="trainings__tr">\n` + 
                `<td class="trainings__td">${toString(new Date())}</td>\n` +
                `<td class="trainings__td">${activity.name}</td>\n` +
                `<td class="trainings__td">${activity.result}</td>\n` +
                `<td class="trainings__td">${activity.units}</td>\n` +
            `</tr>\n`;
}

function addActivity(tableId, activity) {
    let tbody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    tbody.innerHTML += toTableRow(activity);
}

function clearForm() {
    document.getElementById("activity-input").value = '';
    document.getElementById("result-input").value = '';
    document.getElementById("units-input").value = '';
}

const localStorageActivityId = "last-sport-activity";

function onSportFormSubmit(formId, tableId) {
    let form = document.getElementById(formId)
    let formData = new FormData(form);

    let activity = Object.fromEntries(formData.entries());

    addActivity(tableId, activity);

    localStorage.setItem(localStorageActivityId, JSON.stringify(activity));
    clearForm();
}

function loadSportForm() {
    let main = document.getElementsByTagName("main")[0];
    let activityJson = localStorage.getItem(localStorageActivityId);
    let activity = new Activity("", 0, "");
    if (activityJson != null) {
        activity = JSON.parse(activityJson);
    }

    let formHtml = `<form id="sportForm" 
    action='#' 
    class="trainings__form glass smooth-app-2" 
    onsubmit="onSportFormSubmit('sportForm', 'sportsTable'); return false;">
  <div>
      <label for="activity-input">Активность</label>
      <input value="${activity.name}" name="name" id="activity-input" type="text" placeholder="Активность" required="true"/>
  </div>
  <div>
      <label for="result-input">Результат</label>
      <input value="${activity.result}" name="result" id="result-input" type="number" placeholder="Результат" required="true"/>
  </div>
  <div>
      <label for="result-input">Единицы измерения</label>
      <input value="${activity.units}" name="units" id="units-input" type="text" placeholder="Единицы измерения" required="true"/>
  </div>
  <button type="submit">Сохранить</button>
</form>`

    main.innerHTML = formHtml + main.innerHTML;
}