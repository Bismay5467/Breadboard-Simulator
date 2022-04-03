const inputFile = document.getElementById("open-file-input");
inputFile.addEventListener("change", (e) => {
  readFile(e);
});

const readFile = (e) => {
  var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    const data = JSON.parse(e.target.result);

    wireConnection = data;
    let svgPosition = document.getElementById("wires").getBoundingClientRect();
    let offset_X = svgPosition.left,
      offset_Y = svgPosition.top;
    const doneIds = new Set();

    for (let i = 0; i < wireConnection.length; i++) {
      if (wireConnection[i][0] && wireConnection[i][1] && !doneIds.has(i + 1)) {
        const startPoint = document.getElementById(i + 1);
        const endPoint = document.getElementById(wireConnection[i][1]);
        let { x, y } = startPoint.getBoundingClientRect();
        let { x: endX, y: endY } = endPoint.getBoundingClientRect();
        let newWire = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        wireColor = wireColors[Math.floor(Math.random() * wireColors.length)];

        newWire.style.stroke = wireColor;
        newWire.style.strokeWidth = "4";

        /*creating the path for the wire*/
        d = `M ${x - offset_X} ${y - offset_Y}
            Q ${(x - offset_X + endX - offset_X) / 2} ${y - offset_Y - 15} ${
          endX - offset_X
        } ${endY - offset_Y}`;

        newWire.setAttribute("d", d);
        newWire.setAttribute("id", `line-${wireConnection[i][0]}`);
        newWire.setAttribute("fill", "none");

        document.getElementById("wires").appendChild(newWire);

        doneIds.add(i + 1);
        doneIds.add(+wireConnection[i][1]);
      }
    }
  };
  reader.readAsText(file);
};

const openFile = () => {
  inputFile.click();
};
