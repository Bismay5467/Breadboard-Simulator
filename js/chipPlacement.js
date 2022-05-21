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

document.getElementById('parallelAdder').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('decoder').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('decoder-demux').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

document.getElementById('mux').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

// document.getElementById('jkFlipFlop').addEventListener('dragstart', (e) => {
//     e.dataTransfer.setData('text/plain', e.target.id);
// });


let chipPlaceHolder = {place1:null, place2:null, place3:null, place4:null};

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

    //console.log(e.target.style.cssText);   

    if(e.target.classList.length === 1){

        e.target.appendChild(nodeCopy);
        chipPlaceHolder[e.target.id] = id;

        if(id == 'decoder' || id == 'parallelAdder' || id == 'decoder-demux' || id == 'mux') nodeCopy.style.width = '100%';
        else nodeCopy.style.width = '90%';
        
        nodeCopy.style.height = '100%';
        nodeCopy.style.borderRadius = '0.3em';
    } 
    //console.log(chipPlaceHolder); 
}

const removeChip = (chipPlaceholderId) => {

    let chipPlaceholderElement = document.getElementById(chipPlaceholderId);
    

    while (chipPlaceholderElement.firstChild)
    {
        chipPlaceHolder[chipPlaceholderElement.id] =  null;
        chipPlaceholderElement.removeChild(chipPlaceholderElement.firstChild);
    }

}