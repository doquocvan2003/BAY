import React, { useMemo } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BottomTab5 = ({
  style,
  itemCode,
  buttonText,
  bottomTabPosition,
  bottomTabFlex,
  bottomTabMarginLeft,
  bottomTabWidth,
  iconSearchOpacity,
  searchColor,
}) => {
  const bottomTabStyle = useMemo(() => {
    return {
      ...getStyleValue("position", bottomTabPosition),
      ...getStyleValue("flex", bottomTabFlex),
      ...getStyleValue("marginLeft", bottomTabMarginLeft),
      ...getStyleValue("width", bottomTabWidth),
    };
  }, [bottomTabPosition, bottomTabFlex, bottomTabMarginLeft, bottomTabWidth]);

  const iconSearchStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", iconSearchOpacity),
    };
  }, [iconSearchOpacity]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("color", searchColor),
    };
  }, [searchColor]);

  return (
    <View style={[styles.bottomTab, style, bottomTab1Style]}>
      <Image
        style={[styles.iconSearchFlights, iconSearchFlights1Style]}
        resizeMode="cover"
        source={itemCode}
      />
      <Text style={[styles.search, search1Style]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearchFlights: {
    width: 20,
    height: 20,
    opacity: 0.8,
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

export default BottomTab5;
