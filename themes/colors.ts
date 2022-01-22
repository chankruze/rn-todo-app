/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 13:34:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { palette } from "./palette";

const backgroundColors = {
  mainBackground: palette.white,
  mainForeground: palette.black,
  primaryCardBackground: palette.blue[400],
  secondaryCardBackground: palette.grey[400],
};

const textColors = {
  primaryText: palette["dark-text"].primary,
  secondaryText: palette["dark-text"].secondary,
  disabledText: palette["dark-text"].disabled,
  taskIdText: palette.red[500],
};

const iconColors = {
  active: palette["dark-icons"].active,
  inactive: palette["dark-icons"].inactive,
};

export const colors = {
  ...backgroundColors,
  ...textColors,
  ...iconColors,
};
