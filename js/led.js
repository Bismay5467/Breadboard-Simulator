document.getElementById('red-led').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('red-led').addEventListener('dragenter', (e) => {
    e.preventDefault();
});

document.getElementById('red-led').addEventListener('dragover', (e) => {
    e.preventDefault();
})

document.getElementById('red-led').addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text/plain');
    const nodeCopy = document.getElementById(id).cloneNode(true);
    e.target.appendChild(nodeCopy);
    errorMessage(id); 
    errorMessage(nodeCopy);
    errorMessage(e.target);
});

