/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 18:11:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import Box from "../modules/Box";
import Text from "../modules/Text";
import Divider from "./Divider";

const TasksListFooter = () => {
  return (
    <Box height={64} flexDirection="row" alignItems="center">
      <Divider />
      <Text color="disabledText">The End</Text>
      <Divider />
    </Box>
  );
};

export default TasksListFooter;
