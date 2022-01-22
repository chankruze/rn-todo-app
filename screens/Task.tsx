/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 13:28:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { TaskType } from "../types";
import Layout from "../components/modules/Layout";
import Text from "../components/modules/Text";
import Box from "../components/modules/Box";

const Task = ({ route }) => {
  const task = route.params as TaskType;

  return (
    <Box backgroundColor="mainBackground" padding="m" flex={1}>
      <Text variant="taskId">#{task.id}</Text>
      <Text variant="taskTitle" marginTop="s">
        {task.title}
      </Text>
      <Text variant="taskDescription" marginTop="s">
        {task.description}
      </Text>
    </Box>
  );
};

export default Task;
