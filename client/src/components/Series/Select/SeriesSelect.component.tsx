import { TargetSeries, Series } from "types/series";
import { useMemo } from "react";
import { Select } from "components/Common";

interface SeriesSelectProps {
  series: Series,
  targetSeries: TargetSeries | null,
  selectTargetSeries: (targetSeries: TargetSeries) => void
}

interface Option {
  value: TargetSeries,
  label: TargetSeries
}

export function SeriesSelect({
  series,
  targetSeries,
  selectTargetSeries,
}: SeriesSelectProps): JSX.Element {
  const options: Option[] = useMemo(() => series.map((s) => ({
    value: s,
    label: s,
  })), [series]);

  const selectedValue = targetSeries || "Select...";

  return (
    <Select<TargetSeries>
      selectedValue={selectedValue}
      options={options}
      onChange={selectTargetSeries}
    />
  );
}
