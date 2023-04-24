import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function DishCard() {
    const [amount, setAmount] = useState(150)
    const [value, setValue] = useState(0)
    return (
        <View className="mb-1">
            <View className="flex-row items-center justify-between">
                <View style={{ width: 240 }}>
                    <Text className="font-bold text-xl">Dish Name</Text>
                    <Text className="text-gray-500">dish description and also how it taste, where it is available. App made by Arjun</Text>
                </View>
                <Image
                    className="rounded "
                    source={require("../assets/images/burger.jpeg")}
                    style={{ height: 70, width: 70 }}
                />
            </View>
            <View className="flex-row items-center mt-2">
                <FontAwesome name="rupee" size={15} opacity={0.6} color="black" />
                <Text className="text-gray-500 pb-1 ml-1">{amount}</Text>
            </View>
            <View className="flex-row ml-3 items-center mt-3 space-x-4">
                <TouchableOpacity onPress={() => { value > 0 ? setValue(value - 1) : setValue(value) }}><MaterialCommunityIcons name="minus-circle" size={36} color="black" /></TouchableOpacity>
                <Text className='text-xl font-bold'>{value}</Text>
                <TouchableOpacity onPress={() => { value < 100 ? setValue(value + 1) : setValue(value) }}><FontAwesome5 name="plus-circle" size={30} color="black" /></TouchableOpacity>
            </View>
            <View style={{ height: 1 }} className="w-screen bg-gray-300 my-2"></View>
        </View>
    );
}
