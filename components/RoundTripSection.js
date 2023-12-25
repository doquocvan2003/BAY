import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily, Padding } from "../GlobalStyles";

const RoundTripSection = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.roundTripSection, style]}>
      <View style={styles.form}>
        <View style={styles.outlinedtextOnlyNoIcon}>
          <View
            style={[styles.outlinedLabeled, styles.outlinedLabeledPosition]}
          >
            <View style={[styles.dpBorder, styles.borderPosition]} />
            <View style={[styles.dpBorder1, styles.borderPosition]} />
            <Text style={[styles.textData, styles.textDataFlexBox]}>
              Select Departure
            </Text>
            <Text style={[styles.labelCaption, styles.textDataFlexBox]}>
              From
            </Text>
            <View
              style={[styles.airplanetakeoff, styles.airplanetakeoffLayout]}
            >
              <Image
                style={[styles.airplaneTakeOff, styles.airplanetakeoffLayout]}
                resizeMode="cover"
                source={require("../assets/airplane-take-off.png")}
              />
            </View>
          </View>
        </View>
        <TextInput
          style={[styles.outlinedtextOnlyNoIcon1, styles.buttonPrimaryFlexBox]}
          label="To"
          placeholder="Select Arrival"
          mode="outlined"
          left={
            <TextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <View style={styles.inputsRow}>
          <TextInput
            style={styles.outlinedtextIconLayout}
            label="Departure"
            placeholder="Select Date"
            mode="outlined"
            left={
              <TextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <TextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.outlinedtextIconLayout,
            ]}
            label="Return"
            placeholder="Select Date"
            mode="outlined"
            left={
              <TextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
        <View style={styles.inputsRow}>
          <TextInput
            style={styles.outlinedtextIconLayout}
            label="Passengers"
            placeholder="Select Pax"
            mode="outlined"
            left={
              <TextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <TextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.outlinedtextIconLayout,
            ]}
            label="Class"
            placeholder="Select Class"
            mode="outlined"
            left={
              <TextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPrimary, styles.buttonPrimaryFlexBox]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={[styles.viewDetails, styles.textDataLayout]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedLabeledPosition: {
    left: 0,
    top: 0,
  },
  borderPosition: {
    borderStyle: "solid",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  textDataFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  airplanetakeoffLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  buttonPrimaryFlexBox: {
    alignSelf: "flex-start",
    width: 313,
  },
  outlinedtextIconLayout: {
    width: 150,
    alignSelf: "flex-start",
    height: 56,
  },
  textDataLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  dpBorder: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    opacity: 0.16,
  },
  dpBorder1: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 2,
    display: "none",
  },
  textData: {
    top: 10,
    left: 41,
    letterSpacing: 0.1,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    display: "flex",
    width: 260,
    height: 36,
    alignItems: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  labelCaption: {
    top: -7,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    width: 301,
    height: 16,
    left: 12,
  },
  airplaneTakeOff: {
    left: 0,
    top: 0,
    height: 20,
    width: 20,
  },
  airplanetakeoff: {
    top: 15,
    left: 12,
  },
  outlinedLabeled: {
    bottom: 0,
    right: 0,
    position: "absolute",
    left: 0,
    top: 0,
  },
  outlinedtextOnlyNoIcon: {
    height: 56,
    width: 313,
  },
  outlinedtextOnlyNoIcon1: {
    marginTop: 18,
    height: 56,
  },
  outlinedtextOnlyNoIcon3: {
    marginLeft: 13,
  },
  inputsRow: {
    flexDirection: "row",
    marginTop: 18,
  },
  form: {
    width: 313,
  },
  viewDetails: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
  },
  roundTripSection: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default RoundTripSection;
