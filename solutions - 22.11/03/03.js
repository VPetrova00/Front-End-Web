class Item {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }

    calcPrice() {
        return this.mainPrice - (this.mainPrice * (this.discount / 100));
    }
}

function mainPrice() {
    let main = 1000;
    return main;
}

Item.prototype.mainPrice = mainPrice();

let firstItem = new Item("apple", 10);
let secondItem = new Item("bread", 5);
console.log(firstItem.calcPrice());
console.log(secondItem.calcPrice());