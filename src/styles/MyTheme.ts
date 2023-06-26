import { DefaultTheme } from "styled-components";

export interface MyTheme extends DefaultTheme {
  colors: {
    primary: string;
    darkText: string;
    secondary: string;
    white: string;
    mediumGray: string;
  };
  font: {
    family: {
      default: string;
      secondary: string;
    };
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  };
  media: {
    lteMedium: string;
  };
  spacings: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    huge: string;
    xhuge: string;
  };
}
