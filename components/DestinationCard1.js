import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DestinationCard1 = ({
  destinationImage,
  baros,
  maldives,
  d6N,
  destinationCardWidth,
}) => {
  const destinationCardStyle = useMemo(() => {
    return {
      ...getStyleValue("width", destinationCardWidth),
    };
  }, [destinationCardWidth]);

  return (
    <View style={[styles.destinationCard, destinationCardStyle]}>
      <Image
        style={styles.destinationImageIcon}
        resizeMode="cover"
        source={destinationImage}
      />
      <View style={styles.details}>
        <View>
          <Text style={styles.baros}>{baros}</Text>
          <Text style={[styles.maldives, styles.d6nTypo]}>{maldives}</Text>
        </View>
        <View style={styles.duration}>
          <Text style={[styles.d6n, styles.d6nTypo]}>{d6N}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  d6nTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  destinationImageIcon: {
    borderRadius: Border.br_11xs,
    width: 131,
    height: 90,
  },
  baros: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  maldives: {
    color: Color.colorLightslategray,
    marginTop: 1,
  },
  d6n: {
    color: Color.colorDimgray_100,
  },
  duration: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
  },
  details: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row",
  },
  destinationCard: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 151,
    padding: Padding.p_3xs,
    marginLeft: 10,
  },
});

export default DestinationCard1;
