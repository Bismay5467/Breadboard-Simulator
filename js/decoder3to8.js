function ic74138(vccRow,vccColumn,gndRow,gndColumn){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        if(arrayBody[gndRow][vccColumn+3] != null && arrayBody[gndRow][vccColumn+4] != null && arrayBody[gndRow][vccColumn+5] != null){
            for(let i = vccColumn+1; i <vccColumn+7; i++){
                for(let j=0;j<4;j++){
                    arrayBody[j][i] = 1;
                }
            }
            for(let i=4;i<8;i++){
                arrayBody[i][gndColumn-1] = 1;
            }
        }
        if(arrayBody[gndRow][vccColumn+3] == 0 && arrayBody[gndRow][vccColumn+4] == 0 && arrayBody[gndRow][vccColumn+5] == 1){
            let changeColumn;
            let flag = 0;
            if(arrayBody[gndRow][vccColumn+2] == 0){
                if(arrayBody[gndRow][vccColumn+1] == 0 && arrayBody[gndRow][vccColumn] == 0)
                    changeColumn = vccColumn+1;
                else if(arrayBody[gndRow][vccColumn+1] == 0 && arrayBody[gndRow][vccColumn] == 1)
                    changeColumn = vccColumn+2;
                else if(arrayBody[gndRow][vccColumn+1] == 1 && arrayBody[gndRow][vccColumn] == 0)
                    changeColumn = vccColumn+3;
                else if(arrayBody[gndRow][vccColumn+1] == 1 && arrayBody[gndRow][vccColumn] == 1)
                    changeColumn = vccColumn+4;
            }
            else if(arrayBody[gndRow][vccColumn+2] == 1){
                if(arrayBody[gndRow][vccColumn+1] == 0 && arrayBody[gndRow][vccColumn] == 0)
                    changeColumn = vccColumn+5;
                else if(arrayBody[gndRow][vccColumn+1] == 0 && arrayBody[gndRow][vccColumn] == 1)
                    changeColumn = vccColumn+6;
                else if(arrayBody[gndRow][vccColumn+1] == 1 && arrayBody[gndRow][vccColumn] == 0)
                    changeColumn = vccColumn+7;
                else if(arrayBody[gndRow][vccColumn+1] == 1 && arrayBody[gndRow][vccColumn] == 1){
                    flag = 1;
                    changeColumn = vccColumn+6;
                }
            }
            if(flag == 1){
                for(let i=4; i<8; i++){
                    arrayBody[i][changeColumn] = 0;
                }
            }
            else{
                for(let i=0; i<4; i++){
                    arrayBody[i][changeColumn] = 0;
                }
            }
        }
    }
}