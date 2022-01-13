import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`m-2 p-4 bg-red-300 flex-row rounded`}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
