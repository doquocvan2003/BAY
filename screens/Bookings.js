import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarLight from "../components/StatusBarLight";
import BookingSINContainer from "../components/BookingSINContainer";
import ProfileContainer from "../components/ProfileContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Bookings = () => {
  return (
    <View style={styles.bookings}>
      <StatusBarLight
        statusBarLightBackgroundColor="#fff"
        statusBarLightAlignSelf="stretch"
        statusBarLightWidth="unset"
        timeFontFamily="Roboto-Bold"
      />
      <ScrollView
        style={styles.bookingsBody}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.bookingsBodyScrollViewContent}
      >
        <Text style={[styles.upcomingBookings, styles.bookingsTypo]}>
          Upcoming Bookings
        </Text>
        <BookingSINContainer />
      </ScrollView>
      <ProfileContainer
        imageId={require("../assets/icon--exploreselected4.png")}
        imageCode={require("../assets/icon--itinerary11.png")}
        imageDimensions={require("../assets/icon--searchflights4.png")}
        imageCode2={require("../assets/icon--offers4.png")}
        imageCodeDimensions={require("../assets/icon--userprofile3.png")}
        bottomTabPosition="unset"
        bottomTabJustifyContent="space-between"
        bottomTabElevation={15}
        bottomTabWidth={61}
        searchColor="#7e8a97"
        bottomTabMarginLeft="unset"
        bottomTabWidth1={61}
        searchColor1="#10579b"
        bottomTabMarginLeft1="unset"
        bottomTabWidth2={61}
        bottomTabMarginLeft2="unset"
        bottomTabWidth3={61}
        searchColor2="#7e8a97"
        bottomTabMarginLeft3="unset"
        bottomTabWidth4={61}
        searchColor3="#7e8a97"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  bookingsBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 31,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bookingsTypo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  upcomingBookings: {
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  bookingsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  bookings: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Bookings;
