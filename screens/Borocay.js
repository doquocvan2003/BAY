import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const Borocay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.borocay}>
      <ImageBackground
        style={[styles.borocayScreenIcon, styles.titleFlexBox]}
        resizeMode="cover"
        source={require("../assets/borocayscreen.png")}
      >
        <View style={styles.header}>
          <Pressable
            style={[styles.backArrow, styles.heartFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back21.png")}
            />
          </Pressable>
          <View style={[styles.heart, styles.heartFlexBox]}>
            <Image
              style={styles.iconHeart}
              resizeMode="cover"
              source={require("../assets/icon--heart4.png")}
            />
          </View>
        </View>
        <View style={[styles.bottomDrawer, styles.heartShadowBox]}>
          <View style={styles.bottomDrawerContent}>
            <View style={[styles.title, styles.titleFlexBox]}>
              <View style={styles.frameParent}>
                <View>
                  <Text style={[styles.boracay, styles.textTypo]}>Boracay</Text>
                  <Text style={styles.philippines}>Philippines</Text>
                </View>
                <View style={styles.d4nWrapper}>
                  <Text style={[styles.d4n, styles.d4nTypo]}>5D4N</Text>
                </View>
              </View>
              <Text style={[styles.text, styles.textTypo]}>$349</Text>
            </View>
            <View style={[styles.overviewText, styles.imagesSpaceBlock]}>
              <Text style={[styles.overview, styles.photosLayout]}>
                Overview
              </Text>
              <Text style={[styles.spend5Days, styles.photosLayout]}>
                Spend 5 days and 4 nights in one of the best islands in the
                world! Bask in the sun while walking in the white sand beach and
                enjoy the night partying at the popular seaside bars.
              </Text>
            </View>
            <View style={styles.imagesSpaceBlock}>
              <Text style={[styles.photos, styles.photosLayout]}>Photos</Text>
              <ScrollView
                style={styles.photosRow}
                horizontal={true}
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.photosRowScrollViewContent}
              >
                <Image
                  style={styles.photoIconLayout}
                  resizeMode="cover"
                  source={require("../assets/photo.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.photoIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/photo11.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.photoIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/photo21.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.photoIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/photo31.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.photoIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/photo41.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.photoIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/photo51.png")}
                />
              </ScrollView>
            </View>
            <View style={[styles.buttonPrimary, styles.imagesSpaceBlock]}>
              <Text style={styles.viewDetails}>Book Now</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  photosRowScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  heartFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  heartShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  d4nTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  imagesSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  photosLayout: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.black,
  },
  photoIconLayout: {
    height: 90,
    borderRadius: Border.br_9xs,
    width: 120,
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  backArrow: {
    padding: Padding.p_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_5xl,
    justifyContent: "center",
  },
  iconHeart: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  heart: {
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_5xl,
    justifyContent: "center",
  },
  header: {
    paddingTop: Padding.p_11xl,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  boracay: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  philippines: {
    color: Color.colorLightslategray,
    marginTop: 2,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  d4n: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  d4nWrapper: {
    borderRadius: 6,
    backgroundColor: "#f5f5f7",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: 3,
    overflow: "hidden",
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  text: {
    fontSize: 28,
    textAlign: "left",
  },
  title: {
    flexDirection: "row",
  },
  overview: {
    top: 0,
    left: 0,
    position: "absolute",
    lineHeight: 24,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  spend5Days: {
    top: "25%",
    left: "0%",
    position: "absolute",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    width: "100%",
  },
  overviewText: {
    height: 128,
  },
  photos: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  photoIcon1: {
    marginLeft: 10,
  },
  photosRow: {
    marginTop: 8,
    alignSelf: "stretch",
    width: "100%",
  },
  viewDetails: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
    lineHeight: 24,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomDrawerContent: {
    flex: 1,
  },
  bottomDrawer: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    paddingVertical: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  borocayScreenIcon: {
    paddingTop: Padding.p_base,
    flex: 1,
  },
  borocay: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
});

export default Borocay;
