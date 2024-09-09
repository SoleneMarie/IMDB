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
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          backgroundColor: "black",
          flex: 1,
        }}
      >
        <View
          style={{ backgroundColor: "grey", height: 60, alignItems: "center" }}
        >
          <Image src={IMDB} style={styles.logoStyle} />
          <Text style={{ color: "white" }}>Coucou</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 60,
    height: 40,
    color: "pink",
  },
});
