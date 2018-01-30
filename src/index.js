function randomNum(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = randomNum;
