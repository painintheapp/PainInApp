

export const addItemInRecord = (oldRecord, newRecord) => {
    if(oldRecord){
        return [newRecord, ...oldRecord]
    }
    else{
        return [newRecord]
    }
    
}

export const recordAfterUpdate = (oldData, newData) => {
    let newArray = [];
    oldData.map(Item => {
        if (Item._id === newData._id) {
            newArray.push(newData)
        } else {
            newArray.push(Item);
        }
        return Item
    })
    return newArray;
}


export const recordAfterDeleted = (oldData, newData) => {
    let newArray = [];
    oldData.map(Item => {
        if (Item._id !== newData._id) {
            newArray.push(Item);
        }
        return Item
    })
    return newArray;
}

export const changeDataStructure = (oldRecord) => {
    oldRecord.forEach(item => {
        item.laborData = [{
            'laborCharges': item.labor,
            'laborAmount': item.laborAmount
        }]
        item.otherCharges = [{
            'otherCharges': item.otherChanges,
            'otherChargesAmount': item.otherChangesAmount
        }]
        item.dataTotal = [{
            'dataTotal': item.grandTotal,

        }]
    })
}



