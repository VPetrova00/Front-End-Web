function sumElementsInArray(array) {
    let sum = 0;
    //first solution
    /*for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }*/

    //second solution
    sum = array.reduce((num1, num2) => num1 + num2, 0);

    //console.log(sum);
    return sum;
}

sumElementsInArray([10, 5, 13, 18, 51]);
sumElementsInArray([20, 10, 26, 36, 102]);