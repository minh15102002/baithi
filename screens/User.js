import React, { Component } from 'react'
import { Text, View, Image,Button,StatusBar, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";


const User=({navigation})=>{


    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',flex:6,}}>
          <TouchableOpacity >
          <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
    />
          </TouchableOpacity>
        </View>
           <Button style={{color: 'black', fontWeight: 'bold'}} onPress={()=>navigation.navigate('Login')} title="Đăng xuất"/>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    item1:{
      width: '100%',
      height: 50,
      marginTop: 20,
  },
});
export default User;
