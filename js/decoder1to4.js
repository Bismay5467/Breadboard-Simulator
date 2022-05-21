function logicImplement2(rowNo,enable){
    if(arrayBody[rowNo][enable] != null){
        for(let i=enable+3;i<=enable+6;i++){
            for(let j=0;j<4;j++)
        }
    }
}

function decoder_demux(vccRow,vccColumn,gndRow,gndColumn){
    if(arrayBody[vccRow][vccColumn] == 1 && arrayBody[gndRow][gndColumn] == 0){
        logicImplement2(gndRow,vccColumn);
    }
}