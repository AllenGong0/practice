
async function async1() {
    console.log('async1 start');
    let a = await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
    return 1
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');


function ajax(limit) {
    var data = new Date();
    var xml = new XMLHttpRequest()
    xml.open("GET", "url?name=age");
    xml.send()

    xml.open("POST", "url");
    xml.setRequestHeader("content-type", "application/text");
    xml.send("name=5&&age=20")

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            if (limit !== 0) {
                setTimeout(() => {
                    ajax(limit - 1)
                }, timeout);
            }
        } else {
            //未执行到第四步且事件超过设置时间.
        }
    }
}

ajax(5)
