/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 17:43:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import Box from "../modules/Box";
import AddTask from "../../assets/addTask.svg";

const TasksEmptyComponent = () => {
  return (
    <Box
      flexDirection="column"
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
      paddingVertical="xl"
    >
      <AddTask width="100%" />
    </Box>
  );
};

export default TasksEmptyComponent;
