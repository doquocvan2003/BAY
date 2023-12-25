import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OfferCardForm = ({
  productCode,
  discountDescription,
  creditCardImageUrl,
  dimensionCode,
  transactionDescription,
  dimensionCodeImageUrl,
  propMarginTop,
  propTop,
  propHeight,
}) => {
  const offerCardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const image7IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <View style={[styles.offerCard, offerCardStyle]}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={[styles.limitedOfferWrapper, styles.frameFlexBox]}>
          <Text style={[styles.limitedOffer, styles.textTypo]}>
            Limited offer!
          </Text>
        </View>
        <Image
          style={styles.iconHeart}
          resizeMode="cover"
          source={productCode}
        />
      </View>
      <Text
        style={[styles.get20DiscountContainer, styles.frameGroupSpaceBlock]}
      >
        <Text style={styles.get20Discount}>{discountDescription}</Text>
        <Text style={styles.textTypo}>{` `}</Text>
        <Text style={styles.withYourMaster}>{creditCardImageUrl}</Text>
      </Text>
      <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
        <View style={styles.image7Wrapper}>
          <Image
            style={[styles.image7Icon, image7IconStyle]}
            resizeMode="cover"
            source={dimensionCode}
          />
        </View>
        <View style={styles.useYourMastercardWithAnyTWrapper}>
          <Text style={styles.useYourMastercard}>{transactionDescription}</Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={dimensionCodeImageUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameGroupSpaceBlock: {
    marginTop: 7,
    alignSelf: "stretch",
  },
  limitedOffer: {
    fontSize: FontSize.size_smi,
    textTransform: "uppercase",
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 18,
  },
  limitedOfferWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumaquamarine,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
  },
  iconHeart: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  get20Discount: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  withYourMaster: {
    fontFamily: FontFamily.robotoRegular,
  },
  get20DiscountContainer: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    color: Color.black,
    textAlign: "left",
  },
  image7Icon: {
    position: "absolute",
    top: 1,
    left: 0,
    height: 71,
    width: 104,
  },
  image7Wrapper: {
    height: 72,
    width: 104,
  },
  useYourMastercard: {
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    lineHeight: 18,
    alignSelf: "stretch",
  },
  useYourMastercardWithAnyTWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  frameChild: {
    width: 5,
    height: 10,
    marginLeft: 16,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  offerCard: {
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default OfferCardForm;
