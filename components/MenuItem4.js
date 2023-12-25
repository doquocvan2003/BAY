import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MenuItem4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() => navigation.navigate("Bookings")}
    >
      <Image
        style={styles.iconlylightfilter}
        resizeMode="cover"
        source={require("../assets/iconlylightfilter.png")}
      />
      <Text style={styles.allBookings}>All Bookings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  allBookings: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "left",
    marginLeft: 16,
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default MenuItem4;
