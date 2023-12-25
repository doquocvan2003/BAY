const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Explore from "./screens/Explore";
import Offers from "./screens/Offers";
import Bookings from "./screens/Bookings";
import SearchContainer from "./components/SearchContainer";
import ProfileContainer from "./components/ProfileContainer";
import SearchTwoWay from "./screens/SearchTwoWay";
import CategoryBlock from "./components/CategoryBlock";
import StatusBarLight from "./components/StatusBarLight";
import SearchResults from "./screens/SearchResults";
import Header2 from "./components/Header2";
import MenuItem5 from "./components/MenuItem5";
import MenuItem4 from "./components/MenuItem4";
import Header1 from "./components/Header1";
import MenuItem3 from "./components/MenuItem3";
import MenuItem2 from "./components/MenuItem2";
import MenuItem1 from "./components/MenuItem1";
import MenuItem from "./components/MenuItem";
import BottomTab10 from "./components/BottomTab10";
import BottomTab9 from "./components/BottomTab9";
import BottomTab7 from "./components/BottomTab7";
import Group41 from "./components/Group41";
import OneWaySection from "./components/OneWaySection";
import Frame1 from "./components/Frame2112";
import Frame from "./components/Frame2111";
import RoundTripSection from "./components/RoundTripSection";
import Group4 from "./components/Group4";
import BottomTab4 from "./components/BottomTab4";
import BottomTab3 from "./components/BottomTab3";
import Header from "./components/Header";
import BottomTab1 from "./components/BottomTab1";
import DrawerMenu from "./components/DrawerMenu";
import Borocay from "./screens/Borocay";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import OneWay from "./components/OneWay";
import RoundTrip from "./components/RoundTrip";
import BottomTab from "./components/BottomTab";
import BottomTab2 from "./components/BottomTab2";
import BottomTab5 from "./components/BottomTab5";
import BottomTab6 from "./components/BottomTab6";
import BottomTab8 from "./components/BottomTab8";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={(props) => ({
                headerShown: true,
                header: () => <Header2 />,
              })}
            />
            <Stack.Screen
              name="Offers"
              component={Offers}
              options={(props) => ({
                headerShown: true,
                header: () => <Header />,
              })}
            />
            <Stack.Screen
              name="Bookings"
              component={Bookings}
              options={(props) => ({
                headerShown: true,
                header: () => <Header1 />,
              })}
            />
            <Stack.Screen
              name="SearchTwoWay"
              component={SearchTwoWay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={(props) => ({
                headerShown: true,
                header: () => <Group41 />,
              })}
            />
            <Stack.Screen
              name="Borocay"
              component={Borocay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={(props) => ({
                headerShown: true,
                header: () => <Group4 />,
              })}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
