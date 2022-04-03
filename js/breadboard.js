const S_UPPER_POWER_SUPPLY = 1;
const E_UPPER_POWER_SUPPLY = 148;
const S_LOWER_POWER_SUPPLY = 149;
const E_LOWER_POWER_SUPPLY = 296;
const S_UPPER_HALF = 297;
const E_UPPER_HALF = 592;
const S_LOWER_HALF = 593;
const E_LOWER_HALF = 888;

window.onload = () => {

    for(let id = S_UPPER_POWER_SUPPLY; id <= E_UPPER_POWER_SUPPLY; id++)
        document.getElementById('upperPowerSupply').innerHTML += `<div id = "${id}" class = "holes" style = "background: black"></div>`;

    for(let id = S_LOWER_POWER_SUPPLY; id <= E_LOWER_POWER_SUPPLY; id++)
        document.getElementById('lowerPowerSupply').innerHTML += `<div id = "${id}" class = "holes" style = "background: black"></div>`;
    
    for(let id = S_UPPER_HALF; id <= E_UPPER_HALF; id++)
        document.getElementById('upperHalf').innerHTML += `<div id = "${id}" class = "holes" style = "background: black" ></div>`;

    for(let id = S_LOWER_HALF; id <= E_LOWER_HALF; id++)
        document.getElementById('lowerHalf').innerHTML += `<div id = "${id}" class = "holes" style = "background: black" ></div>`;

    for(id = S_UPPER_POWER_SUPPLY; id <= E_LOWER_HALF; id++)
        document.getElementById(id).addEventListener('click', drawWires);
        // document.getElementById(id).addEventListener('click', drawWires);

    /*for first placeholder:
    296 305 367 378 441 451 515 524 588 597 953 962 880 889 807 816 734 743 661 670*/
}



