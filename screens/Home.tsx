/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jan 14 2022 20:24:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { useState, useEffect } from "react";
import { Button, FlatList, View } from "react-native";
import tw from "twrnc";
import { data } from "../fakeData";
import { TaskType } from "../types";
import TaskListItem from "../components/elements/TaskListItem";
import TasksEmptyComponent from "../components/elements/TasksEmptyComponent";
import TaskSeparator from "../components/elements/TaskSeparator";
import TasksListFooter from "../components/elements/TasksListFooter";
import TasksListHeader from "../components/elements/TasksListHeader";
import FlatButton from "../components/elements/FlatButton";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/elements/Header";
import Layout from "../components/modules/Layout";

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  const openTask = (payload: TaskType) => navigation.navigate("Task", payload);

  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   <MaterialIcons
      //     onPress={() => navigation.navigate("About")}
      //     name="info"
      //     size={32}
      //     style={tw`text-blue-400 dark:text-gray-400`}
      //   />
      // ),
    });
  }, []);

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
        renderItem={({ item }) => <TaskListItem {...item} onPress={openTask} />}
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
