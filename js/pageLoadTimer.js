(function(){
    const loadStartTimeMillis = new Date().getTime();

    function printLoadTimeToElement(loadStartTime) {
        var loadTimeMillis = new Date().getTime() - loadStartTime;
        var element = document.getElementById('load-time-stats');
        element.innerHTML += 'This page was loaded in ' + loadTimeMillis / 1000.0 + ' seconds!';
    }
    document.addEventListener("layoutLoaded", () => printLoadTimeToElement(loadStartTimeMillis));
})();