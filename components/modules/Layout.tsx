/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:13:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../elements/Header";

interface LayoutProps {
  style?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <View
      style={tw.style(
        style
        // `pt-${
        //   Platform.OS === "android" && (StatusBar.currentHeight as number) / 4
        // }`
      )}
    >
      <StatusBar />
      <Header />
      {children}
    </View>
  );
};

export default Layout;
