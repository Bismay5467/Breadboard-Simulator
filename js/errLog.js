const ERROR_MESSAGE = [
    'Output pins cannot acccept inputs.',
    'The starting and ending terminal of the wire cannot be at the power supply at the same time.'
];

document.getElementsByClassName('tabButton')[0].addEventListener('click', () => {
    
    document.getElementsByClassName('tabButton')[1].style.cssText = 'border-bottom: none;'
    document.getElementsByClassName('tabButton')[0].style.cssText = 'border-bottom: 1px solid rgba(255, 0, 0, 0.7);';

    document.getElementsByClassName('errorLog')[0].style.display = 'block';
    document.getElementsByClassName('timingDiagram')[0].style.display = 'none';
});

document.getElementsByClassName('tabButton')[1].addEventListener('click', () => {
    
    document.getElementsByClassName('tabButton')[0].style.border = 'none';
    document.getElementsByClassName('tabButton')[1].style.borderBottom = '1px solid rgba(255, 0, 0, 0.7)';

    document.getElementsByClassName('errorLog')[0].style.display = 'none';
    document.getElementsByClassName('timingDiagram')[0].style.display = 'block';

});


document.getElementById('body').addEventListener('click', () => {
    // errorMessage(ERROR_MESSAGE[Math.floor(Math.random() * ERROR_MESSAGE.length)]);
    // errorMessage(ERROR_MESSAGE[0]);
});

function errorMessage(errorMessage) {
    console.log('Error!');
    
    var errorContainer = document.getElementsByClassName('errorLog')[0];
    var newP = document.createElement('p');
    newP.innerHTML = errorMessage;
    errorContainer.insertBefore(newP, errorContainer.firstChild)
    setTimeout(() =>{
        newP.className += 'show';
    }, 10);
}