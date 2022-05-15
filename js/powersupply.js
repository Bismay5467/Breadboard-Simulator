const arrayBody = new Array(8).fill(null);

for(let i = 0;i<arrayBody.length;i++){
    arrayBody[i] = new Array(74);
}

const uPositivePowerEnd = Math.round(E_UPPER_POWER_SUPPLY/2);
const lNegativePowerEnd = Math.floor((S_LOWER_POWER_SUPPLY + E_LOWER_POWER_SUPPLY)/2);
const lPositivePowerStart = lNegativePowerEnd + 1;
const uNegativePowerStart = uPositivePowerEnd + 1;

function connectWires(){
    let j = 0;
    while(j!=1021){
        let flag = 0;
        let wirePoint1,wirePoint2,row1,row2,column1,column2;
        if(wireConnection[j][0] === null){
            j++;
            continue;
        }
        if(wireConnection[j][1] === null || (wireConnection[j][1] >= 1 && wireConnection[j][1] <=296)){
            j++;
            continue;
        }
        wirePoint1 = j+1;
        wirePoint2 = parseInt(wireConnection[j][1]);
        console.log(wirePoint1);
        console.log(wirePoint2);
        row2 = Math.floor((wirePoint2-297)/74);
        column2 = (wirePoint2-297)%74;
    // if(arrayBody[row1][column1] != null && (arrayBody[row2][column2] == null || arrayBody[row2][column2] == 1))
        if(wirePoint1 >= 1 && wirePoint1 <= 296){
            if((arrayBody[row2][column2] === null) || (arrayBody[row2][column2] === 1)){

                if((wirePoint1 >=S_UPPER_POWER_SUPPLY && wirePoint1 <= uPositivePowerEnd) || (wirePoint1 >= lPositivePowerStart && wirePoint1 <= E_LOWER_POWER_SUPPLY)){
                    if(wirePoint2 >= S_UPPER_HALF && wirePoint2 <= E_UPPER_HALF){
                        for(let i=0;i<4;i++){
                            arrayBody[i][column2] = 1;
                        }
                    }
                    else if(wirePoint2 >= S_LOWER_HALF && wirePoint2 <= E_LOWER_HALF){
                        for(let i=4;i<8;i++){
                            arrayBody[i][column2] = 1;
                        }
                    }
                }
                else if((wirePoint1 >=uNegativePowerStart && wirePoint1 <= E_UPPER_POWER_SUPPLY) || (wirePoint1 >=S_LOWER_POWER_SUPPLY && wirePoint1 <= lNegativePowerEnd)){
                    if(wirePoint2 >= S_UPPER_HALF && wirePoint2 <= E_UPPER_HALF){
                        for(let i=0;i<4;i++){
                            arrayBody[i][column2] = 0;
                        }
                    }
                    else if(wirePoint2 >= S_LOWER_HALF && wirePoint2 <= E_LOWER_HALF){
                        for(let i=4;i<8;i++){
                            arrayBody[i][column2] = 0;
                        }
                    }
                }
                
            }
        }
        
        else{
            row1 = Math.floor((wirePoint1-297)/74);
            column1 = (wirePoint1-297)%74;
            if(arrayBody[row1][column1] === arrayBody[row2][column2]){
                j++;
                continue;
            }
            if(arrayBody[row1][column1] != null && (arrayBody[row2][column2] == null || arrayBody[row2][column2] == 1)){
                if(wirePoint2 >= S_UPPER_HALF && wirePoint2 <= E_UPPER_HALF){
                    for(let i=0;i<4;i++){
                        arrayBody[i][column2] = arrayBody[row1][column1];
                    }
                    flag = 1;
                }
                else if(wirePoint2 >= S_LOWER_HALF && wirePoint2 <= E_LOWER_HALF){
                    for(let i=4;i<8;i++){
                        arrayBody[i][column2] = arrayBody[row1][column1];
                    }
                    flag = 1;
                }
            }
            else if(arrayBody[row2][column2] != null && (arrayBody[row1][column1] == null || arrayBody[row1][column1] == 1)){
                if(wirePoint1 >= S_UPPER_HALF && wirePoint1 <= E_UPPER_HALF){
                    for(let i=0;i<4;i++){
                        arrayBody[i][column1] = arrayBody[row2][column2];
                    }
                    flag = 1;
                }
                else if(wirePoint1 >= S_LOWER_HALF && wirePoint2 <= E_LOWER_HALF){
                    for(let i=4;i<8;i++){
                        arrayBody[i][column1] = arrayBody[row2][column2];
                    }
                    flag = 1;
                }
            }
        }
        if(flag == 1){
            j = 296;
        }
        else{
            j++;
        }
    }
}


function callChips(){
    let vccRow = 3, vccColumn = 4;
    let gndRow = 4, gndColumn = 10;
    for(var place in chipPlaceHolder){
        if(chipPlaceHolder[place] == null){
            vccColumn = vccColumn + 16;
            gndColumn = gndColumn + 16;
            continue;
        }
        switch(chipPlaceHolder[place]){
            case "andGate" :
                andGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
            case "orGate" :
                orGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
            case "notGate" :
                notGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
            case "nandGate" :
                nandGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
            case "norGate" :
                norGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
            case "xorGate" :
                xorGate(vccRow,vccColumn,gndRow,gndColumn,vccColumn);
                vccColumn = vccColumn + 16;
                gndColumn = gndColumn + 16;
                break;
        }
        
    }
}

function powersupply(){

    for(let i = 0;i<arrayBody.length;i++){
        arrayBody[i].fill(null);
    }   
    connectWires();    
 //   connectWires_pichonTheke();   
    for(let i = 0; i < 40; i++) 
    {
        callChips();
        connectWires();    
        callChips();
        connectWires();  
    }
//    connectWires_soja();
    console.log(arrayBody);
   /* if(chipPlaceHolder["place1"]=="andGate"){
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
    }*/
}