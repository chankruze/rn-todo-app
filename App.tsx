import Home from "./screens/Home";
import { useFonts } from "expo-font";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import Layout from "./components/modules/Layout";
import * as Font from "expo-font";

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Layout toggleColorScheme={toggleColorScheme}>
      <Home />
    </Layout>
  );
}
