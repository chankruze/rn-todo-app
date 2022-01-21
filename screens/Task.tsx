/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 13:28:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import React from "react";
import { Text, View } from "react-native";
import { TaskType } from "../types";
import tw from "twrnc";
import Layout from "../components/modules/Layout";

const Task = ({ route }) => {
  const task = route.params as TaskType;

  return (
    <Layout style={tw`p-4 flex-1`}>
      <Text style={tw`text-blue-400`}>#{task.id}</Text>
      <Text style={tw`mt-2 font-bold text-xl dark:text-white`}>
        {task.title}
      </Text>
      <Text
        style={tw.style(`mt-2 text-base dark:text-gray-400`, {
          fontFamily: "Nunito-Medium",
        })}
      >
        {task.description}
      </Text>
    </Layout>
  );
};

export default Task;
