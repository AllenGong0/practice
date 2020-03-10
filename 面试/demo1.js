function father(){
    this.name = 'father';
}
father.say = ()=>{
    console.log(this);
}
function son(){
    father.call(this)
    this.age = 20;
}
function extend(source,target){
    let o1 = {};
    o1.__prototype = target.prototype;
    // let o1 = Object.create(target.prototype);
    source.prototype = o1;
}
extend(son,father);
son.say()
father.say()