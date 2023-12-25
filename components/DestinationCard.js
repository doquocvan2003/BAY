import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DestinationCard = ({ destinationTitle }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.destinationCard}
      onPress={() => navigation.navigate("Borocay")}
    >
      <Image
        style={styles.destinationImageIcon}
        resizeMode="cover"
        source={require("../assets/destination-image.png")}
      />
      <View style={styles.details}>
        <View>
          <Text style={styles.boracay}>{destinationTitle}</Text>
          <Text style={[styles.philippines, styles.d4nTypo]}>Philippines</Text>
        </View>
        <View style={styles.duration}>
          <Text style={[styles.d4n, styles.d4nTypo]}>5D4N</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  d4nTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  destinationImageIcon: {
    width: 131,
    height: 90,
  },
  boracay: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  philippines: {
    color: Color.colorLightslategray,
    marginTop: 1,
  },
  d4n: {
    color: Color.colorDimgray_100,
  },
  duration: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
  },
  details: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row",
  },
  destinationCard: {
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
    width: 151,
    padding: Padding.p_3xs,
  },
});

export default DestinationCard;
