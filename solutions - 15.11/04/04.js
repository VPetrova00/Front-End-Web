function hasSmallerThan10(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            //console.log("true");
            return true;
        }
    }

    //console.log("false");
    return false;
}

hasSmallerThan10([10, 5, 13, 18, 51]);
hasSmallerThan10([20, 10, 26, 36, 102]);