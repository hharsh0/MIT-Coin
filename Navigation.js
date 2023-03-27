import { StatusBar } from "expo-status-bar";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import JoinEventScreen from "./screens/JoinEventScreen";
import SuccessScreen from "./screens/SuccessScreen";
import RewardScreen from "./screens/RewardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ClubScreen from "./screens/ClubScreen";
import EventDetailScreen from "./screens/EventDetailScreen";
import { NativeBaseProvider, Box, Input } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Start"
        component={HomeScreen}
      />
      <Stack.Screen
        // options={{ headerShown: false }}
        options={{
          headerStyle: {
            backgroundColor: '#151321',
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
        name="EventDetail"
        component={EventDetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="JoinEvent"
        component={JoinEventScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Success"
        component={SuccessScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Reward"
        component={RewardScreen}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const authCtx = useContext(AuthContext);
  const screens = [
    {
      name: "Home",
      component: HomeStack,
    },
    {
      name: "Club",
      component: ClubScreen,
    },
    {
      name: "Profile",
      component: ProfileScreen,
    },
    {
      name: "Login",
      component: LoginScreen,
    },
  ];

  const icons = {
    Home: 'home-outline',
    Club: 'people-outline',
    Profile: 'person-outline'
  }
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="light" />
        <Tab.Navigator>
          {screens.map((screen) => {
            if (screen.name === "Login" && authCtx.isAuthenticated) {
              return null; // don't render the Login screen if the user is already authenticated
            } else if (screen.name !== "Login" && !authCtx.isAuthenticated) {
              return null; // don't render any screen other than Login if the user is not authenticated
            } else {
              const Component = screen.component;
              return (
                <Tab.Screen
                  key={screen.name}
                  name={screen.name}
                  component={Component}
                  options={{
                    tabBarActiveTintColor: "#F3AF00",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={icons[screen.name]}
                        size={size}
                        color={color}
                      />
                    ),
                    tabBarStyle: {
                      backgroundColor: "#151321",
                      display: authCtx.isAuthenticated ? "flex" : "none",
                    },
                  }} // hide the tab bar for non-authenticated screens
                />
              );
            }
          })}
        </Tab.Navigator>
        {/* <HomeScreen /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
