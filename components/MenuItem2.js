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

const MenuItem2 = ({ style }) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.ionmailOutlineIcon}
        resizeMode="cover"
        source={require("../assets/ionmailoutline.png")}
      />
      <Text style={styles.getHelp}>Get Help</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ionmailOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  getHelp: {
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

export default MenuItem2;
