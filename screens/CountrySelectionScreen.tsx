import { StyleSheet, Text, View , Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import CountrySelection from '../components/CountrySelection'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

const CountrySelectionScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  

  return (
    <View style={{width:windowWidth , height:windowHeight}}>

      <CountrySelection navigation={navigation}/>
      
    </View>
  )
}

export default CountrySelectionScreen

const styles = StyleSheet.create({})
