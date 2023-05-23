export const formatMetric = (metric: number): number =>
  parseFloat(metric.toFixed(2));

export function isObject(value: unknown): boolean {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
