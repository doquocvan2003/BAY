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

const MenuItem = ({ style }) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.rateIcon}
        resizeMode="cover"
        source={require("../assets/rate.png")}
      />
      <Text style={styles.rateUs}>Rate us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  rateUs: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "left",
    marginLeft: 16,
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default MenuItem;
