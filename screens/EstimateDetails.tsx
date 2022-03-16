import { StyleSheet, Text, View , TouchableOpacity ,Alert ,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import TextBoxAmt from '../components/TextBoxAmt'
import CountryFlag from 'react-native-country-flag'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import Stepper from '../components/Stepper'
import StepperReceive from '../components/StepperReceive'

const EstimateDetails = () => {

  const [Total, setTotal] = useState(50)
  const [fees, setFees] = useState(4)

  return (
    <ScrollView style={{flex:1, backgroundColor:"white"}}>

      <View style={styles.offer}>
                <Text style={styles.offerTitle}>New customers limited time offer!</Text>
                <Text style={styles.offerText}>Send cash using credit/debit {'\n'} 
                  cards with reduced transfer fees2{'\n'} 
                  starting from $2.99{'\n'} 
                </Text>
      </View>

      <Text style={styles.text}>{` Send money to  `}
            <CountryFlag isoCode='IN' size={10} style={{borderRadius:75}}/>
            <TouchableOpacity><Text style={styles.text3}>{`  NationName`}</Text></TouchableOpacity>
      </Text>

        <Text style={styles.text}>You're sending</Text>
        
        <TextBoxAmt/>
        <View style={{width:"80%",flexDirection:"row",justifyContent:"space-between"}}>
            <Stepper/>
            <View style={styles.sendingDetails}>
              <View style={styles.payBy}>
                <Text style={styles.text2}>Pay by</Text>
                <TouchableOpacity onPress={()=>{}}>
                  <Text style={styles.card}>Credit or debit card</Text>
                </TouchableOpacity>
                <Icon name='pen' color={"#054fc6"} size={17} onPress={()=>{}}/>
              </View>
              <Text style={styles.text2}>Guranteed rate = 0.7366 USD </Text>
              <Text style={styles.text2}>Our transfer fees + {fees} </Text>
              <TouchableOpacity onPress={()=>{}}><Text style={styles.text3}>Apply promo code </Text></TouchableOpacity>
            </View>
        </View>
        


        <Text style={styles.text}>Your receiver gets</Text>
        
        <TextBoxAmt />

        <View style={{width:"80%",flexDirection:"row",justifyContent:"flex-start"}}>
        <StepperReceive/>
        <View style={styles.receivingDetails}>
            <View style={styles.payBy}>
              <Text style={styles.text4}>Received by</Text>
              <TouchableOpacity onPress={()=>{}}><Text style={styles.card}>Cash pickup</Text></TouchableOpacity>
              <Icon name='pen' color={"#054fc6"} size={17} onPress={()=>{}}/>
            </View>
            <Text style={styles.text4}>Delivery in minutes</Text>
        </View>
        </View>


        <View style={styles.totalContainer}>
            <Text style={styles.total}>Total you pay {Total} CAD</Text>
        </View>


      <View style={styles.container}>
      <TouchableOpacity
          style={styles.pressable}
          // onPress={onPress? onPress : () => navigation.navigate(name)}
          onPress = {() => {Alert.alert("Button clicked")}}
        >
      <Text style={styles.btntext}>Continue to receiver</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default EstimateDetails

const styles = StyleSheet.create({

   offer:{
    backgroundColor: "#ffdd00",
    alignItems:"center",
    height:"16%",
    margin:"4%",
    borderRadius:5
    },
    offerTitle:{
        fontWeight:"bold",
        color:"black",
        fontSize:18,
        paddingTop:"6%"
    },
    offerText:{
        alignItems:"center",
        fontSize:18,
        paddingTop:"0.5%",
        color:"black",
    },

    text:{
        // marginLeft:25,
        // marginBottom:80,
        fontSize:15,
        fontWeight:"500",
        color:'black',
        padding:20,
    },
    container : {
      width:"112%",
      borderRadius:60,
      marginLeft:15,
      marginBottom:100
    },
    pressable:{
      backgroundColor: "#FFDD00",
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius:40,
      margin: 5,
      alignItems:'center',
      width:"80%",
    },
    btntext: {
      fontSize: 20,
      fontWeight: '500',
      color: "#000",
    },
    sendingDetails:{
      width:"100%",
      height:"15%",
      marginTop:16,
      marginLeft:"1%",
      justifyContent:"space-between",
      alignItems:"flex-start"
    },
    receivingDetails:{
      width:"100%",
      height:"5.5%",
      marginTop:16,
      // marginLeft:"10%",
      justifyContent:"space-between",
      alignItems:"flex-start"
    },
    payBy:{
      width:"60%",
      height:30,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
    },
    card:{
      color:"#054fc6",
      backgroundColor:"#b7e8fa",
      fontSize:12,
      fontWeight:"600",
      padding:"3%",
      borderRadius:5

    },
    totalContainer:
    {
      padding:"8%",
      alignItems:"center",
      justifyContent:"center"
    },
    total:{
      color:"black",
      fontSize:18,
      fontWeight:"bold"
    },
    text2:{
      color:"black",
      fontSize:14,
      fontWeight:"400",
      marginTop:5,
      marginBottom:5
    },
    text3:{
      color:"#2884fe",
      fontSize:14,
      marginTop:3,
      marginBottom:5
    },
    text4:{
      height:20,
      color:"black",
      fontSize:14,
      fontWeight:"400",
      marginTop:5,
      marginBottom:5
    },  
})














