function logicImplement3(rowNo,enable){
    let s0,s1,temp;
    if(rowNo == 0){
        s0 = arrayBody[rowNo][enable+1];
        s1 = arrayBody[rowNo+4][enable];
    }
    else if(rowNo == 4){
        s0 = arrayBody[rowNo-1][enable+2];
        s1 = arrayBody[rowNo][enable+1];
    }
    if(arrayBody[rowNo][enable] != null){
        for(let i=rowNo;i<=rowNo+3;i++){
            arrayBody[i][enable+6] = 0;
        }
    }
    if(arrayBody[rowNo][enable] == 0){
        if(s1 == 0 && s0 == 0)
            temp = arrayBody[rowNo][enable+2];
        else if(s1 == 0 && s0 == 1)
            temp = arrayBody[rowNo][enable+3];
        else if(s1 == 1 && s0 == 0)
            temp = arrayBody[rowNo][enable+4];
        else if(s1 == 0 && s0 == 1)
            temp = arrayBody[rowNo][enable+5];
        for(let i=rowNo;i<=rowNo+3;i++){
            arrayBody = arrayBody[i][enable+6];
        }
    }
}

function multiplexer(vccRow,vccColumn,gndRow,gndColumn){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        logicImplement3(gndRow,vccColumn);
        logicImplement3(vccRow,vccColumn+1);
    }
    else flag = true;
}