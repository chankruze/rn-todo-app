import { useState } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "./components/modules/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Task from "./screens/Task";
import { TaskType } from "./types";
import { ThemeProvider } from "@shopify/restyle";
import defaultTheme from "./themes/defaultTheme";
import darkTheme from "./themes/darkTheme";
import Header from "./components/elements/Header";
import { getHeaderTitle } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/nunito/Nunito-Medium.ttf"),
    "FiraSans-Regular": require("./assets/fonts/fira/FiraSans-Regular.ttf"),
    "FiraSans-Medium": require("./assets/fonts/fira/FiraSans-Medium.ttf"),
    "FiraSans-Bold": require("./assets/fonts/fira/FiraSans-Bold.ttf"),
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
              header: ({ route, navigation, options, back }) => {
                const title = getHeaderTitle(options, route.name);

                return (
                  <Header
                    title={title}
                    leftButton={back}
                    toggleColorScheme={() => setDarkMode((prev) => !prev)}
                    goBack={navigation.goBack}
                  />
                );
              },
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
