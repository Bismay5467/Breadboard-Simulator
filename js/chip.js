/*for drag purpose*/
document.getElementsByClassName('chipContainer')[0].addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

let chipPlaceHolder = {place1:null, place2:null, place3:null, place4:null};
/*for drop purpose*/
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


    if(e.target.classList.length === 1){
        chipPlaceHolder[e.target.id] = "andGate";
        e.target.appendChild(nodeCopy);
        nodeCopy.classList.add('gate');
        console.log(e.target.id);
    }  
    console.log(chipPlaceHolder);
}