import React, { Component, useContext, useState } from 'react'
import { View,StyleSheet,Button, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch,navigation }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        position:'relative',
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <View style={{ width: 45, height: 45 }}>
                <Image
                  source={assets.duyminhwatch}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
            </View>
            <View style={{ marginVertical: SIZES.font }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                  color: COLORS.white,
                }}
              >
                Chào mừng tới 
              </Text>

              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                  marginTop: SIZES.base / 2,
                }}
              >
                DuyMinhWatch
              </Text>
            </View>
          </View>
          <View style={{ width: 30, height: 30 }}>
            <TouchableOpacity 
              style={{ width: "100%", height: "100%" }}
            >
               <Image
                source={assets.ImageOrder}
                resizeMode="contain"
                style={{ width: "100%",tintColor:'red', height: "100%" }}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>

{/* tìm kiếm */}
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <TouchableOpacity >
            <Image
              source={assets.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Tìm kiếm"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
