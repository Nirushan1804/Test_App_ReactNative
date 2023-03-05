import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

  export default function App() {
  return (
    <View style = {styles.container}>
      <Text style={{fontSize:50}}>Hello world</Text>
      <StatusBar style="auto"/>
      <ClassComponent/>
      <FunctionComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
