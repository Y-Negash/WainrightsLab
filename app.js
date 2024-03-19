// global variable
let wainwrights;

//grabs
const container = document.querySelector("#wainwrightsContainer");
const mainList = document.querySelector("#wainwrights-list");

//get data for all wainrights
const getAllWainrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data = await response.json();
    wainwrights = data;//assign data to global variable
    mapWainrights(wainwrights);
}

//loop through wainright and add to list
// wainwrights.forEach((element) => newWainright(element))
const mapWainrights = (allWainrights) => {
    for(let hill of allWainrights){
        createWainright(hill);
    }
}

//function that creates new elements about each Wainright
const createWainright = (hill) => {
    const list = document.createElement("li");
    const wainrightName = document.createElement("h2");
    const wainrightHeight = document.createElement("h3");
    const wainrightArea = document.createElement("p");
    const wainrightAbout = document.createElement("p");

//fills new elements with properties of the hill
    wainrightName.innerText = hill.name;
    wainrightHeight.innerText = hill.heightMetres;
    wainrightName.innerText = hill.area.areaName;
    wainrightAbout.innerText = hill.area.about;

// adds it to unordered list
    list.appendChild(wainrightName);
    list.appendChild(wainrightHeight);
    list.appendChild(wainrightArea);
    list.appendChild(wainrightAbout);

    mainList.appendChild(list);
}

//call function
getAllWainrights();
