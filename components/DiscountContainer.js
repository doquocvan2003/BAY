import * as React from "react";
import { StyleSheet, View } from "react-native";
import OfferCardForm from "./OfferCardForm";

const DiscountContainer = () => {
  return (
    <View style={styles.offersList}>
      <OfferCardForm
        productCode={require("../assets/icon--heart1.png")}
        discountDescription="Get 20% discount"
        creditCardImageUrl="with your Master credit cards"
        dimensionCode={require("../assets/image-7.png")}
        transactionDescription="Use your mastercard with any transaction and get 20% discount instantly! "
        dimensionCodeImageUrl={require("../assets/vector-1.png")}
        propTop={1}
        propHeight={71}
      />
      <OfferCardForm
        productCode={require("../assets/icon--heart2.png")}
        discountDescription="25% discount"
        creditCardImageUrl="with your VISA credit or debit cards"
        dimensionCode={require("../assets/image-8.png")}
        transactionDescription="Use your VISA credit or debit card with any transaction and get 25% discount instantly! "
        dimensionCodeImageUrl={require("../assets/vector-111.png")}
        propMarginTop={14}
        propTop={0}
        propHeight={72}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offersList: {
    flex: 1,
  },
});

export default DiscountContainer;
