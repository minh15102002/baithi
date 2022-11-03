import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import React, { useState } from "react";
import User from '../screens/User';
import Cart from '../screens/Cart';
import LoginScreen from '../screens/LoginScreen';
import RegiterScreen from '../screens/RegiterScreen';

const Tab = createBottomTabNavigator();

const Tabs = (navigation) => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
        {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
        {/* <Tab.Screen name="Register" component={RegiterScreen} /> */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
  )
}

export default Tabs;