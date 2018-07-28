function numbersPrint(number) {
    console.log(number);
    if (number > 0) {
        numbersPrint(number - 1);
    }
}

numbersPrint(10);