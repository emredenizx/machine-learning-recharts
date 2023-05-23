import { TargetSeriesData } from "types/series";
import { useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid
} from "recharts";
import { useTheme } from "styled-components";
import { formatMetric } from "utils";

interface Props {
  targetSeriesData: TargetSeriesData;
}

enum DataKey {
  FEATURE = "feature",
  IMPORTANCE = "importance",
}

interface Metric {
  [DataKey.FEATURE]: string;
  [DataKey.IMPORTANCE]: number;
}

function SeriesBarChart({
  targetSeriesData,
}: Props): JSX.Element {
  const theme = useTheme();
  const { barChart } = theme;

  const barChartData = useMemo(() => {
    const data: Array<Metric> = [];

    Object.entries(targetSeriesData.results.featureImportance).forEach(
      ([feature, importance]) => {
        data.push({
          [DataKey.FEATURE]: feature,
          [DataKey.IMPORTANCE]: formatMetric(importance),
        });
      }
    );
    return data;
  }, [targetSeriesData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={barChartData} layout="vertical">
        {barChart.legend && (
          <Legend
            iconType={barChart.legendIconType}
            iconSize={barChart.legendIconSize}
          />
        )}
        {barChart.grid && (
          <CartesianGrid
            stroke={barChart.gridStroke}
            strokeDasharray={`${barChart.gridDashX} ${barChart.gridDashY}`}
          />
        )}
        <YAxis interval={0} width={90} type="category" dataKey={DataKey.FEATURE} />
        <XAxis type="number" />
        {barChart.tooltip && <Tooltip />}
        <Bar dataKey={DataKey.IMPORTANCE} fill={theme.colors.primary} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SeriesBarChart;
