import { TargetSeries } from "types/series";
import { PlaceholderCss } from "./SeriesChart.styles";

interface Props {
  children: JSX.Element;
  targetSeries: TargetSeries | null;
}

function SeriesChart({
  targetSeries,
  children
}: Props): JSX.Element {
  if (!targetSeries) {
    return <PlaceholderCss>Select series first</PlaceholderCss>;
  }

  return children;
}

export default SeriesChart;
