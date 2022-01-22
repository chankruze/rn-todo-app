/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 11:55:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import defaultTheme, { Theme } from "./defaultTheme";
import { palette } from "./palette";

const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    mainBackground: palette.grey[900],
    mainForeground: palette.white,
    primaryCardBackground: palette.grey[600],
    secondaryCardBackground: palette.grey[400],
    primaryText: palette["light-text"].primary,
    secondaryText: palette["light-text"].secondary,
  },
};

export default darkTheme;
