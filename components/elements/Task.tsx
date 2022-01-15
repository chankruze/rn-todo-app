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
        style={tw.style(`p-3 dark:bg-black border-gray-700 rounded`, {
          borderStyle: "dashed",
          borderWidth: 1,
        })}
      >
        {/* ttitle */}
        <Text
          style={tw.style(`text-lg text-black dark:text-white`, {
            fontFamily: "Roboto-Bold",
          })}
        >
          {title}
        </Text>
        {/* description */}
        {description && (
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={tw.style(`text-gray-900 dark:text-gray-400`, {
              fontFamily: "Poppins-Regular",
            })}
          >
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
