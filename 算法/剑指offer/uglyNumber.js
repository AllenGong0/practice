function GetUglyNumber_Solution(index){

    if(index === 0) return 0;
    var uglArr = [1];
    var two = 0;
    var three = 0;
    var five = 0
    for (let i = 1; i < index; i++) {
        uglArr[i] = Math.min(uglArr[two]*2,
                             uglArr[three]*3,
                             uglArr[five]*5)
        if(uglArr[i] === uglArr[two]*2){
            two++
        }
        if(uglArr[i] === uglArr[three]*3){
            three++
        }
        if(uglArr[i] === uglArr[three]*5){
            five++
        }
    }
    return uglArr[index-1]
}