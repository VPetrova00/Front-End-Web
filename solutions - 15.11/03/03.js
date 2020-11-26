function filterArray(array) {
    let filteredArray = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current % 2 === 0) {
            filteredArray[index] = current;
            index++;
        }
    }

    //console.log(filteredArray);
    return filteredArray;
}

filterArray([10, 5, 13, 18, 51]);