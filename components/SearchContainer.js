import React, { useMemo } from "react";
import {
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
const SearchContainer = ({
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
    <View style={[styles.bottomTab, bottomTabStyle]}>
      <Image
        style={[styles.iconSearch, iconSearchStyle]}
        resizeMode="cover"
        source={itemCode}
      />
      <Text style={[styles.search, searchStyle]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearch: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorLightslategray,
    textAlign: "center",
    marginTop: 14,
  },
  bottomTab: {
    alignItems: "center",
  },
});

export default SearchContainer;
