import React , {useState} from 'react'
import { StyleSheet, Text, TextInput, View ,SafeAreaView ,TouchableWithoutFeedback} from 'react-native'

function TextBoxAmt() {

    const [Amount, setAmount] = useState(10.00)

    const [isValid, setIsValid] = useState(true)

    const [errorMsg, setErrorMsg] = useState("")

    const checkAndSet = (amt:string) => {

      const Amt = parseInt(amt)

      if(isNaN(Amt)){
        setIsValid(false)
        setErrorMsg("Enter an Amount")
      }
      else{  
        if(Amt<=0){
          setIsValid(false)
          setErrorMsg( "Amount must be greater than 1.00 CAD")
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
  }

    

  return (
    
     
      <View style={styles.container}>
        <TouchableWithoutFeedback>
        <View style={[styles.AmountSection,isValid? styles.ValidAmountSelction : styles.inValidAmountSelction]}>
            <TextInput
                placeholder='0.00'
                style={styles.input}
                onChangeText={(item) => {checkAndSet(item)}}
                keyboardType="numeric"
                >
            </TextInput>
       
            <Text style={styles.text}>CAD</Text>
        </View>
        </TouchableWithoutFeedback>

        <Text style={styles.errorText}>
          {errorMsg}
        </Text>
      </View>
      
      
    
  )
}


const styles = StyleSheet.create({
    container: {
      marginTop:0,
      marginBottom:0,
      
    },
    AmountSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft:20,
        width:"90%",
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
      fontWeight:'bold',
      width:"50%"
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
export default TextBoxAmt;