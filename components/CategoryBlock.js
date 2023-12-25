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
const CategoryBlock = ({
  tagFlight,
  flight,
  categoryBlockPosition,
  categoryBlockWidth,
  categoryBlockMarginLeft,
}) => {
  const categoryBlockStyle = useMemo(() => {
    return {
      ...getStyleValue("position", categoryBlockPosition),
      ...getStyleValue("width", categoryBlockWidth),
      ...getStyleValue("marginLeft", categoryBlockMarginLeft),
    };
  }, [categoryBlockPosition, categoryBlockWidth, categoryBlockMarginLeft]);

  return (
    <View style={[styles.categoryBlock, categoryBlockStyle]}>
      <Image style={styles.tagFlight} resizeMode="cover" source={tagFlight} />
      <Text style={styles.flight}>{flight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagFlight: {
    width: 48,
    height: 48,
  },
  flight: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
    marginTop: 22,
  },
  categoryBlock: {
    alignItems: "center",
  },
});

export default CategoryBlock;
