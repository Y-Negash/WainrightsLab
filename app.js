//grabs
const list = document.querySelector("#wainwrights-list"); 
const wainrightForm = document.querySelector("#wainright-form");
let totalWainrights;

function appendElements(filteredWainrights){filteredWainrights.forEach((hill) => {
    //function that creates new elements about each Wainright
    
    const wainrightName = document.createElement("h2");
        const wainrightHeight = document.createElement("h3");
        const wainrightArea = document.createElement("p");
        const wainrightAbout = document.createElement("p");
        
        //fills new elements with properties of the hill
        wainrightName.innerText = hill.name;
        wainrightHeight.innerText = hill.heightMetres;
        wainrightArea.innerText = hill.area.areaName;
        wainrightAbout.innerText = hill.area.about;
        
        // adds to unordered list with the new properties...
        list.appendChild(wainrightName);
        list.appendChild(wainrightHeight);
        list.appendChild(wainrightArea);
        list.appendChild(wainrightAbout);

    });

}

//get data for all wainrights
const getAllWainrights = async () => {
    
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    totalWainrights = await response.json();
    appendElements(totalWainrights);
    
// filter wainrights by inputed value in form 
    wainrightForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const wantedWainright = event.target["input"].value;
    if(wantedWainright !== ""){
        const filteredWainrights = totalWainrights.filter(hill => {
            return hill.name.toLowerCase().includes(wantedWainright.toLowerCase());
        })
        console.log(filteredWainrights);
        list.innerText = "";
        appendElements(filteredWainrights);
    }
    })
}
//call function
getAllWainrights();

