/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 20:24:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { useState } from "react";
import { FlatList } from "react-native";
import { data } from "../fakeData";
import { TaskType } from "../types";
import TaskListItem from "../components/elements/TaskListItem";
import TasksEmptyComponent from "../components/elements/TasksEmptyComponent";
import TaskSeparator from "../components/elements/TaskSeparator";
import TasksListFooter from "../components/elements/TasksListFooter";
import TasksListHeader from "../components/elements/TasksListHeader";
import FlatButton from "../components/elements/FlatButton";
import Box from "../components/modules/Box";

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  const openTask = (payload: TaskType) => navigation.navigate("Task", payload);

  return (
    <Box
      padding="s"
      flex={1}
      flexDirection="column"
      backgroundColor="mainBackground"
    >
      <FlatButton
        icon="add"
        iconColor="white"
        title="new task"
        // TODO: Open NewTask Modal
        onPress={() => console.log("new task added")}
      />
      {/* tasks list */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskListItem {...item} onPress={openTask} />}
        ListEmptyComponent={TasksEmptyComponent}
        ItemSeparatorComponent={TaskSeparator}
        ListHeaderComponent={TasksListHeader}
        ListFooterComponent={TasksListFooter}
      />
    </Box>
  );
};

export default Home;
