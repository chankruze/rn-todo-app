/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 17:43:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import Box from "../modules/Box";
import Text from "../modules/Text";

const TasksEmptyComponent = () => {
  return (
    <Box
      flexDirection="column"
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
    >
      <Text color="primaryText">Nothing to do!</Text>
    </Box>
  );
};

export default TasksEmptyComponent;
