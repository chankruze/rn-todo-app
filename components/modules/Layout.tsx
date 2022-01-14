/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:13:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { StatusBar, View } from "react-native";
import tw from "twrnc";
import Header from "../elements/Header";

interface LayoutProps {
  style?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <View style={tw`flex-col h-full`}>
      <StatusBar />
      <Header />
      <View style={tw.style(style, `flex-1`)}>{children}</View>
    </View>
  );
};

export default Layout;
