function ajax(cb){
    var xhr = new XMLHttpRequest();
    xhr.open();
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState ==='4' || xhr.status===200){
            cb()
        }
    }
}


