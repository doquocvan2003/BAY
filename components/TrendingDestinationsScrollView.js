import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import DestinationCard from "./DestinationCard";
import DestinationCard1 from "./DestinationCard1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TrendingDestinationsScrollView = () => {
  return (
    <View style={styles.trendingDestinations}>
      <View style={styles.trendingHeader}>
        <Text style={styles.trendingDestinations1}>Trending Destinations</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView
        style={styles.trendingCardsView}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.trendingCardsViewContent}
      >
        <View style={styles.trandingCardsRow}>
          <DestinationCard destinationTitle="Boracay" />
          <DestinationCard1
            destinationImage={require("../assets/destination-image11.png")}
            baros="Baros"
            maldives="Maldives"
            d6N="7D6N"
            destinationCardWidth={151}
          />
          <DestinationCard1
            destinationImage={require("../assets/destination-image21.png")}
            baros="Bali"
            maldives="Indonesia"
            d6N="3D2N"
            destinationCardWidth="unset"
          />
          <DestinationCard1
            destinationImage={require("../assets/destination-image31.png")}
            baros="Palawan"
            maldives="Philippines"
            d6N="3D2N"
            destinationCardWidth={151}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  trendingCardsViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trendingDestinations1: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorCornflowerblue,
    textAlign: "left",
  },
  trendingHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  trandingCardsRow: {
    flexDirection: "row",
  },
  trendingCardsView: {
    width: "100%",
    marginTop: 14,
    alignSelf: "stretch",
  },
  trendingDestinations: {
    marginTop: 30,
    alignSelf: "stretch",
  },
});

export default TrendingDestinationsScrollView;
