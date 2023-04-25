import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Ionicons, EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import DishCard from './dishCard';

const Restaurant = () => {
    const navigator = useNavigation()

    useLayoutEffect(() => {
        navigator.setOptions(
            {
                headerShown: false
            }
        )
    }, [])
    const { params: { add, img, title, rating, desc } } = useRoute()
    return (
        <ScrollView >
            <View className="bg-white h-fit relative">
                <Image
                    resizeMode='cover'
                    style={{ height: 200, width: "100%" }}
                    source={img}
                />
            </View>
            <TouchableOpacity onPress={() => {
                navigator.navigate("Home")
            }} className="  p-1 bg-white rounded-full items-center text-center absolute top-9 left-3 "><Ionicons name="arrow-back" size={30} color="#00ccbb" /></TouchableOpacity>
            <View className=" text-center  bg-white">
                <Text className="text-2xl text-center font-bold ">{title}</Text>
                <View className="flex-row p-3">
                    <View className=" flex-row items-center"><Ionicons opacity={0.5} name="ios-star" size={24} color="green" /><Text className="font-bold text-center text-xl ml-2">{rating}</Text><Text className="text-xs"> offers</Text></View>
                    <View className="flex-row items-center ml-2 "><EvilIcons name="location" size={24} color="#00ccbb" /><Text>{add}</Text></View>
                </View>
                <Text className="font-bold mt-1 px-3 pb-1">{desc}</Text>
                <View className="h-1 w-screen bg-gray-300"></View>
                <TouchableOpacity className="flex-row items-center p-2">
                    <View className="flex-row space-x-2 items-center flex-1"><AntDesign name="questioncircleo" size={20} opacity={0.5} color="black" /><Text className=" text-lg font-bold">Have a food allergy?</Text></View>
                    <Feather name="arrow-right-circle" size={24} color="#00ccbb" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-xl font-extrabold ml-6 py-2">Menu</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-white w-screen h-fit p-3">
                <DishCard Dname={"rooti"} id={1} price={10} />
                <DishCard Dname={"dal"} id={2} price={100} />
                <DishCard Dname={"burger"} id={3} price={50} />
                <DishCard Dname={"biryani"} id={4} price={100} />
                <DishCard Dname={"rooti dal"} id={5} price={100} />
                <DishCard Dname={"maggie"} id={6} price={10} />
            </ScrollView>
        </ScrollView>
    )
}

export default Restaurant