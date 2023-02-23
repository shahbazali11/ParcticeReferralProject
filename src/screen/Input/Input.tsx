import { NavigationAction, useNavigation } from '@react-navigation/native'
import React, {FC, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainNavigationParamList } from '../../navigation'

//type nav = NativeStackNavigationProp<MainNavigationParamList, 'Input'>;
interface Props{
}

const Input: FC<Props> = () => {
   const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParamList>>();
  useEffect(() => {
  setTimeout(()=>{
    navigation.navigate('Feed')
  }, 3000)
  }, [])
  return (
    <View style={styles.mainContainer}>
      <Text>Input</Text>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,  
    alignItems: "center",
    justifyContent: "center"
  }
})