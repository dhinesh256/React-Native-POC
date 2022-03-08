import { View, Text , Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import CountryFlag from "react-native-country-flag";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import TextBoxAmt from '../components/TextBoxAmt';
import ButtonComp from '../components/ButtonComp';

const EnterAmountScreen = () => {

  const [first, setfirst] = useState(false)
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <Header/>
        
        {/* <Pressable style={{padding:5,marginRight:15}} onPress={()=>{setfirst(!first)}}>
              {first ?  
                <Icon name="chevron-up" size={20} color="blue"  /> 
                :
                <Icon name="chevron-down" size={20} color="blue"/>}
        </Pressable> */}
        <View style={styles.main}>
            <Text style={styles.text}>{` Send money to  `}
                <CountryFlag isoCode='IN' size={10} style={{borderRadius:75}}/>
               {`  NationName`}
            </Text>

            <Text style={styles.sendingText}>You're sending</Text>

            <TextBoxAmt/>

            <TouchableOpacity >
                <Text style={styles.blueText}>Enter the receive amount</Text>
            </TouchableOpacity>
            
            <ButtonComp text={"Check fees"} name={"EstimateDetailsScreen"}/>
        </View>
        
    </View>
  )
}

export default EnterAmountScreen

const styles = StyleSheet.create({
  main:{
    justifyContent:'center',
    marginVertical:130
  },
  blueText:{
    color:'blue',
    fontWeight:'bold'
  },
  text:{
    marginLeft:30,
    marginBottom:80,
    fontSize:15,
    color:'black',
  },
  sendingText:{
    marginLeft:120,
    marginBottom:30,
    fontSize:25,
    color:'black',
    fontWeight:'bold'
  }
})