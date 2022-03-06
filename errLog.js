const ERROR_MESSAGE = [
    'Output pins cannot acccept inputs.',
    'The starting and ending terminal of the wire cannot be at the power supply at the same time.'
];

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    
    document.getElementsByTagName('button')[1].style.cssText = 'border-bottom: none;'
    document.getElementsByTagName('button')[0].style.cssText = 'border-bottom: 1px solid red;';

    document.getElementsByClassName('errorLog')[0].style.display = 'block';
    document.getElementsByClassName('timingDiagram')[0].style.display = 'none';
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    
    document.getElementsByTagName('button')[0].style.border = 'none';
    document.getElementsByTagName('button')[1].style.borderBottom = '1px solid red';

    document.getElementsByClassName('errorLog')[0].style.display = 'none';
    document.getElementsByClassName('timingDiagram')[0].style.display = 'block';

});


document.getElementById('body').addEventListener('click', () => {
    
    console.log('Error!');
    
    var errorContainer = document.getElementsByClassName('errorLog')[0];
    var newP = document.createElement('p');
    newP.innerHTML = ERROR_MESSAGE[Math.floor(Math.random() * ERROR_MESSAGE.length)];
    errorContainer.insertBefore(newP, errorContainer.firstChild)
    setTimeout(() =>{
        newP.className += 'show';
    }, 10);
});