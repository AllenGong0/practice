class Person {
    #a = 5;
    getA() {
        console.log(this.#a)
    }
}
// Person.#a;
let p = new Person();
p.getA();
console.log(Person.#a)