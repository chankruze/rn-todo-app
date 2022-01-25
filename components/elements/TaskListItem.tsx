/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 14:53:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { TouchableOpacity } from "react-native";
import { TaskType } from "../../types";
import Box from "../modules/Box";
import Text from "../modules/Text";

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
      <Box
        // padding="s"
        backgroundColor="primaryCardBackground"
        // borderColor="default"
        // borderWidth={1}
        // borderStyle="dashed"
        // borderRadius="s"
      >
        {/* title */}
        <Text variant="taskListItemTitle">{title}</Text>
        {/* description */}
        {description && (
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            variant="taskListItemText"
          >
            {description}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default TaskListItem;
