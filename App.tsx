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
import tw, { useAppColorScheme, useDeviceContext } from "twrnc";
import Header from "./components/elements/Header";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Layout>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity onPress={toggleColorScheme}>
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
  );
}
