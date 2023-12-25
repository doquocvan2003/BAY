import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={styles.header}>
          <Pressable
            style={[styles.iconBackWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back21.png")}
            />
          </Pressable>
          <View
            style={[styles.fluentedit48RegularWrapper, styles.wrapperFlexBox]}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View>
        </View>
        <View style={styles.profileBody}>
          <View style={[styles.profileDrawer, styles.wrapperShadowBox]}>
            <View style={styles.profileDetails}>
              <View style={styles.nameParticulars}>
                <View>
                  <Text style={styles.macyJohnson}>Macy Johnson</Text>
                  <Text style={styles.baguioPhilippines}>
                    Baguio, Philippines
                  </Text>
                </View>
              </View>
              <Text style={[styles.iLikeThe, styles.profileSpaceBlock]}>
                I like the beach, mountains, forest and everything about nature!
                :)
              </Text>
              <View
                style={[styles.profileDetailsChild, styles.profileSpaceBlock]}
              />
              <View style={[styles.profileOptions, styles.profileSpaceBlock]}>
                <View style={[styles.profileOption, styles.wrapperFlexBox]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/bicreditcard2back.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetails, styles.newTypo]}>
                    Payment Details
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/healthiconsvirusshieldoutline.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetails, styles.newTypo]}>
                    Covid Advisory
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      resizeMode="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View
                    style={[styles.referralCodeParent, styles.wrapperFlexBox]}
                  >
                    <Text style={[styles.referralCode, styles.newTypo]}>
                      Referral Code
                    </Text>
                    <View style={[styles.newWrapper, styles.wrapperFlexBox]}>
                      <Text style={[styles.new, styles.newTypo]}>new</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetails, styles.newTypo]}>
                    Settings
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetails, styles.newTypo]}>
                    Logout
                  </Text>
                </View>
                <View style={[styles.questions, styles.questionsFlexBox]}>
                  <Image
                    style={styles.humbleiconsuserAsking}
                    resizeMode="cover"
                    source={require("../assets/ionhelpcircleoutline.png")}
                  />
                  <Text style={[styles.haveQuestionsWe, styles.iLikeTheTypo]}>
                    Have questions? We are here to help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImage}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group311.png")}
            />
          </View>
        </View>
      </ScrollView>
      <ProfileContainer
        imageId={require("../assets/icon--exploreselected31.png")}
        imageCode={require("../assets/icon--itinerary31.png")}
        imageDimensions={require("../assets/icon--searchflights31.png")}
        imageCode2={require("../assets/icon--offers31.png")}
        imageCodeDimensions={require("../assets/icon--userprofile111.png")}
        bottomTabPosition="unset"
        bottomTabJustifyContent="space-between"
        bottomTabElevation={18}
        bottomTabWidth={61}
        searchColor="#7e8a97"
        bottomTabMarginLeft="unset"
        bottomTabWidth1={61}
        searchColor1="#7e8a97"
        bottomTabMarginLeft1="unset"
        bottomTabWidth2={61}
        bottomTabMarginLeft2="unset"
        bottomTabWidth3={61}
        searchColor2="#7e8a97"
        bottomTabMarginLeft3="unset"
        bottomTabWidth4={61}
        searchColor3="#10579b"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileSectionScrollViewContent: {
    flexDirection: "column",
    paddingTop: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
  },
  profileSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  newTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  questionsFlexBox: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  iLikeTheTypo: {
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconBackWrapper: {
    padding: Padding.p_7xs,
    justifyContent: "center",
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
    alignItems: "center",
  },
  fluentedit48RegularWrapper: {
    padding: Padding.p_7xs,
    justifyContent: "center",
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
    alignItems: "center",
  },
  header: {
    justifyContent: "space-between",
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  macyJohnson: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
  },
  baguioPhilippines: {
    color: Color.colorLightslategray,
    marginTop: 2,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  nameParticulars: {
    alignSelf: "stretch",
  },
  iLikeThe: {
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    marginTop: 16,
  },
  profileDetailsChild: {
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderTopWidth: 1,
    height: 1,
  },
  rate: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorAliceblue_100,
    padding: Padding.p_7xs,
  },
  paymentDetails: {
    marginLeft: 16,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
    color: Color.black,
  },
  profileOption: {
    justifyContent: "center",
  },
  humbleiconsuserAsking: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  referralCode: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
    color: Color.black,
  },
  new: {
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.colorWhite,
    textAlign: "center",
  },
  newWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumaquamarine,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    justifyContent: "center",
  },
  referralCodeParent: {
    marginLeft: 16,
  },
  haveQuestionsWe: {
    color: Color.colorCornflowerblue,
    marginLeft: 8,
  },
  questions: {
    borderRadius: 7,
    backgroundColor: "#eaf5ff",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  profileOptions: {
    height: 322,
  },
  profileDetails: {
    flex: 1,
  },
  profileDrawer: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 43,
    zIndex: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  group3Icon: {
    width: 84,
    height: 84,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
  },
  profileBody: {
    paddingTop: 42,
    marginTop: 50,
    alignSelf: "stretch",
  },
  profileSection: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileIcon: {
    width: "100%",
    flex: 1,
  },
});

export default Profile;
