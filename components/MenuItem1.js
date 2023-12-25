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

const MenuItem1 = ({ style }) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.calenderIcon}
        resizeMode="cover"
        source={require("../assets/calender.png")}
      />
      <Text style={styles.covidAdvisory}>Covid Advisory</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calenderIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  covidAdvisory: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "left",
    marginLeft: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MenuItem1;
