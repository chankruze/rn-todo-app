import { useState } from "react";
import { Button, FlatList, View } from "react-native";
import Task from "./components/elements/Task";
import Layout from "./components/modules/Layout";
import { TaskType } from "./types";
import { data } from "./fakeData";
import TasksEmptyComponent from "./components/elements/TasksEmptyComponent";
import tw from "twrnc";
import TaskSeparator from "./components/elements/TaskSeparator";
import TasksListFooter from "./components/elements/TasksListFooter";
import TasksListHeader from "./components/elements/TasksListHeader";
import FlatButton from "./components/elements/FlatButton";

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>(data);

  const addTask = (newTask: TaskType) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  return (
    <Layout>
      <View style={tw`p-2`}>
        <FlatButton
          icon="add"
          iconColor="white"
          title="new task"
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
    </Layout>
  );
}
