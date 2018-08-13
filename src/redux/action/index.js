import {
    CHANGE_QUANTITY,
    LOAD_JSON,
    NOTHING_TODO

 } from '../../config';


export const changeQuantity = (index, value, dataList, dispatch) => {
    if(value<=0){
        return null;
    }
    let data = dataList[index];
    data = {
        ...data,
        p_quantity:value*1,
    }

    let list = [];
    dataList.map((d,i)=>{
        if(index==i){
            list.push(data)
        }else{
            list.push(dataList[i])
        }
    })

    dispatch({
        type : CHANGE_QUANTITY,
        dataList : list
    })
    
}

