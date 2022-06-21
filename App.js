import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Camera from "./pages/CameraPage";
import Home from "./pages/Home";
import Librairie from "./pages/Librairie";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            animation: "none",
            gestureEnabled: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Librairie" component={Librairie} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen
          options={{
            animation: "none",
            gestureEnabled: false,
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            animation: "none",
            gestureEnabled: false,
          }}
          name="Camera"
          component={Camera}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
