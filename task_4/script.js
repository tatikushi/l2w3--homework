let promiseTest = (a, b) => {
    return new Promise((resolve) => {
        resolve(asyncSum(a, b));
    });
};

let getResult = async (a, b) => {
    try {
        const result = await promiseTest(a, b);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};
getResult(2, 3);