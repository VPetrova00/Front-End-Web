class Person {
    constructor(name, planet = "Земя") {
        this.name = name;
        this.planet = planet;
    }

    print() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }
}

let person1 = new Person("Марк");
let person2 = new Person("Мими", "Марс");
let person3 = new Person("Ник", "Юпитер");

person1.print();
person2.print();
person3.print();