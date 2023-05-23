import * as ChartTypes from "types/charts";
import { Selectors } from "types/common";
import { Select, Toggle, ColorPicker, NumberSpinner } from "components/Common";
import { useCallback, useContext } from "react";
import { ThemeContext } from "providers/CustomizeTheme.provider";
import { Setting, Label } from "components/Customizer/Customizer.styles";
import ChartSettingsList from "../SettingsList";
import { Wrapper } from "./ChartSetting.styles";

interface ChartSettingProps extends ChartTypes.ChartSettingSelector {
  chartType: ChartTypes.Chart;
}

function ChartSetting({
  id,
  label,
  type,
  value,
  options = [],
  linkedSelectors,
  chartType
}: ChartSettingProps): JSX.Element {
  const { updateTheme } = useContext(ThemeContext);

  const onChange = useCallback((
    newValue: typeof value
  ): void => {
    updateTheme({ key: chartType, payload: { [id]: newValue } });
  }, [chartType, id, updateTheme]);

  const selectors = {
    [Selectors.TOGGLE]: {
      ui: <Toggle
        checked={value as ChartTypes.Toggle}
        onChange={onChange}
      />,
    },
    [Selectors.SELECT]: {
      ui: <Select<ChartTypes.Select>
        selectedValue={value as ChartTypes.Select}
        onChange={onChange}
        options={options}
        menuPlacement="top"
      />,
    },
    [Selectors.COLOR_PICKER]: {
      ui: <ColorPicker
        defaultColor={value as ChartTypes.Color}
        onColorPick={onChange}
      />
    },
    [Selectors.NUMBER_SPINNER]: {
      ui: <NumberSpinner
        defaultValue={value as ChartTypes.Numeric}
        onChangeEnd={onChange}
      />,
    }
  };

  return (
    <Wrapper className="chart-setting">
      <Setting>
        <Label>{label}</Label>
        {selectors[type].ui}
      </Setting>
      {
        linkedSelectors && value && (
          <ChartSettingsList
            selectors={linkedSelectors}
            chartType={chartType}
          />
        )
      }
    </Wrapper>
  );
}

export default ChartSetting;
