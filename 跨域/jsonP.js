function jsonp(url,jsonpCallback,success) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'type/javascript';
    script.async = true;
    window[jsonpCallback] = function (data) {
        success && success(data)
    }
}
jsonp('www',function () {
    return 'aaa'
},function (data) {

})
