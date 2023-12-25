import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarLight from "../components/StatusBarLight";
import FlightContainer from "../components/FlightContainer";
import CategoryBlock from "../components/CategoryBlock";
import TrendingDestinationsScrollView from "../components/TrendingDestinationsScrollView";
import OffersSectionContainer from "../components/OffersSectionContainer";
import ProfileContainer from "../components/ProfileContainer";
import { Border, Padding, Color } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <StatusBarLight
        statusBarLightBackgroundColor="#fff"
        statusBarLightAlignSelf="unset"
        statusBarLightWidth={375}
        timeFontFamily="Roboto-Bold"
      />
      <ScrollView
        style={styles.exploreMainView}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <ImageBackground
          style={[styles.parisCardIcon, styles.viewFlexBox]}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        />
        <View style={styles.exploreContent}>
          <FlightContainer />
          <ScrollView
            style={styles.categories}
            horizontal={true}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.categoriesScrollViewContent}
          >
            <CategoryBlock
              tagFlight={require("../assets/tag--flight1.png")}
              flight="Flight"
              categoryBlockPosition="unset"
              categoryBlockWidth={77}
              categoryBlockMarginLeft="unset"
            />
            <CategoryBlock
              tagFlight={require("../assets/tag--hotel.png")}
              flight="Hotels"
              categoryBlockPosition="unset"
              categoryBlockWidth={77}
              categoryBlockMarginLeft={6}
            />
            <CategoryBlock
              tagFlight={require("../assets/tag--atractions.png")}
              flight="Attractions"
              categoryBlockPosition="unset"
              categoryBlockWidth={77}
              categoryBlockMarginLeft={6}
            />
            <CategoryBlock
              tagFlight={require("../assets/tag--eats.png")}
              flight="Eats"
              categoryBlockPosition="unset"
              categoryBlockWidth={77}
              categoryBlockMarginLeft={6}
            />
            <CategoryBlock
              tagFlight={require("../assets/tag--train.png")}
              flight="Commute"
              categoryBlockPosition="unset"
              categoryBlockWidth={77}
              categoryBlockMarginLeft={6}
            />
          </ScrollView>
          <TrendingDestinationsScrollView />
          <OffersSectionContainer
            offerImage={require("../assets/offer-image2.png")}
            offerImage1={require("../assets/offer-image31.png")}
            propMarginTop={30}
          />
        </View>
      </ScrollView>
      <ProfileContainer
        imageId={require("../assets/icon--exploreselected11.png")}
        imageCode={require("../assets/icon--itinerary5.png")}
        imageDimensions={require("../assets/icon--searchflights6.png")}
        imageCode2={require("../assets/icon--offers5.png")}
        imageCodeDimensions={require("../assets/icon--userprofile5.png")}
        bottomTabPosition="unset"
        bottomTabJustifyContent="space-between"
        bottomTabElevation={15}
        bottomTabWidth={61}
        searchColor="#10579b"
        bottomTabMarginLeft="unset"
        bottomTabWidth1={61}
        searchColor1="#7e8a97"
        bottomTabMarginLeft1="unset"
        bottomTabWidth2={61}
        bottomTabMarginLeft2="unset"
        bottomTabWidth3={61}
        searchColor2="#7e8a97"
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
  categoriesScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  exploreMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  viewFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  parisCardIcon: {
    borderRadius: Border.br_5xs,
    height: 180,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_sm,
  },
  categories: {
    alignSelf: "flex-start",
    marginTop: 30,
    width: "100%",
  },
  exploreContent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  exploreMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  explore: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Explore;
