import { Chart, ChartSettings } from "../charts";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  [Chart.PLOTTER]: ChartSettings;
  [Chart.BARCHART]: ChartSettings;
}

export type ThemeProperty = keyof Theme;
export type ThemePropertyValue = Partial<Theme[ThemeProperty]>;
