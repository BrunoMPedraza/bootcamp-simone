const toSave = () =>{
    localStorage.setItem("value",(document.getElementById("fsave").value));
    indexedDB.open((document.getElementById("fsave").value),1);
}

const toClear = async() =>{
    console.log("local storage clear!");
    localStorage.clear();
    const entireDB = await window.indexedDB.databases();
    entireDB.forEach(db => { window.indexedDB.deleteDatabase(db.name)})
}



// function createDB(item){
//     const request = indexedDB.open(item,1);
//     request.upgradeneeded = () => {
//         alert("Upgrade needed")
//     }
//     request.onsuccess = () =>{
//         console.log("Successful creation: "+item)
//     }
//     request.onerror = () =>{
//         alert("Error on indexedDB")
//     }
// } Unnecesary lines, to delete!
