import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DrawerMenu = () => {
  return (
    <View style={styles.drawerMenu}>
      <View style={styles.menu}>
        <View style={styles.profile}>
          <View style={styles.group3Wrapper}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group32.png")}
            />
          </View>
          <View style={styles.helloParent}>
            <Text style={[styles.hello, styles.helloClr]}>Hello</Text>
            <Text style={styles.macyJohnson}>Macy Johnson</Text>
          </View>
        </View>
        <View style={styles.menuChild} />
        <View style={styles.drawerMenuItems} />
      </View>
      <View style={styles.group3Wrapper}>
        <Text style={[styles.appVersion101, styles.profile1Layout]}>
          App version 1.0.1
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloClr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  profile1Layout: {
    lineHeight: 24,
    textAlign: "left",
  },
  menuItemSpaceBlock: {
    marginTop: 28,
    flexDirection: "row",
  },
  iconlylightprofileLayout: {
    height: 24,
    width: 24,
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
  },
  macyJohnson: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "left",
  },
  helloParent: {
    marginLeft: 12,
  },
  profile: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderTopWidth: 1,
    height: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  drawerMenuItems: {
    marginTop: 20,
  },
  menu: {
    alignSelf: "stretch",
  },
  appVersion101: {
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  drawerMenu: {
    backgroundColor: Color.colorWhite,
    width: 320,
    height: 812,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
  },
});

export default DrawerMenu;
