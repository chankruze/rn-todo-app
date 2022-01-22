/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 11:55:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import defaultTheme, { Theme } from "./defaultTheme";
import { palette } from "./palette";

const backgroundColorsDark = {
  mainBackground: palette["blue-grey"][900],
  primaryCardBackground: palette.grey[900],
  secondaryCardBackground: palette.grey[400],
  toolbarBackground: palette.grey[900],
};

const textColorsDark = {
  primaryText: palette["light-text"].primary,
  secondaryText: palette["light-text"].secondary,
  disabledText: palette["light-text"].disabled,
  toolbarText: palette.white,
};

const iconColorsDark = {
  iconActive: palette["light-icons"].active,
  iconInactive: palette["light-icons"].inactive,
};

const borderColors = {
  default: palette.grey[600],
};

const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    // override default colors
    ...backgroundColorsDark,
    ...textColorsDark,
    ...iconColorsDark,
    ...borderColors,
  },
};

export default darkTheme;
