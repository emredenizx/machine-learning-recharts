import { Chart, ChartSettingSelector } from "types/charts";
import { ChartCustomizerWrapper } from "./ChartCustomizer.styles";
import ChartSettingsList from "./SettingsList";

interface ChartConfiguratorProps {
  selectors: ChartSettingSelector[]
  chartType: Chart;
}

function ChartCustomizer({
  selectors,
  chartType
}: ChartConfiguratorProps): JSX.Element {
  return (
    <ChartCustomizerWrapper>
      <ChartSettingsList selectors={selectors} chartType={chartType} />
    </ChartCustomizerWrapper>
  );
}

export default ChartCustomizer;
