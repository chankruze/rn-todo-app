/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 22 2022 13:37:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

export const cardVariants = {
  primary: {
    backgroundColor: "primaryCardBackground",
    shadowOpacity: 0.3,
    padding: {
      phone: "s",
      tablet: "m",
    },
  },
  secondary: {
    backgroundColor: "secondaryCardBackground",
    shadowOpacity: 0.1,
    padding: {
      phone: "s",
      tablet: "m",
    },
  },
  elevated: {
    padding: {
      phone: "s",
      tablet: "m",
    },
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
};
