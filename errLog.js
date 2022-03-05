const ERROR_MESSAGE = [
    'Output pins cannot acccept inputs.',
    'The starting and ending terminal of the wire cannot be at the power supply at the same time.'
];

document.getElementById('body').addEventListener('click', () => {
    
    console.log('Error!');
    
    var errorContainer = document.getElementsByClassName('errorLog')[0];
    errorContainer.innerHTML = `<p>${ERROR_MESSAGE[Math.floor(Math.random() * ERROR_MESSAGE.length)]}</p>`+errorContainer.innerHTML;
})