/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jan 13 2022 17:43:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Text, View } from "react-native";
import tw from "twrnc";

const TasksEmptyComponent = () => {
  return (
    <View style={tw`flex-row justify-center items-center`}>
      <Text style={tw`capitalize font-bold text-xl`}>No tasks, yey!</Text>
    </View>
  );
};

export default TasksEmptyComponent;
