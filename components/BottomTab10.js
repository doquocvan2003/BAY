import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const BottomTab10 = ({ style }) => {
  return <View style={[styles.bottomTab, style]} />;
};

const styles = StyleSheet.create({
  searchTypo: {
    marginTop: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  bottomTab: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 375,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_base,
    alignItems: "center",
  },
});

export default BottomTab10;
