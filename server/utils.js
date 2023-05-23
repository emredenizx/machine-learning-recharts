const getSeries = (data) => Object.keys(data[0]).slice(1);

const generatePredictions = (series, targetSeries) => {
    const predictions =
        series
            .map(row => ({
                index: row.index,
                value: row[targetSeries] * (Math.random() + 0.5)
            }));

    return predictions;
};

const generateFeatureImportance = (series, targetSeries) => {
    const featureImportance = {};
    let remaining = 1;

    for (let sample of series) {
        if (sample === targetSeries) continue;

        const importance = Math.random() / 3;
        if (importance < remaining) {
            featureImportance[sample] = importance;
            remaining = remaining - importance;
        } else {
            featureImportance[sample] = remaining;
            remaining = 0;
        }
    }

    return featureImportance;
};

module.exports = {
    generatePredictions,
    generateFeatureImportance,
    getSeries
};