import { observable, computed } from 'mobx';
// import { observable, computed } from 'rxjs';

class mobxDemo{
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

let b = new mobxDemo();
console.log(b);
// var appState = observable({
//     timer: 0
// });

