import {
  TargetSeriesData,
  Metric
} from "types/series";
import { useMemo } from "react";
import {
  LineChart, Line, CartesianGrid, Legend, ResponsiveContainer, YAxis, Tooltip
} from "recharts";
import { useTheme } from "styled-components";
import { formatMetric } from "utils";

interface Props {
  targetSeriesData: TargetSeriesData;
}

enum DataKey {
  ACTUAL = "actual",
  PREDICTION = "prediction",
}

function SeriesPlotter({
  targetSeriesData
}: Props): JSX.Element {
  const theme = useTheme();
  const { plotter } = theme;

  const plotterData: { [key in DataKey]: number; }[] = useMemo(() => {
    if (!targetSeriesData) return [];

    const predictionsMap = new Map<Metric["index"], Metric>();

    targetSeriesData.results.predictions.forEach((prediction) =>
      predictionsMap.set(prediction.index, prediction)
    );

    return targetSeriesData.actual.map((metric) => ({
      [DataKey.ACTUAL]: formatMetric(metric.value),
      [DataKey.PREDICTION]: formatMetric(predictionsMap.get(metric.index)?.value || 0),
    })
    );
  }, [targetSeriesData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={plotterData}>
        {plotter.legend && (
          <Legend
            iconType={plotter.legendIconType}
            iconSize={plotter.legendIconSize}
          />
        )}
        {plotter.grid && (
          <CartesianGrid
            stroke={plotter.gridStroke}
            strokeDasharray={`${plotter.gridDashX} ${plotter.gridDashY}`}
          />
        )}
        {plotter.tooltip && <Tooltip />}
        <YAxis axisLine={false} />
        <Line dot={false} dataKey={DataKey.ACTUAL} stroke={theme.colors.primary} />
        <Line dot={false} dataKey={DataKey.PREDICTION} stroke={theme.colors.secondary} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SeriesPlotter;
