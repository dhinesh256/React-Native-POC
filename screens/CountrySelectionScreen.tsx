import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CountrySelection from '../components/CountrySelection'

const CountrySelectionScreen = () => {
  return (
    <View>
      <Header/>
      <CountrySelection/>
    </View>
  )
}

export default CountrySelectionScreen

const styles = StyleSheet.create({})