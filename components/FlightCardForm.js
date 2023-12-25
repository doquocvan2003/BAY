import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FlightCardForm = ({
  image2,
  unitedAirlines,
  hr40min,
  prop,
  buttonPrimaryTop,
  buttonPrimaryHeight,
  propColor,
  propFontFamily,
  propColor1,
  propFontWeight,
  propWidth,
  propPaddingVertical,
  propFontWeight1,
  propFontFamily1,
}) => {
  const image2IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", buttonPrimaryTop),
      ...getStyleValue("height", buttonPrimaryHeight),
    };
  }, [buttonPrimaryTop, buttonPrimaryHeight]);

  const businessClassStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const fromStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("color", propColor1),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [propFontFamily, propColor1, propFontWeight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingVertical", propPaddingVertical),
    };
  }, [propPaddingVertical]);

  const viewDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight1),
      ...getStyleValue("fontFamily", propFontFamily1),
    };
  }, [propFontWeight1, propFontFamily1]);

  return (
    <View style={styles.flightCardHolder}>
      <View style={styles.flightCard}>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <View style={styles.groupChildLayout}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={[styles.image2Icon, image2IconStyle]}
                resizeMode="cover"
                source={image2}
              />
            </View>
            <Text
              style={[styles.unitedAirlines, styles.businessClassSpaceBlock]}
            >
              {unitedAirlines}
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.fluenttimer24RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluenttimer24regular1.png")}
            />
            <Text style={[styles.hr40min, styles.textSpaceBlock]}>
              {hr40min}
            </Text>
          </View>
        </View>
        <View style={[styles.group13Parent, styles.line3IconSpaceBlock]}>
          <View>
            <Text style={styles.sin}>SIN</Text>
            <Text style={[styles.singapore, styles.singaporeTypo]}>
              Singapore
            </Text>
          </View>
          <View style={[styles.line2Parent, styles.frameParentFlexBox]}>
            <Image
              style={[styles.line2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line21.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval21.png")}
            />
            <Image
              style={styles.iconFlight}
              resizeMode="cover"
              source={require("../assets/icon--flight11.png")}
            />
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval21.png")}
            />
          </View>
          <View style={styles.group131}>
            <Text style={styles.sin}>LAX</Text>
            <Text style={[styles.singapore, styles.singaporeTypo]}>
              Los Angeles
            </Text>
          </View>
        </View>
        <Image
          style={[styles.line3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/line3.png")}
        />
        <View style={[styles.frameGroup, styles.line3IconSpaceBlock]}>
          <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
            <View style={styles.chairParent}>
              <Image
                style={styles.chairIcon}
                resizeMode="cover"
                source={require("../assets/chair.png")}
              />
              <Text
                style={[
                  styles.businessClass,
                  styles.hr40minTypo,
                  businessClassStyle,
                ]}
              >
                Business Class
              </Text>
            </View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.from, fromStyle]}>From</Text>
              <Text style={[styles.text, styles.textTypo, textStyle]}>
                {prop}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.buttonPrimary,
              styles.parentFlexBox,
              buttonPrimaryStyle,
            ]}
          >
            <Text
              style={[styles.viewDetails, styles.textTypo, viewDetailsStyle]}
            >
              View Details
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  groupChildLayout: {
    height: 32,
    width: 48,
  },
  businessClassSpaceBlock: {
    marginLeft: 8,
    textAlign: "left",
  },
  textSpaceBlock: {
    marginLeft: 4,
    textAlign: "right",
  },
  line3IconSpaceBlock: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  singaporeTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    width: 8,
    height: 8,
  },
  hr40minTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image2Icon: {
    top: 12,
    left: 6,
    width: 36,
    height: 8,
    position: "absolute",
  },
  unitedAirlines: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    marginLeft: 8,
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr40min: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    color: Color.colorLightslategray,
  },
  frameParent: {
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_xs,
    alignSelf: "stretch",
  },
  sin: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorCornflowerblue,
    textAlign: "left",
  },
  singapore: {
    marginTop: 4,
    color: Color.black,
    textAlign: "left",
  },
  line2Icon: {
    marginTop: -0.3,
    top: "50%",
    right: 8,
    left: 9,
    height: 1,
    zIndex: 0,
    position: "absolute",
  },
  ovalIcon: {
    zIndex: 1,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon1: {
    zIndex: 3,
  },
  line2Parent: {
    flex: 1,
    marginLeft: 18,
  },
  group131: {
    alignItems: "flex-end",
    marginLeft: 18,
  },
  group13Parent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  line3Icon: {
    maxHeight: "100%",
    width: "100%",
    marginTop: 14,
    alignSelf: "stretch",
  },
  chairIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  businessClass: {
    width: 85,
    color: Color.black,
    marginLeft: 8,
    textAlign: "left",
  },
  chairParent: {
    flexDirection: "row",
  },
  from: {
    color: Color.colorSilver,
    width: 32,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.black,
    marginLeft: 4,
    textAlign: "right",
  },
  frameContainer: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
  },
  viewDetails: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    justifyContent: "center",
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_xs,
  },
  flightCard: {
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
    overflow: "hidden",
    alignSelf: "stretch",
  },
  flightCardHolder: {
    paddingBottom: Padding.p_4xs,
    alignSelf: "stretch",
  },
});

export default FlightCardForm;
