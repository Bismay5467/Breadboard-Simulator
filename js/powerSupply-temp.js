let powerOn = false;

const powerButtons = document.getElementsByClassName('power-button')[0].querySelectorAll('button');

document.getElementById('power').addEventListener('click', () => {
    for (let i = 0; i < powerButtons.length; i++) {
        powerButtons[i].classList.toggle ('power-on');
    }
    const div = document.getElementsByClassName('powerSupply-display-inner')[0].querySelectorAll('div');
    for (let i = 0; i < div.length; i++) {
        div[i].style.color = 'rgb(194, 12, 12)';
    }
    if(!powerOn) {
        powerOn = true;
        for (let i = 0; i < div.length; i++) {
            div[i].style.color = 'rgb(194, 12, 12)';
        }
        div[0].innerHTML = `5.00`;
        div[2].innerHTML = `30.00`;
    }
    else {
        powerOn = false;
        for (let i = 0; i < div.length; i++) {
            div[i].style.color = 'rgb(39, 38, 38)';
        }
        div[0].innerHTML = `0.00`;
        div[2].innerHTML = `00.00`;
    }
});

document.getElementById('simulate').addEventListener('click', () => {
    if(!powerOn) {
        errorMessage(ERROR_MESSAGE[2]);
        return;
    }
});



