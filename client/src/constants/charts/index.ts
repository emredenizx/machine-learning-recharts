/* eslint-disable indent */
import { Chart, ChartSettingSelector } from "types/charts";
import { Selectors } from "types/common";
import { defaultTheme } from "theme/index";
import { legendIcons } from "./legendIcons";

const withChart =
  (chart: Chart) =>
  (selector: Omit<ChartSettingSelector, "value">): ChartSettingSelector => ({
    ...selector,
    value: defaultTheme[chart][selector.id],
  });

export function createSelectors(chart: Chart): ChartSettingSelector[] {
  const createOne = withChart(chart);

  const selectors = [
    createOne({
      id: "legend",
      label: "Legend",
      type: Selectors.TOGGLE,
      linkedSelectors: [
        createOne({
          id: "legendIconType",
          label: "Icon type",
          type: Selectors.SELECT,
          options: legendIcons,
        }),
        createOne({
          id: "legendIconSize",
          label: "Icon size",
          type: Selectors.NUMBER_SPINNER,
        }),
      ],
    }),
    createOne({
      id: "grid",
      label: "Grid",
      type: Selectors.TOGGLE,
      linkedSelectors: [
        createOne({
          id: "gridStroke",
          label: "Stroke",
          type: Selectors.COLOR_PICKER,
        }),
        createOne({
          id: "gridDashX",
          label: "Dash X",
          type: Selectors.NUMBER_SPINNER,
        }),
        createOne({
          id: "gridDashY",
          label: "Dash Y",
          type: Selectors.NUMBER_SPINNER,
        }),
      ],
    }),
    createOne({
      id: "tooltip",
      label: "Tooltip",
      type: Selectors.TOGGLE,
    }),
  ];

  return selectors;
}
