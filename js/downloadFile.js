const downloadFile = () => {
  let href = new URL(window.location.href);
  const params = new URLSearchParams(href.search);
  if (!params.get("download")) return;

  document.getElementById("downloading").style.display = "flex";

  const data = localStorage.getItem("breadboard");
  const downloadFile = document.createElement("a");
  let blob = new Blob([data], { type: "application/json" });
  let url = window.URL.createObjectURL(blob);
  downloadFile.href = url;
  downloadFile.download = "Breadboard.json";
  downloadFile.click();
  downloadFile.remove();
};

downloadFile();
