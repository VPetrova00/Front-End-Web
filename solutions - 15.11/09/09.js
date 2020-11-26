//second, third, fourth task about JavaScript Date
function addOneMoreDate() {
    let array = [];
    let secondArray = [];

    let currentDate = new Date();
    let resOfCurrentDate =  currentDate.getDate() + "." + (currentDate.getMonth() + 1)
        + "." + currentDate.getFullYear();

    let secondDate = new Date(2018, 12, 8, 21, 0, 0);

    array.push(resOfCurrentDate);
    secondDate.setFullYear(2018)
    secondDate.setMonth(11);
    let getDay = secondDate.getDay();
    secondDate.setMonth(12);
    array.push(secondDate.getDate() + "." + (currentDate.getMonth() + 2)
        + "." + currentDate.getFullYear());

    secondArray.push([currentDate.getDay(), new Date(currentDate.getMonth(), currentDate.getFullYear(), 0).getDate()],
        [getDay, new Date((secondDate.getMonth()), secondDate.getFullYear(), 0).getDate()]);

    console.log(array);
    console.log(secondArray);

    let thirdArray = [];

    secondDate.setMonth(11);
    secondDate.setFullYear(2018);
    let resOfSecondDate =  secondDate.getDate() + "." + (secondDate.getMonth() + 1)
        + "." + secondDate.getFullYear();
    secondDate.setMonth(12);
    secondDate.setFullYear(2018);

    let days = ["неделя", "събота", "петък", "четвъртък", "сряда", "вторник", "понеделник"];

    thirdArray[0] = "Дата: " + resOfCurrentDate +
    ", час: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() +
    ", " + days[currentDate.getDay()] + ". " + secondArray[0][1] + " дни";

    thirdArray[1] = "Дата: " + resOfSecondDate +
        ", час: " + secondDate.getHours() + ":" + secondDate.getMinutes() + ":" + secondDate.getSeconds() +
        ", " + days[secondDate.getDay()] + ". " + secondArray[1][1] + " дни";

    console.log(thirdArray);
}

addOneMoreDate();