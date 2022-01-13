/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:13:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Header from "../elements/Header";

interface LayoutProps {
  style?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <View style={style}>
      <Header />
      {children}
    </View>
  );
};

export default Layout;
