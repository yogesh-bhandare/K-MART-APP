import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileIcon from '../components/ProfileIcon'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
        <View>
            <View className="">
                <View className="">
                    <ProfileIcon/>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen