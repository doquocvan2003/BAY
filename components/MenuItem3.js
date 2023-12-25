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

const MenuItem3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() => navigation.navigate("Borocay")}
    >
      <Image
        style={styles.iconlylightnotification}
        resizeMode="cover"
        source={require("../assets/iconlylightnotification.png")}
      />
      <Text style={styles.favourites}>Favourites</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightnotification: {
    width: 24,
    height: 24,
  },
  favourites: {
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

export default MenuItem3;
