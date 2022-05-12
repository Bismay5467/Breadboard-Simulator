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

document.getElementById('10K').addEventListener('click', () => {

    const button = document.getElementById('10K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('20K').addEventListener('click', () => {

    const button = document.getElementById('20K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('200K').addEventListener('click', () => {

    const button = document.getElementById('200K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});

document.getElementById('400K').addEventListener('click', () => {

    const button = document.getElementById('400K');
    
    if(!multimeterOn)
        return;

    workingButtonInterface(button);
});


const displayVoltage = (divId) => {

    const multimeterDisplay = document.getElementById('multimeter-display');

    if(!powerOn) return;

    row = Math.floor((divId-297)/74);
    column = (divId-297)%74;

    if(arrayBody[row][column] == null) multimeterDisplay.innerHTML = `1.00`;
    else if(arrayBody[row][column] == 0) multimeterDisplay.innerHTML = `${parseFloat(Math.random(arrayBody[row][column])*2).toFixed(2)}`
    else multimeterDisplay.innerHTML = `${parseFloat(Math.random(arrayBody[row][column])+4).toFixed(2)}`




}