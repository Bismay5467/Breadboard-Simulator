let openDivClassName = "NONE";
let wireColor = '#0acb0e';

const collapse = (className, maxHeight) => {
    let element = document.getElementsByClassName(className)[0];

    document.getElementById(className).childNodes[0].classList.toggle('fa-caret-up');
    
    if(element.style.maxHeight) {
        element.style.maxHeight = null;
        openDivClassName = 'NONE';
    }

    else {
        if(openDivClassName !== 'NONE') {
            document.getElementById(openDivClassName).childNodes[0].classList.toggle('fa-caret-up');
            document.getElementsByClassName(openDivClassName)[0].style.maxHeight = null;
        }

        element.style.maxHeight = maxHeight;
        openDivClassName = className;
    }
}

document.getElementById('colorPicker').addEventListener('input', () => {
    document.getElementsByClassName('bi-eyedropper')[0].style.color = document.getElementById('colorPicker').value;
    wireColor = document.getElementById('colorPicker').value;
});

