import { Chart, ChartSettingSelector } from "types/charts";
import { useTheme } from "styled-components";
import ChartSetting from "../Setting/ChartSetting.component";

interface Props {
  selectors: ChartSettingSelector[];
  chartType: Chart;
}

function ChartSettingsList({
  selectors,
  chartType
}: Props): JSX.Element {
  const theme = useTheme();
  const themeSettings = theme[chartType];

  return (
    <>
      {
        selectors.map((selector) => {
          const { id, label, type, options, linkedSelectors } = selector;
          return (
            <ChartSetting
              id={id}
              label={label}
              type={type}
              value={themeSettings[id]}
              options={options}
              chartType={chartType}
              linkedSelectors={linkedSelectors}
            />
          );
        })
      }
    </>
  );
}

export default ChartSettingsList;
