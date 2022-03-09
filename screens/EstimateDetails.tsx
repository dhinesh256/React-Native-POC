import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBoxAmt from '../components/TextBoxAmt'
import ButtonComp from '../components/ButtonComp'
import CountryFlag from 'react-native-country-flag'

const EstimateDetails = () => {
  return (
    <View style={{justifyContent:"space-around",}}>
      <Text style={styles.text}>{` Send money to  `}
            <CountryFlag isoCode='IN' size={10} style={{borderRadius:75}}/>
            {`  NationName`}
        </Text>
      <TextBoxAmt/>
      <TextBoxAmt/>
      <ButtonComp text={"continue to receiver"}/>
    </View>
  )
}

export default EstimateDetails

const styles = StyleSheet.create({
    text:{
        // marginLeft:25,
        // marginBottom:80,
        fontSize:15,
        color:'black',
        padding:20
      },
})