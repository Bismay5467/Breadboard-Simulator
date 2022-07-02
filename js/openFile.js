const inputFile = document.getElementById("open-file-input");
inputFile.addEventListener("change", (e) => {
  var file = e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function (e) {
    console.log("Hello");
    localStorage.setItem("openfile", e.target.result);
    var url = window.location.href;
    if (url.indexOf("?") > -1) {
      url += "&openfile=true";
    } else {
      url += "?openfile=true";
    }
    window.location.href = url;
  };

  reader.readAsText(file);
});

let WIRE_COLORS = ["red", "green", "blue"];

const readFile = (data) => {
  wireConnection = data.wireConnection;
  wireCount = data.wireCount;
  chipPlaceHolder = data.chipPlaceHolder;
  for (const e in chipPlaceHolder) {
    const id = chipPlaceHolder[e];
    if (!id) continue;
    const nodeCopy = document.getElementById(id).cloneNode(true);
    document.getElementById(e).appendChild(nodeCopy);
    if(id == 'decoder' || id == 'parallelAdder' || id == 'decoder-demux' || id == 'mux') nodeCopy.style.width = '100%';
    else nodeCopy.style.width = '90%';

    nodeCopy.style.height = "100%";
    nodeCopy.style.borderRadius = "0.3em";
  }

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
      const wireColor =
        WIRE_COLORS[Math.floor(Math.random() * WIRE_COLORS.length)];
      document.getElementById(i + 1).style.background = wireColor;
      document.getElementById(i + 1).style.borderColor = wireColor;
      document.getElementById(wireConnection[i][1]).style.background =
        wireColor;
      document.getElementById(wireConnection[i][1]).style.borderColor =
        wireColor;

      newWire.style.stroke = wireColor;
      newWire.style.strokeWidth = "4";

      /*creating the path for the wire*/
      d = `M ${x - offset_X + 2} ${y - offset_Y + 3}
            Q ${(x - offset_X + endX - offset_X) / 2} ${y - offset_Y - 15} ${
        endX - offset_X + 2
      } ${endY - offset_Y + 3}`;

      newWire.setAttribute("d", d);
      newWire.setAttribute("id", `line-${wireConnection[i][0]}`);
      newWire.setAttribute("fill", "none");

      document.getElementById("wires").appendChild(newWire);

      doneIds.add(i + 1);
      doneIds.add(+wireConnection[i][1]);
    }
  }
};
const params = new URLSearchParams(window.location.search);
setTimeout(() => {
  if (params.has("openfile")) {
    const data = JSON.parse(localStorage.getItem("openfile"));
    console.log(data);

    readFile(data);
    localStorage.removeItem("openfile");
  }
}, 500);

const openFile = () => {
  inputFile.click();
};
