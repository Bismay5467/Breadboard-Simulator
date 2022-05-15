function notGate(vccRow,vccColumn,gndRow,gndColumn,startCol){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        let count = 0;
        while(count != 3){
            if(arrayBody[4][startCol]==0){
                for(let i=4;i<8;i++){
                    arrayBody[i][startCol+1] = 1;
                }
                startCol=startCol+2;
                console.log(startCol);
            }
            else if(arrayBody[4][startCol]==null){
                startCol=startCol+2;
            }
            else{
                for(let i=4;i<8;i++){
                    arrayBody[i][startCol+1] = 0;
                }
                startCol=startCol+2;
               // console.log(startCol);
            }
            count++;
        }
        startCol = startCol - 5;
        while(count != 6){
            if(arrayBody[3][startCol]==0){
                for(let i=0;i<4;i++){
                    arrayBody[i][startCol+1] = 1;
                }
                startCol=startCol+2;
            }
            else if(arrayBody[3][startCol]==null){
                startCol=startCol+2;
            }
            else{
                for(let i=0;i<4;i++){
                    arrayBody[i][startCol+1] = 0;
                }
                startCol=startCol+2;
            }
            count++;
        }
    }
}
// function notGateLogic(place){
//     let vccid,gndid;
//     if(place=="place1"){
//         vccid = 517;
//         gndid = 596;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 5;
//         logicImplementation2(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place2"){
//         vccid = 535;
//         gndid = 614;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 24;
//         logicImplementation2(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place3"){
//         vccid = 553;
//         gndid = 632;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 41;
//         logicImplementation2(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     else if(place=="place4"){
//         vccid = 572;
//         gndid = 651;
//         let vccRow = Math.floor((vccid-293)/73);
//         let vccColumn = (vccid-293)%73;
//         let gndRow = Math.floor((gndid-293)/73);
//         let gndColumn = (gndid-293)%73;
//         let startCol = 60;
//         logicImplementation2(vccRow,vccColumn,gndRow,gndColumn,startCol);
//     }
//     //console.log(vcc,gnd);
    
// }