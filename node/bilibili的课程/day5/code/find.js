Array.prototype.myFind = (conditions)=>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(conditions(item)){
            return this[i]
        }
        
    }
}
[1,5,2,5].myFind((item)=>{
    return item ==5
})