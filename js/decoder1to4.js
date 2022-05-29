function logicImplement2(rowNo,enable){
    if(arrayBody[rowNo][enable] != null){
        for(let i=enable+3;i<=enable+6;i++){
            for(let j=rowNo;j<=rowNo+3;j++){
                arrayBody[j][i] = 1;
            }
        }
    }
    if(arrayBody[rowNo][enable] == 0){
        let changeColumn;
        if(arrayBody[rowNo][enable+1] == 0 && arrayBody[rowNo][enable+2] == 0)
            changeColumn = enable+3;
        else if(arrayBody[rowNo][enable+1] == 1 && arrayBody[rowNo][enable+2] == 0)
            changeColumn = enable+4;
        else if(arrayBody[rowNo][enable+1] == 0 && arrayBody[rowNo][enable+2] == 1)
            changeColumn = enable+5;
        else if(arrayBody[rowNo][enable+1] == 1 && arrayBody[rowNo][enable+2] == 1)
            changeColumn = enable+6;
        for(let i=rowNo; i<=rowNo+3; i++){
            arrayBody[i][changeColumn] = 0;
        }
    }
}

function decoder_demux(vccRow,vccColumn,gndRow,gndColumn){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        logicImplement2(gndRow,vccColumn);
        logicImplement2(vccRow,vccColumn+1);
    }
    else flag = true;
}