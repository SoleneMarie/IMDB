import {
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
      <ScrollView style={styles.mainViewStyle}>
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
          <View style={styles.rateViews}>
            <FontAwesome name="star" size={26} color="#F5C518" />
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              7.5
              <Text style={{ fontSize: 14, color: "white" }}> /10</Text>
            </Text>
            <Text style={{ color: "#878787" }}>37K</Text>
          </View>
          <View
            style={[
              styles.rateViews,
              { justifyContent: "flex-start", gap: 10 },
            ]}
          >
            <Feather name="star" size={26} color="#878787" />
            <Text style={{ color: "white", fontWeight: "bold" }}>
              RATE THIS
            </Text>
          </View>
          <View style={styles.rateViews}>
            <View style={styles.rateMetascore}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                82
              </Text>
            </View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Metascore
            </Text>
            <Text style={{ color: "#878787", fontSize: 12 }}>
              212 Critic reviews
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#191919", height: 20 }}></View>
        <View>
          <View style={styles.castTitleView}>
            <Text style={{ color: "white", fontSize: 28 }}>Cast</Text>
            <Text
              style={{ color: "#1C97FF", fontWeight: "bold", fontSize: 16 }}
            >
              SEE ALL
            </Text>
          </View>
        </View>
        <View style={{ padding: 12 }}>
          <ScrollView horizontal={true}>
            <View style={styles.scrollStars}>
              <Image
                source={require("./assets/jean-claude-donda.webp")}
                style={styles.scrollPic}
              />
              <Text numberOfLines={1} style={styles.scrollText}>
                Jean Claude Donda
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  styles.scrollText,
                  { color: "#878787", fontWeight: "400" },
                ]}
              >
                Tatischeff
              </Text>
            </View>
            <View style={styles.scrollStars}>
              <Image
                source={require("./assets/eilidh-rankin.jpeg")}
                style={styles.scrollPic}
              />
              <Text numberOfLines={1} style={styles.scrollText}>
                Eilidh Rankin
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  styles.scrollText,
                  { color: "#878787", fontWeight: "400" },
                ]}
              >
                Alice
              </Text>
            </View>
            <View style={styles.scrollStars}>
              <Image
                source={require("./assets/Robert_Duncan_McNeill.jpg")}
                style={styles.scrollPic}
              />
              <Text numberOfLines={1} style={styles.scrollText}>
                Robert Duncan McNeill
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  styles.scrollText,
                  { color: "#878787", fontWeight: "400" },
                ]}
              >
                Additionnal voices
              </Text>
            </View>

            <View style={styles.scrollStars}>
              <Image
                source={require("./assets/Tati.jpeg")}
                style={styles.scrollPic}
              />
              <Text numberOfLines={1} style={styles.scrollText}>
                Jacques Tati
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  styles.scrollText,
                  { color: "#878787", fontWeight: "400" },
                ]}
              >
                Inspiration, as himself
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.realisation}>
          <Text style={styles.realisationText}>Director</Text>
          <Text style={styles.nameRealisation}>Sylvain Chomet</Text>
          <Text style={styles.realisationText}>Writers</Text>
          <Text style={styles.nameRealisation}>
            Sylvain Chomet and Jacques Tati
          </Text>
        </View>
        <View style={{ backgroundColor: "#191919", height: 20 }}></View>
        <View
          style={{
            height: 120,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <View
              style={{
                height: 65,
                backgroundColor: "#FFFFFF",
                borderColor: "#F5C518",
                borderWidth: 8,
              }}
            >
              <View
                style={{
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Nominated for 1 Oscar
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "light" }}>
                  7 wins & 35 nominations total
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 36,
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
    justifyContent: "space-between",
    paddingRight: 14,
    paddingVertical: 12,
  },

  rateViews: {
    justifyContent: "space-between",
    height: 72,
    alignItems: "center",
    flex: 1,
  },

  rateMetascore: {
    backgroundColor: "#54A72A",
    height: 26,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  castTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: 14,
  },
  scrollStars: {
    height: 330,
    width: 160,
    marginRight: 14,
    backgroundColor: "#2A2A2A",
  },
  scrollPic: {
    height: 260,
    width: 160,
    marginBottom: 10,
  },
  scrollText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 6,
    paddingVertical: 4,
    maxWidth: 140,
  },
  realisation: {
    padding: 14,
  },

  realisationText: {
    color: "white",
    fontSize: 18,
    marginBottom: 6,
  },

  nameRealisation: {
    color: "#878787",
    fontSize: 16,
    marginBottom: 22,
  },
});
