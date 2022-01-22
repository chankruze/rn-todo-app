/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 11:54:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { createTheme } from "@shopify/restyle";
import { spacing } from "./spacing";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { textVariants } from "./textVariants";
import { cardVariants } from "./cardVariants";

const defaultTheme = createTheme({
  spacing,
  colors,
  breakpoints,
  textVariants,
  cardVariants,
});

export type Theme = typeof defaultTheme;
export default defaultTheme;
