import { useState } from "react";
import { FlatList, View } from "react-native";
import Task from "./components/elements/Task";
import Layout from "./components/modules/Layout";
import { TaskType } from "./types";
import { data } from "./fakeData";
import TasksEmptyComponent from "./components/elements/TasksEmptyComponent";
import tw from "tailwind-react-native-classnames";
import TaskSeparator from "./components/elements/TaskSeparator";

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  return (
    <Layout style={tw`flex-col bg-green-100`}>
      {/* tasks list */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task {...item} />}
        ListEmptyComponent={TasksEmptyComponent}
        ItemSeparatorComponent={TaskSeparator}
        style={tw`p-2`}
      />
      {/* add button */}
    </Layout>
  );
}
