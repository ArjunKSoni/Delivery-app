
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Ionicons, EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login = () => {
    const navigator = useNavigation()
    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <ImageBackground
            source={{
                uri:
                    'https://wallpapercave.com/wp/wp2852575.jpg',
            }}
            resizeMode="stretch"
            style={styles.img}>
            <TouchableOpacity onPress={() => {
                navigator.navigate("Home")
            }} className="  p-1 bg-white rounded-full items-center text-center absolute top-9 left-3 "><Ionicons name="arrow-back" size={30} color="#00ccbb" />
            </TouchableOpacity>
            <View className="">
                <Text className="mt-8 text-white text-2xl font-extrabold  text-center ">Sign Up</Text>
            </View>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
    },
});