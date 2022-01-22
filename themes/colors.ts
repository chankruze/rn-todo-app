/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 13:34:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { palette } from "./palette";

const backgroundColors = {
  mainBackground: palette.grey[50],
  primaryCardBackground: palette.white,
  secondaryCardBackground: palette.grey[400],
  flatButtonBackground: palette.blue[500],
  toolbarBackground: palette.white,
};

const textColors = {
  primaryText: palette["dark-text"].primary,
  secondaryText: palette["dark-text"].secondary,
  disabledText: palette["dark-text"].disabled,
  taskIdText: palette.blue[500],
  flatButtonText: palette.white,
  toolbarText: palette.black,
};

const iconColors = {
  iconActive: palette["dark-icons"].active,
  iconInactive: palette["dark-icons"].inactive,
};

const borderColors = {
  default: palette.grey[600],
};

export const colors = {
  ...backgroundColors,
  ...textColors,
  ...iconColors,
  ...borderColors,
};
