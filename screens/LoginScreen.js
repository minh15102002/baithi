import React, { Component, useContext, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native'

const LoginScreen =({navigation})=>{
    // const [userName, setUserName] = useState(null);
    // const [password, setPassword] = useState(null);
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='Tên đăng nhập'
                    onChangeText={text=> setUserName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Mật khẩu' 
                    secureTextEntry
                    onChangeText={text=> setPassword(text)}
                />
                {/* <Button title='Login' onPress={()=>{login()}}/> */}
                <TouchableOpacity
                    //   onPress={()=>{login()}}
                    onPress={()=>navigation.navigate('Home')}
                    style={{height:40,backgroundColor:'red',borderRadius:10,justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{fontSize:'bold'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text>Bạn chưa có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Resgiter')}
                    >
                        <Text style={{color: 'blue'}}>Đăng Ký</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper:{
        width: '80%'
    },
    input:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        height: 50,
    }
})
export default LoginScreen;