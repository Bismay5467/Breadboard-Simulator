let multimeterOn = false;
let workingButton = 'NONE';

document.getElementsByClassName('btn-3')[0].addEventListener('click', () => {
    const powerButton = document.getElementsByClassName('btn-3')[0];
    const buttons = document.getElementsByClassName('buttons')[0].querySelectorAll('button');
    const multimeterDisplay = document.getElementById('multimeter-display');
    
    if(powerButton.innerHTML === `<i class="fa fa-power-off" aria-hidden="true"></i><br>OFF`) 
    {
        if(workingButton != 'NONE') workingButton.classList.toggle('pressed');
        workingButton = 'NONE';

        powerButton.innerHTML = `<i class="fa fa-power-off" aria-hidden="true"></i><br>ON`;
        multimeterOn = false;
        multimeterDisplay.innerHTML = '';
    }
    else
    {  
        powerButton.innerHTML = `<i class="fa fa-power-off" aria-hidden="true"></i><br>OFF`;
        multimeterOn = true;
        multimeterDisplay.innerHTML = `0.00`;
    }
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.toggle('on');
    }
});

const workingButtonInterface = (button) => {
    
    const multimeterDisplay = document.getElementById('multimeter-display');
    multimeterDisplay.innerHTML = `0.00`;

    if(workingButton != 'NONE' && (workingButton.id == button.id)) workingButton = 'NONE';
    else {
        if(workingButton != 'NONE') workingButton.classList.toggle('pressed');
        workingButton = button;
    }
    button.classList.toggle('pressed');
    console.log(workingButton);
}

document.getElementById('2DCV').addEventListener('click', () => {

    const button = document.getElementById('2DCV');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('20DCV').addEventListener('click', () => {

    const button = document.getElementById('20DCV');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('20mDCA').addEventListener('click', () => {

    const button = document.getElementById('20mDCA');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('10DCA').addEventListener('click', () => {

    const button = document.getElementById('10DCA');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('330 Ω').addEventListener('click', () => {

    const button = document.getElementById('330 Ω');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('800 Ω').addEventListener('click', () => {

    const button = document.getElementById('800 Ω');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('1K').addEventListener('click', () => {

    const button = document.getElementById('1K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('10K').addEventListener('click', () => {

    const button = document.getElementById('10K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});


const displayMultimeterValue = (divId) => {

    const multimeterDisplay = document.getElementById('multimeter-display');
    let voltageState;
    let row = column = 0

    if(!powerOn || !multimeterOn) return;

    if(divId > 296) {
        row = Math.floor((divId-297)/74);
        column = (divId-297)%74;

        if(arrayBody[row][column] == null) {
            multimeterDisplay.innerHTML = `-0.00`;
            return;
        }
    }

    if(workingButton == 'NONE') {
        multimeterDisplay.innerHTML = `0.00`;
        return;
    }

    if((divId >= 1 && divId <= 74) || (divId >= 223 && divId <= 296)) voltageState = 1;
    else if(divId >= 75 && divId <= 222) voltageState = 0;
    else voltageState = arrayBody[row][column];

    switch(workingButton.id) {
        case '2DCV': 
            if(voltageState == 0) multimeterDisplay.innerHTML = `${parseFloat(Math.random(voltageState)*0.1).toFixed(2)}`
            else multimeterDisplay.innerHTML = `${parseFloat(Math.random(voltageState)*0.1+1.9).toFixed(2)}`
            break;
        case '20DCV': 
            if(voltageState == 0) multimeterDisplay.innerHTML = `${parseFloat(Math.random(voltageState)*0.1).toFixed(2)}`
            else multimeterDisplay.innerHTML = `${parseFloat(Math.random(voltageState)*0.1+4.9).toFixed(2)}`
            break;
    }

}