import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Layout from "./components/modules/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Task from "./screens/Task";
import { TaskType } from "./types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Header from "./components/elements/Header";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { useState } from "react";
import darkTheme from "./themes/darkTheme";
import defaultTheme from "./themes/defaultTheme";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);

  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/nunito/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/nunito/Nunito-Medium.ttf"),
    "Nunito-Italic": require("./assets/fonts/nunito/Nunito-Italic.ttf"),
    "Poppins-Regular": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    "FiraSans-Regular": require("./assets/fonts/fira/FiraSans-Regular.ttf"),
    "FiraSans-Medium": require("./assets/fonts/fira/FiraSans-Medium.ttf"),
    "FiraSans-Black": require("./assets/fonts/fira/FiraSans-Black.ttf"),
    "FiraSans-Bold": require("./assets/fonts/fira/FiraSans-Bold.ttf"),
    "FiraSans-ExtraBold": require("./assets/fonts/fira/FiraSans-ExtraBold.ttf"),
    "FiraSans-Italic": require("./assets/fonts/fira/FiraSans-Italic.ttf"),
    "FiraSans-Light": require("./assets/fonts/fira/FiraSans-Light.ttf"),
    "FiraSans-SemiBold": require("./assets/fonts/fira/FiraSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <Layout>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerRight: () => (
                <TouchableOpacity onPress={() => setDarkMode((prev) => !prev)}>
                  <MaterialCommunityIcons
                    name="theme-light-dark"
                    size={28}
                    style={tw`text-gray-600 dark:text-gray-200`}
                  />
                </TouchableOpacity>
              ),
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "🏠 Todo List",
              }}
            />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen
              name="Task"
              component={Task}
              options={({ route }) => ({
                title: (route.params as TaskType).title,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Layout>
    </ThemeProvider>
  );
}
