/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:53:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

interface TaskProps {
  title: string;
  description?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Task: React.FC<TaskProps> = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tw.style(`p-3 bg-yellow-300 rounded`, {
          borderStyle: "dashed",
          borderWidth: 1,
        })}
      >
        {/* ttitle */}
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        {/* description */}
        {description && (
          <Text numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
