/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:08:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import AppConfig from "../../config";

const Header = () => {
  return (
    <View
      style={tw`p-4 flex-row justify-center items-center 
      bg-black`}
    >
      <Text style={tw`text-xl font-bold text-white`}>{AppConfig.APP_NAME}</Text>
    </View>
  );
};

export default Header;
