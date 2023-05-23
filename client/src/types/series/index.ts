export type TargetSeries = string;
export type Series = TargetSeries[];

export interface Metric {
  index: string;
  value: number;
}

export type SeriesData = Array<Metric>;

export type TargetSeriesActual = SeriesData;

export type FeatureImportance = Record<TargetSeries, number>;

export interface TargetSeriesResults {
  predictions: SeriesData;
  featureImportance: FeatureImportance;
}

export type TargetSeriesResultsResponse = Omit<
  TargetSeriesResults,
  "featureImportance"
> & {
  feature_importance: FeatureImportance;
};

export interface TargetSeriesData {
  actual: TargetSeriesActual;
  results: TargetSeriesResults;
}
