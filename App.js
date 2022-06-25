import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Camera from "./pages/CameraPage";
import Home from "./pages/Home";
import Librairie from "./pages/Librairie";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Test from "./pages/Test";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import InitialPage from "./pages/InitialPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
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
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
