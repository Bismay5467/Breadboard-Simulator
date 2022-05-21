let cout = 0;
function logicImplement(rowNo,columnNo,an,bn,cn){
    if(cn == 0){
            if(an == 0 && bn == 0){
                if(rowNo >=0 && rowNo <= 3){
                    for(let i=0;i<4;i++){
                        arrayBody[i][columnNo] = 0;
                    }
                }
                else if(rowNo >=4 && rowNo <= 7){
                    for(let i=4;i<8;i++){
                        arrayBody[i][columnNo] = 0;
                    }
                }
                cout = 0;
            }
            else if((an == 0 && bn == 1) || (an == 1 && bn == 0)){
                if(rowNo >=0 && rowNo <= 3){
                    for(let i=0;i<4;i++){
                        arrayBody[i][columnNo] = 1;
                    }
                }
                else if(rowNo >=4 && rowNo <= 7){
                    for(let i=4;i<8;i++){
                        arrayBody[i][columnNo] = 1;
                    }
                }
                cout = 0;
            }
            else if(an == 1 && bn == 1){
                if(rowNo >=0 && rowNo <= 3){
                    for(let i=0;i<4;i++){
                        arrayBody[i][columnNo] = 0;
                    }
                }
                else if(rowNo >=4 && rowNo <= 7){
                    for(let i=4;i<8;i++){
                        arrayBody[i][columnNo] = 0;
                    }
                }
                cout = 1;
            }
    }
    else if(cn == 1){
        if(an == 0 && bn == 0){
            if(rowNo >=0 && rowNo <= 3){
                for(let i=0;i<4;i++){
                    arrayBody[i][columnNo] = 1;
                }
            }
            else if(rowNo >=4 && rowNo <= 7){
                for(let i=4;i<8;i++){
                    arrayBody[i][columnNo] = 1;
                }
            }
            cout = 0;
        }
        else if((an == 0 && bn == 1) || (an == 1 && bn == 0)){
            if(rowNo >=0 && rowNo <= 3){
                for(let i=0;i<4;i++){
                    arrayBody[i][columnNo] = 0;
                }
            }
            else if(rowNo >=4 && rowNo <= 7){
                for(let i=4;i<8;i++){
                    arrayBody[i][columnNo] = 0;
                }
            }
            cout = 1;
        }
        else if(an == 1 && bn == 1){
            if(rowNo >=0 && rowNo <= 3){
                for(let i=0;i<4;i++){
                    arrayBody[i][columnNo] = 1;
                }
            }
            else if(rowNo >=4 && rowNo <= 7){
                for(let i=4;i<8;i++){
                    arrayBody[i][columnNo] = 1;
                }
            }
            cout = 1;
        }
    }
}

function fullAdder(vccRow,vccColumn,gndRow,gndColumn){
    let an,bn,cn;
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        an = arrayBody[gndRow][gndColumn+2];
        bn = arrayBody[gndRow][gndColumn+1];
        cn = arrayBody[gndRow][gndColumn-1];
        logicImplement(gndRow,gndColumn+3,an,bn,cn);
        an = arrayBody[vccRow][vccColumn+3];
        bn = arrayBody[vccRow][vccColumn+2];
        cn = cout;
        logicImplement(vccRow,vccColumn+1,an,bn,cn);
        an = arrayBody[vccRow][vccColumn-2];
        bn = arrayBody[vccRow][vccColumn-1];
        cn = cout;
        logicImplement(vccRow,vccColumn-3,an,bn,cn);
        an = arrayBody[vccRow][vccColumn-4];
        bn = arrayBody[gndRow][gndColumn-4];
        cn = cout;
        logicImplement(gndRow,gndColumn-3,an,bn,cn);
        if(cout == 1){
            for(let i=0;i<4;i++){
                arrayBody[i][gndColumn-2] = 1;
            }
        }
        else{
            for(let i=0;i<4;i++){
                arrayBody[i][gndColumn-2] = 0;
            }
        }
    }
}