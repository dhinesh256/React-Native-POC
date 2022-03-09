import { View, Text , Pressable, StyleSheet, TouchableOpacity , SafeAreaView} from 'react-native'
import React ,{useState} from 'react'
import CountryFlag from "react-native-country-flag";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import TextBoxAmt from '../components/TextBoxAmt';
import ButtonComp from '../components/ButtonComp';

type Props = {
  navigation:any;
}

const EnterAmountScreen = ({navigation}:Props) => {

  return (
    <SafeAreaView>
    <View style={{justifyContent:"center",alignItems:"center"}}>        
       
        <View style={styles.main}>
            <Text style={styles.text}>{` Send money to  `}
                <CountryFlag isoCode='IN' size={10} style={{borderRadius:75}}/>
               {`  NationName`}
            </Text>

            <Text style={styles.sendingText}>You're sending</Text>

            <TextBoxAmt/>

            <View style={styles.rcvTxt}>
              <Text>Or</Text>
            <TouchableOpacity >
                <Text style={styles.blueText}>Enter the receive amount</Text>
            </TouchableOpacity>
            </View>
            <ButtonComp text={"Check fees"} name={"EstimateDetailsScreen"} navigation={navigation}/>
        </View>
        
    </View>
    </SafeAreaView>
  )
}

export default EnterAmountScreen

const styles = StyleSheet.create({
  main:{
    justifyContent:'center',
    marginVertical:70
  },
  blueText:{
    color:'blue',
    fontWeight:"bold",
    paddingLeft:10
  },
  text:{
    marginLeft:30,
    marginBottom:80,
    fontSize:12,
    color:'black',
  },
  sendingText:{
    marginLeft:120,
    marginBottom:30,
    fontSize:25,
    color:'black',
    fontWeight:'bold'
  },
  rcvTxt:{
    flexDirection:"row",
    marginLeft:150,
    marginBottom:50,
    
  }
})