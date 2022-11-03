import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Tabs from "./navigation/Tab";
import Stacks from "./navigation/Stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const HomeDrawer=()=>{
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Cart" component={Cart} />
//       <Drawer.Screen name="User" component={User} />
//     </Drawer.Navigator>
//   );
// }



const App = () => {
  // const [loaded] = useFonts({
  //   InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  //   InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //   InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),
  // });

  // if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      {/* <Tabs/> */}
      <Stacks/>

    </NavigationContainer>
  );
};

export default App;
