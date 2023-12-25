import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarLight from "../components/StatusBarLight";
import FlightCardForm from "../components/FlightCardForm";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SearchResults = () => {
  return (
    <View style={styles.searchResults}>
      <StatusBarLight
        statusBarLightBackgroundColor="#fff"
        statusBarLightAlignSelf="unset"
        statusBarLightWidth={375}
        timeFontFamily="Roboto-Bold"
      />
      <ScrollView
        style={styles.searchResultsBody}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.searchResultsBodyContent}
      >
        <View style={[styles.listHeader, styles.viewFrameFlexBox]}>
          <Text style={styles.resultsFound}>35 results found</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.listItems}>
          <FlightCardForm
            image2={require("../assets/image-21.png")}
            unitedAirlines="United Airlines"
            hr40min="01 hr 40min"
            prop="$1128"
            buttonPrimaryTop={12}
            buttonPrimaryHeight={8}
            propColor="#191919"
            propFontFamily="Inter-Regular"
            propColor1="#bbb"
            propPaddingVertical={10}
            propFontWeight1="600"
            propFontFamily1="Inter-SemiBold"
          />
          <FlightCardForm
            image2={require("../assets/image-21.png")}
            unitedAirlines="United Airlines"
            hr40min="02 hr 10min"
            prop="$1420"
            buttonPrimaryTop={12}
            buttonPrimaryHeight={8}
            propColor="#191919"
            propFontFamily="Inter-Regular"
            propColor1="#bbb"
            propFontWeight="unset"
            propWidth="unset"
            propPaddingVertical="unset"
            propFontWeight1="600"
            propFontFamily1="Inter-SemiBold"
          />
          <FlightCardForm
            image2={require("../assets/image-3.png")}
            unitedAirlines="Asiana Airlines"
            hr40min="02 hr 38min"
            prop="$1550"
            buttonPrimaryTop={9}
            buttonPrimaryHeight={15}
            propColor="#191919"
            propFontFamily="Inter-Regular"
            propColor1="#bbb"
            propFontWeight="unset"
            propWidth="unset"
            propPaddingVertical="unset"
            propFontWeight1="600"
            propFontFamily1="Inter-SemiBold"
          />
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.groupChildLayout}>
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <Image
                      style={styles.image4Icon}
                      resizeMode="cover"
                      source={require("../assets/image-4.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.lufthansaAirlines,
                      styles.economyClassSpaceBlock,
                    ]}
                  >
                    Lufthansa Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr15min, styles.textSpaceBlock]}>
                    03 hr 15min
                  </Text>
                </View>
              </View>
              <View style={[styles.group13Parent, styles.line3IconSpaceBlock]}>
                <View>
                  <Text style={styles.sin1}>SIN</Text>
                  <Text style={styles.singapore}>Singapore</Text>
                </View>
                <View style={[styles.line2Parent, styles.viewFrameFlexBox]}>
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
                  <Text style={styles.sin1}>LAX</Text>
                  <Text style={styles.singapore}>Los Angeles</Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameContainer, styles.line3IconSpaceBlock]}>
                <View style={[styles.frameView, styles.viewFrameFlexBox]}>
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.economyClass, styles.hr15minTypo]}>
                      Economy Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={styles.from}>From</Text>
                    <Text style={[styles.text, styles.textTypo]}>$1650</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary, styles.parentFlexBox]}>
                  <Text style={[styles.viewDetails, styles.textTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <FlightCardForm
            image2={require("../assets/image-3.png")}
            unitedAirlines="Asiana Airlines"
            hr40min="03 hr 38min"
            prop="$450"
            buttonPrimaryTop={9}
            buttonPrimaryHeight={15}
            propColor="#555"
            propFontFamily="Inter-Light"
            propColor1="#7e8a97"
            propFontWeight="300"
            propWidth={48}
            propPaddingVertical="unset"
            propFontWeight1="500"
            propFontFamily1="Inter-Medium"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  group4: {
    backgroundColor: "#fff",
  },
  searchResultsBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFrameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  sinTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  july2022Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  groupChildLayout: {
    width: 48,
    height: 32,
  },
  economyClassSpaceBlock: {
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
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
  },
  hr15minTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  textTypo: {
    lineHeight: 24,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  resultsFound: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  vectorIcon: {
    height: 14,
    width: 16,
  },
  listHeader: {
    paddingBottom: 11,
    alignSelf: "stretch",
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
  image4Icon: {
    top: 11,
    left: 4,
    width: 40,
    height: 10,
    position: "absolute",
  },
  lufthansaAirlines: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr15min: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    color: Color.colorLightslategray,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_xs,
    alignSelf: "stretch",
  },
  sin1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorCornflowerblue,
    textAlign: "left",
  },
  singapore: {
    marginTop: 4,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
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
    marginLeft: 18,
    flex: 1,
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
    marginTop: 14,
    alignSelf: "stretch",
    width: "100%",
  },
  chairIcon: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  economyClass: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.black,
  },
  chairParent: {
    flexDirection: "row",
  },
  from: {
    color: Color.colorSilver,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    width: 32,
  },
  text: {
    marginLeft: 4,
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  frameView: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  viewDetails: {
    color: Color.colorWhite,
    width: 120,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameContainer: {
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_xs,
  },
  flightCard: {
    borderRadius: Border.br_5xs,
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
    backgroundColor: Color.colorWhite,
  },
  flightCardHolder: {
    paddingBottom: Padding.p_4xs,
    alignSelf: "stretch",
  },
  listItems: {
    alignSelf: "stretch",
  },
  searchResultsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  searchResults: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchResults;
