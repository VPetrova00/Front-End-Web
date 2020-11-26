function sliceArray(array) {
    let resultArray = [];

    resultArray = array.slice(array.length - 2, array.length);

    //console.log(resultArray);
    return resultArray;
}

sliceArray([10, 5, 13, 18, 51]);
sliceArray([20, 10, 26, 36, 102]);