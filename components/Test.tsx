
import React , {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
// import {styles} from '../styles/test.module.scss'
 

function Test() {

    console.log(styles)

    const [Amount, setAmount] = useState(10.00)

    const [isValid, setIsValid] = useState(true)

    const [errorMsg, setErrorMsg] = useState("")

    const checkAndSet = (amt:string) => {

      const Amt = parseInt(amt)

      if(Amt<=0){
        setIsValid(false)
        setErrorMsg( "Enter an Amount")
      }
      else if(Amt>7500){
        setIsValid(false)
        setErrorMsg("Your sending limit is 7,500 CAD")
      }
      else{
        setIsValid(true)
        setErrorMsg("")
        setAmount(Amt)
      }

    }

    

  return (
      
    <View style={styles.container}>
        <View style={[styles.AmountSection,isValid? styles.ValidAmountSelction : styles.inValidAmountSelction]}>
            <TextInput
                placeholder='0.00'
                style={styles.input}
                onChangeText={(item) => {checkAndSet(item)}}
                >
            </TextInput>
            <Text style={styles.text}>CAD</Text>
        </View>

        <Text style={styles.errorText}>
          {errorMsg}
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      marginTop:40,
      marginBottom:40,
    },
    AmountSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft:40,
        width:"80%",
    },
    ValidAmountSelction:{
        borderBottomColor:"#ccc6c6",
        borderBottomWidth: 2
    },
    inValidAmountSelction:{
      borderBottomColor:"red",
      borderBottomWidth: 2
    },
    input: {
      color:'black',
      fontSize:25,
      fontWeight:'600',
      width:"60%"
    },
    text:{
      backgroundColor:'#d6d5d2',
      padding:5,
      borderRadius:5,
      paddingLeft:20,
      paddingRight:20,
      marginRight:10,
      marginBottom:5,
      fontSize:20,
      color:"#000"
    },
    errorText:{
      marginTop:5,
      marginLeft:40,
      color:'red',
      fontWeight:'500',
    }

})
export default Test;