const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const csv = require("csv-parser");
const utils = require('./utils.js');

const PORT = 5000;

const data = [];
fs.createReadStream("series.csv")
    .pipe(csv())
    .on("data", (row) => data.push(row))
    .on("end", () => console.log("Data is loaded!"));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/series", (req, res) => {
    const series = utils.getSeries(data);
    res.send(series)
});

app.get("/actual/:targetSeries", (req, res) => {
    const targetSeries = req.params.targetSeries;
    const series = data.slice(1);
    const targetSeriesData =
        series
            .map(row => ({
                index: row.index,
                value: Number(row[targetSeries])
            }));

    res.send(targetSeriesData);
});

app.get("/results/:targetSeries", (req, res) => {
    const series = utils.getSeries(data);
    const targetSeries = req.params.targetSeries;

    const predictions = utils.generatePredictions(data, targetSeries);
    const feature_importance = utils.generateFeatureImportance(series, targetSeries);

    const response = {
        predictions,
        feature_importance,
    };

    res.send(response);
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
