import { Theme } from "types/theme";

export const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff0000",
  },
  plotter: {
    legend: true,
    legendIconType: "plainline",
    legendIconSize: 10,
    grid: true,
    gridDashX: 5,
    gridDashY: 10,
    gridStroke: "#eeeeee",
    tooltip: true,
  },
  barChart: {
    legend: false,
    legendIconType: "plainline",
    legendIconSize: 10,
    grid: false,
    gridDashX: 5,
    gridDashY: 10,
    gridStroke: "#eeeeee",
    tooltip: true,
  },
};
