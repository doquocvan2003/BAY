import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BookingSINContainer = () => {
  return (
    <View style={styles.bookingCard}>
      <Image
        style={[styles.bookingImageIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/booking-image.png")}
      />
      <View style={[styles.bookingDetails, styles.editButtonSpaceBlock]}>
        <View style={[styles.group13Parent, styles.parentFlexBox]}>
          <View>
            <Text style={styles.sin}>SIN</Text>
            <Text style={styles.singapore}>Singapore</Text>
            <Text style={styles.terminal1}>Terminal 1</Text>
          </View>
          <View style={styles.line2Parent}>
            <Image
              style={[styles.line2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line22.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval11.png")}
            />
            <Image
              style={styles.iconFlight}
              resizeMode="cover"
              source={require("../assets/icon--flight4.png")}
            />
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval11.png")}
            />
          </View>
          <View style={styles.group131}>
            <Text style={styles.sin}>LAX</Text>
            <Text style={styles.singapore}>Los Angeles</Text>
            <Text style={styles.terminal1}>Terminal 4</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <View style={styles.groupChildLayout}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={styles.image2Icon}
                resizeMode="cover"
                source={require("../assets/image-22.png")}
              />
            </View>
            <Text style={[styles.unitedAirlines, styles.hr40minLayout]}>
              United Airlines
            </Text>
          </View>
          <View
            style={[styles.fluenttimer24RegularParent, styles.parentFlexBox]}
          >
            <Image
              style={styles.fluenttimer24RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluenttimer24regular2.png")}
            />
            <Text style={[styles.hr40min, styles.hr40minLayout]}>
              01 hr 40min
            </Text>
          </View>
        </View>
        <Text style={styles.showMoreDetails}>Show more details...</Text>
        <View style={[styles.bookingDetailsChild, styles.frameParentFlexBox]} />
      </View>
      <View style={[styles.editButton, styles.editButtonSpaceBlock]}>
        <View style={[styles.buttonPrimary, styles.parentFlexBox]}>
          <Text style={styles.viewDetails}>Edit Booking</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  editButtonSpaceBlock: {
    marginTop: 17,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  ovalIconLayout: {
    width: 8,
    height: 8,
  },
  frameParentFlexBox: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    borderRadius: Border.br_10xs,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  groupChildLayout: {
    height: 32,
    width: 48,
  },
  hr40minLayout: {
    lineHeight: 16,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  bookingImageIcon: {
    height: 121,
    width: "100%",
    alignSelf: "stretch",
  },
  sin: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorCornflowerblue,
  },
  singapore: {
    color: Color.black,
    marginTop: 6,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  terminal1: {
    color: Color.colorLightslategray,
    marginTop: 6,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  line2Icon: {
    marginTop: -0.3,
    top: "50%",
    right: 8,
    left: 9,
    zIndex: 0,
    height: 1,
    position: "absolute",
  },
  ovalIcon: {
    zIndex: 1,
    height: 8,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon1: {
    zIndex: 3,
    height: 8,
  },
  line2Parent: {
    flex: 1,
    marginLeft: 18,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  group131: {
    alignItems: "flex-end",
    marginLeft: 18,
  },
  group13Parent: {
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
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
    marginLeft: 8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr40min: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
    marginLeft: 4,
  },
  fluenttimer24RegularParent: {
    justifyContent: "flex-end",
  },
  frameParent: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    borderRadius: Border.br_10xs,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  showMoreDetails: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    marginTop: 14,
  },
  bookingDetailsChild: {
    width: 323,
    height: 1,
  },
  bookingDetails: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  viewDetails: {
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
    fontSize: FontSize.size_sm,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  editButton: {
    paddingBottom: Padding.p_xs,
  },
  bookingCard: {
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
    marginTop: 14,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default BookingSINContainer;
