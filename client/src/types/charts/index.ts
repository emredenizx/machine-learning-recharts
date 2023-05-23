import { IconType } from "recharts/types/component/DefaultLegendContent";
import { Option, Selectors } from "../common";

export enum Chart {
  PLOTTER = "plotter",
  BARCHART = "barChart",
}

export const ChartSetting = {
  [Selectors.TOGGLE]: "Toggle",
  [Selectors.SELECT]: "Select",
  [Selectors.COLOR_PICKER]: "Color",
  [Selectors.NUMBER_SPINNER]: "Numeric",
};

export type Toggle = boolean;
export type Numeric = number;
export type Color = string;
export type Select = IconType;

export interface ChartSettings {
  legend: Toggle;
  legendIconType: IconType;
  legendIconSize: Numeric;
  grid: Toggle;
  gridDashX: Numeric;
  gridDashY: Numeric;
  gridStroke: Color;
  tooltip: Toggle;
}

export interface ChartSettingSelector {
  id: keyof ChartSettings;
  label: string;
  type: Selectors;
  value: Toggle | Select | Color | Numeric;
  options?: Array<Option<Select>>;
  linkedSelectors?: ChartSettingSelector[];
}
