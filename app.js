// global variable
let wainwrights;

//grabs
const container = document.querySelector("#wainwrightsContainer");
const list = document.querySelector("#wainwrights-list");

//get data for all wainrights
const getAllWainrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data = await response.json();
    return wainwrights = data;//assign data to global variable
}

//create elements for property of every wainright
const wainrightName = document.createElement("h2")
const wainrightHeight = document.createElement("h2")
const wainrightArea = document.createElement("h2")
const wainrightAbout = document.createElement("h2")

// adds it to unordered list
list.appendChild(wainrightName);
list.appendChild(wainrightHeight);
list.appendChild(wainrightArea);
list.appendChild(wainrightAbout);



//call function
getAllWainrights();
