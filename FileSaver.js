function saveFile() {
    var data = {};

    data.name = document.getElementById("name").innerHTML;

    data.firstmiddlelast = document.getElementById("firstmiddlelast").innerHTML;

    var json = JSON.stringify(data);

    saveAs(new Blob([json], {type: "application/json"}))}