/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:32:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

interface FlatButtonProps {
  title: string;
  icon: any;
  iconColor?: any;
  iconSize?: any;
  onPress: any;
}

const FlatButton: React.FC<FlatButtonProps> = ({
  title,
  icon,
  iconColor = "blue",
  iconSize = 32,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={tw`py-3 px-4 flex-row justify-center items-center 
      bg-blue-500 rounded-lg`}
      onPress={onPress}
    >
      <View style={tw`mr-1`}>
        <MaterialIcons name={icon} size={iconSize} color={iconColor} />
      </View>
      <Text style={tw`text-white uppercase`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;
