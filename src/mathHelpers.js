const averageTestScore = testScores => {
    let totalSumScores = 0;
    let numberOfScore = 0;

    for (let i = 0; i < testScores.length; i++) {
        totalSumScores += testScores[i];
        numberOfScore++;
    }

    return totalSumScores / numberOfScore;
}

module.exports = averageTestScore;