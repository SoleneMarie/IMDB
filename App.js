import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import IMDB from "./assets/logo-imdb.png";
export default function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          backgroundColor: "black",
          flex: "1",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 60,
    height: 40,
  },
});
