import { useState } from "react";
import { Button, ScrollView, Text } from "react-native";
import Task from "./components/elements/Task";
import Layout from "./components/modules/Layout";
import { TaskType } from "./types";
import { data } from "./fakeData";

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  return (
    <Layout>
      <ScrollView>
        {tasks.length > 0 &&
          tasks.flatMap((task, _idx) => <Task key={_idx} {...task} />)}
      </ScrollView>
    </Layout>
  );
}
