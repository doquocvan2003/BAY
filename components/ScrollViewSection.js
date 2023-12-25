import * as React from "react";
import { StyleSheet, View } from "react-native";
import OffersSectionContainer from "./OffersSectionContainer";

const ScrollViewSection = () => {
  return (
    <View style={styles.offersSectionWrapper}>
      <OffersSectionContainer
        offerImage={require("../assets/offer-image4.png")}
        offerImage1={require("../assets/offer-image11.png")}
        propMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offersSectionWrapper: {
    width: 343,
    marginTop: 20,
  },
});

export default ScrollViewSection;
