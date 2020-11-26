function arrayWithMultiples(array) {
    let resultArray = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            resultArray[index] = array[i];
            index++;
        }
    }

    //console.log(resultArray);
    return resultArray;
}

arrayWithMultiples([10, 5, 13, 18, 51]);
arrayWithMultiples([20, 10, 26, 36, 102]);