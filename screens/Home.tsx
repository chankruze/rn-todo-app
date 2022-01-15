/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 20:24:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { useState } from "react";
import { FlatList, View } from "react-native";
import Task from "../components/elements/Task";
import { TaskType } from "../types";
import { data } from "../fakeData";
import TasksEmptyComponent from "../components/elements/TasksEmptyComponent";
import tw from "twrnc";
import TaskSeparator from "../components/elements/TaskSeparator";
import TasksListFooter from "../components/elements/TasksListFooter";
import TasksListHeader from "../components/elements/TasksListHeader";
import FlatButton from "../components/elements/FlatButton";

const Home = () => {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  return (
    <>
      <View style={tw`p-2`}>
        <FlatButton
          icon="add"
          iconColor="white"
          title="new task"
          // TODO: Open NewTask Modal
          onPress={() => console.log("new task added")}
        />
      </View>
      {/* tasks list */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task {...item} />}
        ListEmptyComponent={TasksEmptyComponent}
        ItemSeparatorComponent={TaskSeparator}
        ListHeaderComponent={TasksListHeader}
        ListFooterComponent={TasksListFooter}
        style={tw`p-2`}
      />
    </>
  );
};

export default Home;
