import { fetchData } from "api";
import {
  TargetSeriesActual,
  TargetSeriesResults,
  TargetSeriesData,
  Series,
  TargetSeries,
  TargetSeriesResultsResponse,
} from "types/series";
import { useCallback, useState, useEffect } from "react";

const useSeries = (): {
  series: Series;
  targetSeries: TargetSeries | null;
  selectTargetSeries: (targetSeries: TargetSeries) => void;
  targetSeriesData: TargetSeriesData;
} => {
  const [series, setSeries] = useState<Series>([]);
  const [targetSeries, setTargetSeries] = useState<TargetSeries | null>(null);
  const [targetSeriesData, setTargetSeriesData] = useState<TargetSeriesData>({
    actual: [],
    results: {
      predictions: [],
      featureImportance: {},
    },
  });

  const loadSeries = useCallback(async () => {
    const series = await fetchData<Series>("get", "/series");
    if (series) setSeries(series);
  }, []);

  const loadTargetData = useCallback(async (targetSeries: TargetSeries) => {
    const responses = await Promise.allSettled([
      fetchData<TargetSeriesActual>("get", `/actual/${targetSeries}`),
      fetchData<TargetSeriesResultsResponse>("get", `/results/${targetSeries}`),
    ]);

    if (responses.every(({ status }) => status === "fulfilled")) {
      const [actual, results] = responses.map(
        (response) => response.status === "fulfilled" && response.value
      ) as [TargetSeriesActual, TargetSeriesResultsResponse];

      setTargetSeriesData({
        actual,
        results: {
          ...results,
          featureImportance: results.feature_importance,
        } as TargetSeriesResults,
      });
    }
  }, []);

  const selectTargetSeries = useCallback(
    (targetSeries: TargetSeries): void => {
      setTargetSeries(targetSeries);
      loadTargetData(targetSeries);
    },
    [loadTargetData]
  );

  useEffect(() => {
    loadSeries();
  }, [loadSeries]);

  return {
    series,
    targetSeries,
    targetSeriesData,
    selectTargetSeries,
  };
};

export default useSeries;
