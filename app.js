//grabs
const container = document.querySelector("#wainwrightsContainer");
const list = document.querySelector("#wainwrights-list"); //global variable

//get data for all wainrights
const getAllWainrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data = await response.json();
    // console.log(data);
    data.forEach((element) => createWainright(element))
    
    // createWainrights(wainwrights);
}

//function that creates new elements about each Wainright
const createWainright = (hill) => {
    const wainrightName = document.createElement("h2");
    const wainrightHeight = document.createElement("h3");
    const wainrightArea = document.createElement("p");
    const wainrightAbout = document.createElement("p");

//fills new elements with properties of the hill
    wainrightName.innerText = hill.name;
    wainrightHeight.innerText = hill.heightMetres;
    wainrightName.innerText = hill.area.areaName;
    wainrightAbout.innerText = hill.area.about;

// adds new list to unordered list with the new properties...
    list.appendChild(wainrightName);
    list.appendChild(wainrightHeight);
    list.appendChild(wainrightArea);
    list.appendChild(wainrightAbout);

}

//function that listens to form


//call function
getAllWainrights();
