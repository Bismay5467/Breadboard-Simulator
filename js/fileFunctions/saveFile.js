const saveFile = () => {
  const data = JSON.stringify(wireConnection);

  const downloadFile = document.createElement("a");
  let blob = new Blob([data], { type: "application/json" });
  let url = window.URL.createObjectURL(blob);
  downloadFile.href = url;
  downloadFile.download = "Breadboard.json";

  downloadFile.click();
  downloadFile.remove();

  console.log("some commit");
};
