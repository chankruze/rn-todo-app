/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:13:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { StatusBar } from "react-native";
import Box from "./Box";

interface LayoutProps {
  style?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <Box flexDirection="column" flex={1}>
      <StatusBar />
      {children}
    </Box>
  );
};

export default Layout;
