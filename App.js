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
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainViewStyle}>
        <View style={styles.greyViewStyle}>
          <Image
            source={require("./assets/logo-imdb.png")}
            style={styles.logoStyle}
          />
        </View>
        <Text style={styles.mainTitle}>The Illusionist</Text>
        <Text style={styles.subTitle}>Original title : L'illusionniste</Text>
        <View style={styles.menuView}>
          <Text style={{ color: "#878787" }}>2010</Text>
          <Text style={{ color: "#878787" }}>PG-7</Text>
          <Text style={{ color: "#878787" }}>1h 20min</Text>
          <Text style={{ color: "white" }}>Animation, Drama, Fantasy</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 18 }}>
            <Image
              source={require("./assets/affiche.webp")}
              style={{ height: 180, width: 120 }}
            />
          </View>
          <View>
            <View
              style={{
                width: 200,
                paddingVertical: 18,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  lineHeight: 20,
                  marginBottom: 12,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                A French illusionist finds himself out of work and travels to
                Scotland, where he meets a young woman. Their ensuing adevnture
                changes both their lives forever.
              </Text>
              <TouchableOpacity style={styles.watchlistButton}>
                <Text style={{ fontWeight: "bold" }}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ratingMenu}>
          <View>
            <FontAwesome name="star" size={24} color="#F5C518" />
            <Text>8.6/10</Text>
          </View>
          <View>
            <Feather name="star" size={24} color="#878787" />
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    backgroundColor: "#202020",
    flex: 1,
  },

  greyViewStyle: {
    backgroundColor: "#393939",
    height: 60,
    justifyContent: "center",
    padding: 10,
  },

  logoStyle: {
    width: 60,
    height: 40,
  },

  mainTitle: {
    color: "white",
    fontSize: 34,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  subTitle: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    color: "#878787",
    fontSize: 14,
  },
  menuView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  watchlistButton: {
    height: 30,
    width: 220,
    backgroundColor: "#F5C518",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    borderRadius: 5,
    margin: 0,
  },

  ratingMenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
