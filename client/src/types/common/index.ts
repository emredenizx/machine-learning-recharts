export interface Option<T> {
  value: T;
  label: T;
}

export enum Selectors {
  TOGGLE = "TOGGLE",
  SELECT = "SELECT",
  COLOR_PICKER = "COLOR_PICKER",
  NUMBER_SPINNER = "NUMBER_SPINNER",
}
