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
import { TaskType } from "../../types";

interface TaskListItemProps {
  id: number;
  title: string;
  description?: string;
  onPress: (task: TaskType) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress({ id, title, description } as TaskType)}
    >
      <View
        style={tw.style(`p-3 bg-white dark:bg-black border-gray-700 rounded`, {
          borderStyle: "dashed",
          borderWidth: 1,
        })}
      >
        {/* title */}
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

export default TaskListItem;
