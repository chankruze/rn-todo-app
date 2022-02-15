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
import Card from "../components/modules/Card";
import CreateTaskModal from "../components/elements/CreateTaskModal";

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  const [isCreateTaskModal, setIsCreateTaskModal] = useState<boolean>(false);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  const openTask = (payload: TaskType) => navigation.navigate("Task", payload);

  return (
    <Box flex={1} flexDirection="column" backgroundColor="mainBackground">
      <Box padding="s">
        <FlatButton
          icon="add"
          iconColor="white"
          title="new task"
          onPress={() => setIsCreateTaskModal((prev) => !prev)}
        />
      </Box>
      {/* Add task modal */}
      {isCreateTaskModal && (
        <CreateTaskModal
          close={() => setIsCreateTaskModal((prev) => !prev)}
          addTask={addTask}
        />
      )}
      {/* tasks list */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            marginLeft="s"
            marginRight="s"
            marginBottom="xs"
            marginTop="xs"
            variant="elevated"
            backgroundColor="primaryCardBackground"
            borderRadius="s"
          >
            <TaskListItem {...item} onPress={openTask} />
          </Card>
        )}
        ListEmptyComponent={TasksEmptyComponent}
        ItemSeparatorComponent={TaskSeparator}
        ListHeaderComponent={() =>
          tasks.length > 0 ? <TasksListHeader /> : null
        }
        ListFooterComponent={() =>
          tasks.length > 0 ? <TasksListFooter /> : null
        }
      />
    </Box>
  );
};

export default Home;
