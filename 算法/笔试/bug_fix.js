const obj = {
    name: " jsCoder",
    skill: ["es6", "react", "angular"],
    say: function () {
        let that = this
        for (var i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(function (data) {
                console.log('No.' + (Number(data)+1) + that.name);
                console.log(that.skill[data]);
                console.log('--------------------------');
            }, 0,i);
            console.log(i+1);
        }
    }
};
obj.say();