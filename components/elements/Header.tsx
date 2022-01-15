/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:08:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import AppConfig from "../../config";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface HeaderProps {
  toggleColorScheme: any;
}

const Header: React.FC<HeaderProps> = ({ toggleColorScheme }) => {
  return (
    <View
      style={tw`p-3 flex-row justify-between items-center 
      bg-gray-50 dark:bg-black`}
    >
      <Text style={tw`text-xl font-bold text-black dark:text-white`}>
        {AppConfig.APP_NAME}
      </Text>
      <TouchableOpacity onPress={toggleColorScheme}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={28}
          style={tw`text-black dark:text-white`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
