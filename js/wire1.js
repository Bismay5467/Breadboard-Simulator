let drawingState = "IDLE";
let wireCount = 1;
let start_X, start_Y;
const wireColors = ["red", "blue", "green"];
let wireColor;
let wireConnection = new Array(1021).fill(null);
let wireStartTerminal;

let positivePowerSupply = [
  [74, 146],
  [220, 292],
];
let negativePowerSupply = [
  [1, 73],
  [147, 219],
];

for (let i = 0; i < wireConnection.length; i++)
  wireConnection[i] = new Array(2).fill(null);

const removeConnection = (divId) => {
  let svg = document.getElementById("wires");
  let id = `line-${wireConnection[divId - 1][0]}`;

  for (let i = 0; i < svg.childNodes.length; i++) {
    if (svg.childNodes[i].id === id) {
      svg.removeChild(svg.childNodes[i]);

      let wireEndTerminal = wireConnection[divId - 1][1];
      //console.log(wireEndTerminal);
      wireConnection[divId - 1][0] = null;
      wireConnection[divId - 1][1] = null;
      wireConnection[wireEndTerminal - 1][0] = null;
      wireConnection[wireEndTerminal - 1][1] = null;

      //console.log(wireConnection);

      document.getElementById(divId).style.background = "black";
      document.getElementById(divId).style.borderColor = "black";

      document.getElementById(wireEndTerminal).style.background = "black";
      document.getElementById(wireEndTerminal).style.borderColor = "black";
      break;
    }
  }
};

const startDrawing = (x, y, divId) => {
  drawingState = "DRAWING";

  /*choosing a color for wire*/
  wireColor = wireColors[Math.floor(Math.random() * wireColors.length)];

  /*changing color of starting node*/
  document.getElementById(divId).style.background = wireColor;
  document.getElementById(divId).style.borderColor = wireColor;

  let newWire = document.createElementNS("http://www.w3.org/2000/svg", "path");

  newWire.style.stroke = wireColor;
  newWire.style.strokeWidth = "4";

  /*creating the path for the wire*/
  d = `M ${x} ${y}
    Q ${(x + x) / 2} ${y - 15} ${x} ${y}`;

  newWire.setAttribute("d", d);
  newWire.setAttribute("id", `line-${wireCount}`);

  /*storing path id*/
  wireStartTerminal = divId - 1;
  wireConnection[divId - 1][0] = wireCount;

  document.getElementById("wires").appendChild(newWire);
};

const stopDrawing = (divId) => {
  /*storing path id*/

  wireConnection[divId - 1][0] = wireCount;
  wireConnection[divId - 1][1] = wireStartTerminal + 1;
  wireConnection[wireStartTerminal][1] = divId;

  //console.log(wireConnection);

  /*changing color of the ending node*/
  document.getElementById(divId).style.background = wireColor;
  document.getElementById(divId).style.borderColor = wireColor;

  drawingState = "IDLE";
  wireCount++;

  if (
    (wireStartTerminal + 1 >= negativePowerSupply[0][0] &&
      wireStartTerminal + 1 <= negativePowerSupply[0][1]) ||
    (wireStartTerminal + 1 >= negativePowerSupply[1][0] &&
      wireStartTerminal + 1 <= negativePowerSupply[1][1])
  ) {
    if (
      (divId >= positivePowerSupply[0][0] &&
        divId <= positivePowerSupply[0][1]) ||
      (divId >= positivePowerSupply[1][0] && divId <= positivePowerSupply[1][1])
    ) {
      removeConnection(wireStartTerminal + 1);
      errorMessage(ERROR_MESSAGE[1]);
    }
  }

  if (
    (wireStartTerminal + 1 >= positivePowerSupply[0][0] &&
      wireStartTerminal + 1 <= positivePowerSupply[0][1]) ||
    (wireStartTerminal + 1 >= positivePowerSupply[1][0] &&
      wireStartTerminal + 1 <= positivePowerSupply[1][1])
  ) {
    if (
      (divId >= negativePowerSupply[0][0] &&
        divId <= negativePowerSupply[0][1]) ||
      (divId >= negativePowerSupply[1][0] && divId <= negativePowerSupply[1][1])
    ) {
      removeConnection(wireStartTerminal + 1);
      errorMessage(ERROR_MESSAGE[1]);
    }
  }
};

const drawLineToCursor = (mouseX, mouseY) => {
  const lastLine = document.getElementById(`line-${wireCount}`);

  d = `M ${start_X} ${start_Y}
    Q ${(start_X + mouseX) / 2} ${start_Y - 15} ${mouseX} ${mouseY}`;

  lastLine.setAttribute("d", d);
  lastLine.setAttribute("fill", "none");
};

document.addEventListener("mousemove", (e) => {
  let svgPosition = document.getElementById("wires").getBoundingClientRect();
  let offset_X = svgPosition.left,
    offset_Y = svgPosition.top;

  if (drawingState === "DRAWING")
    drawLineToCursor(e.clientX - offset_X, e.clientY - offset_Y);
});

/*main function*/
function drawWires(event) {
  event.preventDefault();

  console.log(event.target.id);
  console.log(event.mouseX, event.mouseY);

  if (document.getElementById(event.target.id).style.background === "black") {
    let svgPosition = document.getElementById("wires").getBoundingClientRect();
    let offset_X = svgPosition.left,
      offset_Y = svgPosition.top;

    (start_X = event.clientX - offset_X), (start_Y = event.clientY - offset_Y);

    if (drawingState === "IDLE")
      startDrawing(start_X, start_Y, event.target.id);
    else stopDrawing(event.target.id);
  } else {
    if (drawingState === "IDLE") removeConnection(event.target.id);
  }
}
