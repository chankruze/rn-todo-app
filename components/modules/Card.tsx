/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Jan 23 2022 14:50:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "../../themes/defaultTheme";
import Box from "./Box";

const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);

export default Card;
