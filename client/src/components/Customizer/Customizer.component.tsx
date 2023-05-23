import { useCallback, useContext } from "react";
import { ColorPicker } from "components/Common";

import { useTheme } from "styled-components";
import { ThemeContext } from "providers/CustomizeTheme.provider";
import { Theme, ThemeProperty, ThemePropertyValue } from "types/theme";
import Section from "components/Dashboard/Section";
import { Chart } from "types/charts";
import { createSelectors } from "constants/charts";
import { CustomizerWrapper, Setting, Label } from "./Customizer.styles";
import ChartCustomizer from "./Chart";

const chartSettingSelectors = {
  [Chart.PLOTTER]: createSelectors(Chart.PLOTTER),
  [Chart.BARCHART]: createSelectors(Chart.BARCHART)
};

function Customizer(): JSX.Element {
  const { updateTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const handleUpdateTheme = useCallback((
    key: ThemeProperty,
    payload: ThemePropertyValue,
  ): void => {
    updateTheme({ key, payload });
  }, [updateTheme]);

  const onColorPick = (payload: Partial<Theme["colors"]>): void =>
    handleUpdateTheme("colors", payload);

  return (
    <CustomizerWrapper>
      <Section name="Theme">
        <Setting>
          <Label>Primary color</Label>
          <ColorPicker
            defaultColor={theme.colors.primary}
            onColorPick={(color) => onColorPick({ primary: color })}
          />
        </Setting>
        <Setting>
          <Label>Secondary color</Label>
          <ColorPicker
            defaultColor={theme.colors.secondary}
            onColorPick={(color) => onColorPick({ secondary: color })}
          />
        </Setting>
      </Section>
      <Section name="Plotter" style={{ minHeight: 450 }}>
        <ChartCustomizer
          selectors={chartSettingSelectors[Chart.PLOTTER]}
          chartType={Chart.PLOTTER}
        />
      </Section>
      <Section name="Bar chart">
        <ChartCustomizer
          selectors={chartSettingSelectors[Chart.BARCHART]}
          chartType={Chart.BARCHART}
        />
      </Section>
    </CustomizerWrapper>
  );
}

export default Customizer;
