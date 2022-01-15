/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 18:14:56 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

const TasksListHeader = () => {
  return (
    <View style={tw`p-2 flex-col justify-center items-center`}>
      <Text style={tw`text-xl font-bold capitalize  dark:text-white`}>
        tasks pending
      </Text>
    </View>
  );
};

export default TasksListHeader;
