import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarLight from "../components/StatusBarLight";
import DiscountContainer from "../components/DiscountContainer";
import ProfileContainer from "../components/ProfileContainer";
import { Padding, Color } from "../GlobalStyles";

const Offers = () => {
  return (
    <View style={styles.offers}>
      <StatusBarLight
        statusBarLightBackgroundColor="#fff"
        statusBarLightAlignSelf="unset"
        statusBarLightWidth={375}
        timeFontFamily="Roboto-Bold"
      />
      <View style={[styles.offersBody, styles.viewFlexBox]}>
        <DiscountContainer />
      </View>
      <ProfileContainer
        imageId={require("../assets/icon--exploreselected5.png")}
        imageCode={require("../assets/icon--itinerary4.png")}
        imageDimensions={require("../assets/icon--searchflights5.png")}
        imageCode2={require("../assets/icon--offers11.png")}
        imageCodeDimensions={require("../assets/icon--userprofile4.png")}
        bottomTabPosition="unset"
        bottomTabJustifyContent="space-between"
        bottomTabElevation={15}
        bottomTabWidth={61}
        searchColor="#7e8a97"
        bottomTabMarginLeft="unset"
        bottomTabWidth1={61}
        searchColor1="#7e8a97"
        bottomTabMarginLeft1="unset"
        bottomTabWidth2={61}
        bottomTabMarginLeft2="unset"
        bottomTabWidth3={61}
        searchColor2="#10579b"
        bottomTabMarginLeft3="unset"
        bottomTabWidth4={61}
        searchColor3="#7e8a97"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  viewFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  offersBody: {
    paddingVertical: 19,
  },
  offers: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    flex: 1,
    width: "100%",
  },
});

export default Offers;
