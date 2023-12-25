import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBarLight = ({
  statusBarLightBackgroundColor,
  statusBarLightAlignSelf,
  statusBarLightWidth,
  timeFontFamily,
}) => {
  const statusBarLightStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", statusBarLightBackgroundColor),
      ...getStyleValue("alignSelf", statusBarLightAlignSelf),
      ...getStyleValue("width", statusBarLightWidth),
    };
  }, [
    statusBarLightBackgroundColor,
    statusBarLightAlignSelf,
    statusBarLightWidth,
  ]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", timeFontFamily),
    };
  }, [timeFontFamily]);

  return (
    <View style={[styles.statusBarLight, statusBarLightStyle]}>
      <View style={styles.icons}>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Text style={[styles.time, timeStyle]}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    height: 11,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightLabelPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightLabelPrimary,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    width: 24,
    top: 0,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  icons: {
    top: 18,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: FontSize.subheadlineBold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.subheadlineBold,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
    alignSelf: "stretch",
  },
});

export default StatusBarLight;
