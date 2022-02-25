/*for drag purpose*/
document.getElementsByClassName('chipContainer')[0].addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

let chipPlaceHolder = [-1, -1, -1, -1];

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

    console.log(e.target);

    if(e.target.classList.length === 1){
        e.target.appendChild(nodeCopy);
        nodeCopy.classList.add('gate');
    }  
}