import { Theme } from "types/theme";
import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
