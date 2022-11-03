import React, { useState } from "react";
import { View,StyleSheet,TouchableOpacity,Text, SafeAreaView, FlatList } from "react-native";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryList from "../components/CategoryList";
import Swipslider from "../components/Swipslider";

// const Tab = createBottomTabNavigator();
const Home = () => {
  
  const [nftData, setNftData] = useState(NFTData);
// tim kiem
  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader onSearch={handleSearch} />
      <Swipslider/>
      {/* <FocusedStatusBar backgroundColor={COLORS.primary} /> */}
      <CategoryList/>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Home;
