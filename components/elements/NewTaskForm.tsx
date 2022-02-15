/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Jan 24 2022 23:48:32 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { Formik, ErrorMessage } from "formik";
import { TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Box from "../modules/Box";
import Text from "../modules/Text";
import FlatButton from "./FlatButton";
import ErrorComponent from "./ErrorComponent";
import * as yup from "yup";
import { customAlphabet } from "nanoid/non-secure";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

const initialValues = {
  id: () => nanoid(),
  title: "",
  description: "",
  completed: false,
};

const taskValidationSchema = yup.object().shape({
  id: yup.string().required("Id is required"),
  title: yup.string().required("Title is Required"),
  description: yup
    .string()
    .min(8, ({ min }) => `Description must be at least ${min} characters`)
    .required("Description is required"),
  completed: yup.boolean().default(false),
});

const NewTaskForm = ({ addTask, close }) => {
  const onSubmit = (values: any) => {
    addTask(values);
    close();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={true}
      validationSchema={taskValidationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
        isSubmitting,
        errors,
      }) => (
        <Box>
          {/* Title */}
          <Box borderRadius="xs" padding="s">
            <Text color="primaryText" fontSize={20} variant="subheader">
              Title
            </Text>
            <TextInput
              placeholder="Task title"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              style={{
                padding: 6,
                borderBottomWidth: 2,
                borderBottomColor: "#16a34a",
                marginTop: 8,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                fontSize: 18,
                backgroundColor: "#fff",
              }}
            />
            <ErrorMessage name="title" component={ErrorComponent} />
          </Box>
          {/* Description */}
          <Box borderRadius="xs" padding="s">
            <Text color="primaryText" fontSize={20} variant="subheader">
              Description
            </Text>
            <TextInput
              multiline
              placeholder="Task description"
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              style={{
                padding: 6,
                borderBottomWidth: 2,
                borderBottomColor: "#16a34a",
                marginTop: 8,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                fontSize: 18,
                backgroundColor: "#fff",
              }}
            />
            <ErrorMessage name="description" component={ErrorComponent} />
          </Box>
          {/* status */}
          <Box padding="s" flexDirection="row" alignItems="center">
            <BouncyCheckbox
              // TODO: bind with formik
              onPress={(isChecked: boolean) => {}}
            />
            <Text variant="body">completed ?</Text>
          </Box>
          {/* submit button */}
          <Box padding="s">
            <FlatButton
              icon="done"
              iconColor="white"
              title="Submit"
              onPress={handleSubmit}
              disabled={!(isValid && dirty) || isSubmitting}
            />
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default NewTaskForm;
