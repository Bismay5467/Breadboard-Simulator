const arrayBody = new Array(8).fill(null);
for(let i = 0;i<arrayBody.length;i++){
    arrayBody[i] = new Array(72).fill(null);
}
const powersupply = (event) => {
    let arrayRow1 = Math.floor((wirePoints[1]-293)/73);
    let arrayColumn1 = (wirePoints[1]-293)%73;
    let uPositivePowerEnd = Math.round(E_UPPER_POWER_SUPPLY/2);
    let lNegativePowerEnd = Math.floor((S_LOWER_POWER_SUPPLY + E_LOWER_POWER_SUPPLY)/2);
    let lPositivePowerStart = lNegativePowerEnd + 1;
    let uNegativePowerStart = uPositivePowerEnd + 1;
    if((arrayBody[arrayRow1][arrayColumn1] == null) || (arrayBody[arrayRow1][arrayColumn1] == 1)){

        if((wirePoints[0] >=S_UPPER_POWER_SUPPLY && wirePoints[0] <= uPositivePowerEnd) || (wirePoints[0] >= lPositivePowerStart && wirePoints[0] <= E_LOWER_POWER_SUPPLY)){
            if(wirePoints[1] >= S_UPPER_HALF && wirePoints[1] <= E_UPPER_HALF){
                for(let i=0;i<4;i++){
                    arrayBody[i][arrayColumn1] = 1;
                }
            }
            else if(wirePoints[1] >= S_LOWER_HALF && wirePoints[1] <= E_LOWER_HALF){
                for(let i=4;i<8;i++){
                    arrayBody[i][arrayColumn1] = 1;
                }
            }
        }
        else if((wirePoints[0] >=uNegativePowerStart && wirePoints[0] <= E_UPPER_POWER_SUPPLY) || (wirePoints[0] >=S_LOWER_POWER_SUPPLY && wirePoints[0] <= lNegativePowerEnd)){
            if(wirePoints[1] >= S_UPPER_HALF && wirePoints[1] <= E_UPPER_HALF){
                for(let i=0;i<4;i++){
                    arrayBody[i][arrayColumn1] = 0;
                }
            }
            else if(wirePoints[1] >= S_LOWER_HALF && wirePoints[1] <= E_LOWER_HALF){
                for(let i=4;i<8;i++){
                    arrayBody[i][arrayColumn1] = 0;
                }
            }
        }
        else if((wirePoints[0] >= S_UPPER_HALF && wirePoints[0] <= E_LOWER_HALF)){
            let arrayRow2 = Math.floor((wirePoints[0]-293)/73);
            let arrayColumn2 = (wirePoints[0]-293)%73;
            if(wirePoints[1] >= S_UPPER_HALF && wirePoints[1] <= E_UPPER_HALF){
                for(let i=0;i<4;i++){
                    arrayBody[i][arrayColumn1] = arrayBody[arrayRow2][arrayColumn2];
                }
            }
            else if(wirePoints[1] >= S_LOWER_HALF && wirePoints[1] <= E_LOWER_HALF){
                for(let i=4;i<8;i++){
                    arrayBody[i][arrayColumn1] = arrayBody[arrayRow2][arrayColumn2];
                }
            }
        }
    }
    else{
        alert("futo already vore ache");
    }
    console.log(arrayBody);
    if(chipPlaceHolder["place1"]=="andGate"){
        andGateLogic("place1");
    }
    else if(chipPlaceHolder["place2"]=="andGate"){
        andGateLogic("place2");
    }
    else if(chipPlaceHolder["place3"]=="andGate"){
        andGateLogic("place3");
    }
    else if(chipPlaceHolder["place4"]=="andGate"){
        andGateLogic("place4");
    }
}