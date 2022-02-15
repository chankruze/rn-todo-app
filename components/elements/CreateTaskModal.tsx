/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Jan 23 2022 15:27:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Modal, TouchableOpacity } from "react-native";
import Box from "../modules/Box";
import { MaterialIcons } from "@expo/vector-icons";
import NewTaskForm from "./NewTaskForm";

const CreateTaskModal = ({ close, addTask }) => {
  return (
    <Modal visible={true}>
      <Box
        padding="s"
        flex={1}
        flexDirection="column"
        backgroundColor="mainBackground"
      >
        <Box alignSelf="flex-end">
          <TouchableOpacity onPress={close}>
            <Box backgroundColor="danger" borderRadius="xl" padding="xs">
              <MaterialIcons name="close" size={24} color="white" />
            </Box>
          </TouchableOpacity>
        </Box>
        <NewTaskForm addTask={addTask} close={close} />
      </Box>
    </Modal>
  );
};

export default CreateTaskModal;
