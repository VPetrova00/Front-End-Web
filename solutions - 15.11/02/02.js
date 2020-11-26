function multiplyArrayWithTwoAndPrint(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray[i] = 2 * array[i];
    }

    //console.log(resultArray);
    return resultArray;
}

multiplyArrayWithTwoAndPrint([10, 20, 3, 15, 100]);