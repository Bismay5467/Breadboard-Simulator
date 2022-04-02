document.getElementById('andGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('orGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('notGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('nandGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('norGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('xorGate').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('encoder').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('decoder').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('clock').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('dFlipFlop').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('jkFlipFlop').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});




const chips = document.getElementsByClassName('chip');

for (let i = 0; i < chips.length; i++) 
{
    chips[i].addEventListener('dragenter', (e) => {
        e.preventDefault();
    });

    chips[i].addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    chips[i].addEventListener('drop', drop);
}

function drop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const nodeCopy = document.getElementById(id).cloneNode(true);
    /*chipPlaceHolder[e.target.id] = gateNo;*/

    console.log(e.target.style.cssText);   

    if(e.target.classList.length === 1){
        e.target.appendChild(nodeCopy);
        nodeCopy.style.width = '100%';
        nodeCopy.style.height = '100%';
        nodeCopy.style.borderRadius = '0.3em';
    } 
    console.log(e.target); 
}

const removeChip = (chipPlaceholderId) => {

    let chipPlaceholder = document.getElementById(chipPlaceholderId);

    while (chipPlaceholder.firstChild)
        chipPlaceholder.removeChild(chipPlaceholder.firstChild);
}