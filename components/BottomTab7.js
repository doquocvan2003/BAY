import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BottomTab7 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconItinerary}
        resizeMode="cover"
        source={require("../assets/icon--itinerary11.png")}
      />
      <Text style={styles.search}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconItinerary: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    marginTop: 14,
  },
  bottomTab: {
    width: 61,
    alignItems: "center",
  },
});

export default BottomTab7;
