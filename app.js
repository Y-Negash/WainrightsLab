// global variable
let wainwrights;

//get data for all wainrights
const getAllWainrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data = await response.json();
    return wainwrights = data;//assign data to global variable
}




//call function
getAllWainrights();
