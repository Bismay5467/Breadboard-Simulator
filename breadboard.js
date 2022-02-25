window.onload = () => {

    for(let id = 1; id <= 146; id++) {
        document.getElementById('upperPowerSupply').innerHTML += `<div id = "${id}" style="border: 1px solid ; border-radius: 50%; background-color: black; width: 3px; height: 3px; margin-left: 7px; margin-top: 7px; "></div>`;
    }

    for(let id = 147; id <= 292; id++) {
        document.getElementById('lowerPowerSupply').innerHTML += `<div id = "${id}" style="border: 1px solid ; border-radius: 50%; background-color: black; width: 3px; height: 3px; margin-left: 7px; margin-top: 7px; "></div>`;
    }

    for(let id = 292; id <= 656; id++) {
        document.getElementById('upperHalf').innerHTML += `<div id = "${id}" style="border: 1px solid ; border-radius: 50%; background-color: black; width: 3px; height: 3px; margin-left: 7px; margin-top: 7px; "></div>`;
    }

    for(let id = 657; id <= 1021; id++)
    {
        document.getElementById('lowerHalf').innerHTML += `<div id = "${id}" style="border: 1px solid ; border-radius: 50%; background-color: black; width: 3px; height: 3px; margin-left: 7px; margin-top: 7px; "></div>`;
    }

    for(id = 1; id <= 1021; id++) {
        document.getElementById(id).addEventListener('click', getInfo);
    }
    /*for first placeholder:
    296 305 367 378 441 451 515 524 588 597 953 962 880 889 807 816 734 743 661 670*/
}

/*let drawingState = "IDLE";
let lineCount = 0;

const startDrawing = (x, y) => {
    drawingState = "DRAWING";

    let newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    newLine.style.stroke = "#000000";
    newLine.style.strokeWidth = "3";

    newLine.setAttribute("x1", x+2);
    newLine.setAttribute("y1", y - 5);
    newLine.setAttribute("x2", x - 5);
    newLine.setAttribute("y2", y - 5);
    newLine.setAttribute("id", `line-${lineCount}`);

    document.getElementById("lines").appendChild(newLine);
  };*/

function getInfo(event) {
    
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.clientX);
    console.log(event.clientY);

    //if (drawingState === "IDLE") startDrawing(event.clientX, event.clientY);

}