/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:53:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

interface TaskProps {
  title: string;
  description?: string;
}

const Task: React.FC<TaskProps> = ({ title, description }) => {
  return (
    <View
      style={tw.style(`p-3 m-1 bg-yellow-300 rounded`, {
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
  );
};

export default Task;
