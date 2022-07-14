import { Text, View } from 'react-native'
import React from 'react'

export default function BookmarkScreen({navigation,route}) {
    const {data}=route.params;
  return (
    <View>
      <Text>BookmarkScreen</Text>
    </View>
  )
}
