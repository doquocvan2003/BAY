import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const OneWaySection = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.oneWaySection, style]}>
      <View style={styles.form}>
        <TextInput
          style={styles.outlinedtextIconLayout1}
          label="From"
          placeholder="Select Departure"
          mode="outlined"
          left={
            <TextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-takeoff"
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
        <TextInput
          style={[
            styles.outlinedtextOnlyNoIcon1,
            styles.outlinedtextIconLayout1,
          ]}
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
        <TextInput
          style={[
            styles.outlinedtextOnlyNoIcon1,
            styles.outlinedtextIconLayout1,
          ]}
          label="Departure Date"
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
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
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
              styles.outlinedtextOnlyNoIcon4,
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
        style={styles.buttonPrimary}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.viewDetails}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedtextIconLayout1: {
    alignSelf: "flex-start",
    height: 56,
    width: 313,
  },
  outlinedtextIconLayout: {
    width: 150,
    alignSelf: "flex-start",
    height: 56,
  },
  outlinedtextOnlyNoIcon1: {
    marginTop: 18,
  },
  outlinedtextOnlyNoIcon4: {
    marginLeft: 13,
  },
  inputsRow: {
    flexDirection: "row",
    marginTop: 18,
  },
  form: {
    alignSelf: "stretch",
  },
  viewDetails: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    marginTop: 13,
    flexDirection: "row",
    width: 313,
    paddingVertical: Padding.p_3xs,
  },
  oneWaySection: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
});

export default OneWaySection;
