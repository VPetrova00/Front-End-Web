class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    addToAmount(toAdd) {
        privateAmount(toAdd);
        return this;
    }

    reduceFromAmount(toReduce) {
        let func = privateAmount;
        func(toReduce);
        return this;
    }

    getAmount() {
        return super.getAmount() + privateAmount();
    }
}

function privateAmount() {
    let privateAmount = 0;

    return function getAmount(toAdd) {
        return privateAmount + toAdd;
    }
}

let cashAccount = new CashMethod();
console.log(cashAccount.getAmount());
cashAccount.addToAmount(100);
cashAccount.addToAmount(10).addToAmount(20).reduceFromAmount(10);
console.log(cashAccount.getAmount());
