const saveFile = () => {
  const data = JSON.stringify({ wireConnection, chipPlaceHolder, wireCount });
  localStorage.setItem("breadboard", data);
  window.open(
    "http://127.0.0.1:5500/BreadBoardSimulator.html?download=true",
    "Download",
    "width=500,height=500"
  );
};
