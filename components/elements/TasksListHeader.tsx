/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 18:14:56 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import Box from "../modules/Box";
import Text from "../modules/Text";

const TasksListHeader = () => {
  return (
    <Box
      padding="s"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text variant="subheader" textTransform="capitalize" padding="s">
        tasks pending
      </Text>
    </Box>
  );
};

export default TasksListHeader;
