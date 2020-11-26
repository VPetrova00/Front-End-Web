function addCurrentDate() {
    let array = [];
    let currentDate = new Date();
    let res =  currentDate.getDate() + "." + (currentDate.getMonth() + 1)
        + "." + currentDate.getFullYear() + " "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    array.push(res);

    console.log(array);
}

addCurrentDate();