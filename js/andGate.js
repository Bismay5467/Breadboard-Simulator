let flag = false;

function andGate(vccRow,vccColumn,gndRow,gndColumn,startCol){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        let count = 0;
        while(count != 2){
            if(arrayBody[4][startCol]==1 && arrayBody[4][startCol+1]==1){
                for(let i=4;i<8;i++){
                    arrayBody[i][startCol+2] = 1;
                }
                startCol=startCol+3;
               // console.log(startCol);
            }
            else if(arrayBody[4][startCol]==null || arrayBody[4][startCol+1]==null){
                startCol=startCol+3;
            }
            else{
                for(let i=4;i<8;i++){
                    arrayBody[i][startCol+2] = 0;
                }
                startCol=startCol+3;
               // console.log(startCol);
            }
            count++;
        }
        startCol = startCol - 5;
        console.log(startCol);
        while(count != 4){
            if(arrayBody[3][startCol]==1 && arrayBody[3][startCol+1]==1){
                for(let i=0;i<4;i++){
                    arrayBody[i][startCol+2] = 1;
                }
                startCol=startCol+3;
            }
            else if(arrayBody[3][startCol]==null || arrayBody[3][startCol+1]==null){
                startCol=startCol+3;
            }
            else{
                for(let i=0;i<4;i++){
                    arrayBody[i][startCol+2] = 0;
                }
                startCol=startCol+3;
            }
            count++;
        }
    }
    else flag = true;
}
// function andGateLogic(place){
//     let vccid,gndid;
//     if(place=="place1"){
//         vccid = 523;
//         gndid = 603;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 5;
//         logicImplementation(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place2"){
//         vccid = 539;
//         gndid = 619;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 24;
//         logicImplementation(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place3"){
//         vccid = 555;
//         gndid = 635;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 41;
//         logicImplementation(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place4"){
//         vccid = 571;
//         gndid = 653;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 60;
//         logicImplementation(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     //console.log(vcc,gnd);
    
// }