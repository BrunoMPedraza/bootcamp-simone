
var dropzone = document.getElementById("dropzone");

const toSave = () => {
    localStorage.setItem("value", (document.getElementById("fsave").value));
    indexedDB.open((document.getElementById("fsave").value), 1);
    document.getElementById("fsave").value = "";
}

const toClear = async () => {
    localStorage.clear();
    const entireDB = await window.indexedDB.databases();
    entireDB.forEach(db => { window.indexedDB.deleteDatabase(db.name) })
    document.getElementById("fsave").value = "";
}

document.querySelectorAll(".dropzone--input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".dropzone");
})

const input = document.querySelector('input[type="file"]');

/*Visual file uploading*/
let file;
var dropzone = document.getElementById("dropzone");

dropzone.ondrop = function (e) {
    e.preventDefault()
    const reader =new FileReader()
    reader.onload=function(readEvent){
        console.log("Dropped",reader.result)
    }
    reader.readAsText(e.dataTransfer.files[0])
    }

    dropzone.ondragover = function () {
        this.className = 'dropzone--over';
        return false;
    }

    dropzone.ondragleave = function () {
        this.className = 'dropzone';
    }