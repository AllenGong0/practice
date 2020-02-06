function foo(){
    setTimeout( function (){
        baz.bar()
    },100)
}

try {
    foo()
} catch (error) {
    console.log(error)
}