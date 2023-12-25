import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import SearchContainer from "./SearchContainer";
import { Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileContainer = ({
  imageId,
  imageCode,
  imageDimensions,
  imageCode2,
  imageCodeDimensions,
  bottomTabPosition,
  bottomTabJustifyContent,
  bottomTabElevation,
  bottomTabFlex,
  bottomTabWidth,
  searchColor,
  bottomTabFlex1,
  bottomTabMarginLeft,
  bottomTabWidth1,
  searchColor1,
  bottomTabFlex2,
  bottomTabMarginLeft1,
  bottomTabWidth2,
  bottomTabFlex3,
  bottomTabMarginLeft2,
  bottomTabWidth3,
  searchColor2,
  bottomTabFlex4,
  bottomTabMarginLeft3,
  bottomTabWidth4,
  searchColor3,
}) => {
  const bottomTab1Style = useMemo(() => {
    return {
      ...getStyleValue("position", bottomTabPosition),
      ...getStyleValue("justifyContent", bottomTabJustifyContent),
      ...getStyleValue("elevation", bottomTabElevation),
    };
  }, [bottomTabPosition, bottomTabJustifyContent, bottomTabElevation]);

  const bottomTabStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", bottomTabFlex),
      ...getStyleValue("width", bottomTabWidth),
    };
  }, [bottomTabFlex, bottomTabWidth]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("color", searchColor),
    };
  }, [searchColor]);

  const bottomTabStyle1 = useMemo(() => {
    return {
      ...getStyleValue("flex", bottomTabFlex1),
      ...getStyleValue("marginLeft", bottomTabMarginLeft),
      ...getStyleValue("width", bottomTabWidth1),
    };
  }, [bottomTabFlex1, bottomTabMarginLeft, bottomTabWidth1]);

  const searchStyle1 = useMemo(() => {
    return {
      ...getStyleValue("color", searchColor1),
    };
  }, [searchColor1]);

  const bottomTabStyle2 = useMemo(() => {
    return {
      ...getStyleValue("flex", bottomTabFlex2),
      ...getStyleValue("marginLeft", bottomTabMarginLeft1),
      ...getStyleValue("width", bottomTabWidth2),
    };
  }, [bottomTabFlex2, bottomTabMarginLeft1, bottomTabWidth2]);

  const bottomTabStyle3 = useMemo(() => {
    return {
      ...getStyleValue("flex", bottomTabFlex3),
      ...getStyleValue("marginLeft", bottomTabMarginLeft2),
      ...getStyleValue("width", bottomTabWidth3),
    };
  }, [bottomTabFlex3, bottomTabMarginLeft2, bottomTabWidth3]);

  const searchStyle2 = useMemo(() => {
    return {
      ...getStyleValue("color", searchColor2),
    };
  }, [searchColor2]);

  const bottomTabStyle4 = useMemo(() => {
    return {
      ...getStyleValue("flex", bottomTabFlex4),
      ...getStyleValue("marginLeft", bottomTabMarginLeft3),
      ...getStyleValue("width", bottomTabWidth4),
    };
  }, [bottomTabFlex4, bottomTabMarginLeft3, bottomTabWidth4]);

  const searchStyle3 = useMemo(() => {
    return {
      ...getStyleValue("color", searchColor3),
    };
  }, [searchColor3]);

  return (
    <View style={[styles.bottomTab, bottomTab1Style]}>
      <SearchContainer
        itemCode={require("../assets/icon--exploreselected2.png")}
        buttonText="Explore"
        bottomTabPosition="unset"
        bottomTabFlex={1}
        bottomTabMarginLeft="unset"
        bottomTabWidth="unset"
        searchColor="#10579b"
      />
      <SearchContainer
        itemCode={require("../assets/icon--itinerary12.png")}
        buttonText="Bookings"
        bottomTabPosition="unset"
        bottomTabFlex={1}
        bottomTabMarginLeft={10}
        bottomTabWidth="unset"
        searchColor="#7e8a97"
      />
      <SearchContainer
        itemCode={require("../assets/icon--searchflights2.png")}
        buttonText="Search"
        bottomTabPosition="unset"
        bottomTabFlex={1}
        bottomTabMarginLeft={10}
        bottomTabWidth="unset"
        iconSearchOpacity={0.8}
        searchColor="#7e8a97"
      />
      <SearchContainer
        itemCode={require("../assets/icon--offers12.png")}
        buttonText="Offers"
        bottomTabPosition="unset"
        bottomTabFlex={1}
        bottomTabMarginLeft={10}
        bottomTabWidth="unset"
        searchColor="#7e8a97"
      />
      <SearchContainer
        itemCode={require("../assets/icon--userprofile11.png")}
        buttonText="Profile"
        bottomTabPosition="unset"
        bottomTabFlex={1}
        bottomTabMarginLeft={10}
        bottomTabWidth="unset"
        searchColor="#7e8a97"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default ProfileContainer;
