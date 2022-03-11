import React , { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,KeyboardAvoidingView ,TouchableWithoutFeedback} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { RootStackParams } from "../App";
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from "../components/Header";
import ModelComp from "../components/ModalComp";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


const HomeScreen = ()=>{

    const [Amount, setAmount] = useState(10.00)

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    return(
        <KeyboardAvoidingView>
        <View>
            <View style={styles.homePage}>
                <Text style={styles.mainText}>Send money your way with Western union</Text>
                <Text style={styles.subText}>Send money to over 200 countries and {'\n'}territories5 around the world online, in perosn {'\n'}
                    and on the go with Western Union money  transfer app.
                </Text>
                <ModelComp/>
                {/* <TextInput style={styles.input1}>
                    <Text>Send to</Text>
                </TextInput>
                <TextInput style={styles.input2}>
                    <Text>Send amount</Text>
                </TextInput> */}

                <TouchableWithoutFeedback>
                <View style={styles.txtInputcontainer}>
                    <View style={styles.AmountSection}>
                        <TextInput
                            placeholder='0.00'
                            style={styles.input}
                            onChangeText={(item) => {setAmount(parseInt(item))}}
                            keyboardType="numeric"
                            >
                        </TextInput>
                        <Text style={styles.text}>CAD</Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>



                <TouchableOpacity style={styles.sendBtn} onPress={()=>{navigation.navigate("CountrySelectionScreen")}}>
                    <Text style={styles.btnText}>Send Money Now</Text>
                </TouchableOpacity>
                
                <View style={styles.textContainer}>
                    <Icon name="shield" style={styles.shieldIcon} />
                    <Text style={styles.infoText1}>Be informed. Be aware.  
                        <Text style={styles.infoText2}> Protect yourself {'\n'}from fraud</Text>
                    </Text>
                </View>
               
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    homePage:{
        backgroundColor: "#ffdd00",
        alignItems:"center",
        height:"100%"
    },
    mainText:{
        fontWeight:"bold",
        color:"black",
        fontSize:35,
        paddingTop:"6%"
    },
    subText:{
        alignItems:"center",
        fontSize:15,
        paddingTop:"4%",
        padding:"5%",
        color:"black",
    },
    input1:{
        backgroundColor:"white",
        width:"85%",
        height:"8%",
        borderRadius:20,
        margin:"3%"
    },
    input2:{
        backgroundColor:"white",
        width:"85%",
        height:"8%",
        borderRadius:20,
    },
    sendBtn:{
        backgroundColor:"black",
        borderRadius:25,
        // width:"40%",
        // height:"7%",
        margin:30,
        alignSelf:"flex-start"
    },
    btnText:{
        textAlign:"center",
        color:"#ffdd00",
        padding:15,
        fontWeight:"bold",
        fontSize:14
    },
    textContainer:{
        top:"-3%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignSelf:"flex-start",
        left:"3%",
    },
    shieldIcon:{
        color:"black",
        fontSize: 30,
    },
    infoText1:{
        fontWeight:"bold",
        left:"40%",
        color:"black",
    },
    infoText2:{
        fontWeight:"normal",
        textDecorationLine:"underline",
        color:"black",
    },

    txtInputcontainer: {
        marginTop:30,
        marginBottom:10,
        width:"83%"
        
      },
      AmountSection: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          width:"100%",
          borderRadius:15,
          padding:5
      },
      input: {
        color:'black',
        fontSize:25,
        marginLeft:10,
        fontWeight:'600',
        width:"65%"
      },
      text:{
        backgroundColor:'#fff',
        padding:5,
        borderRadius:5,
        paddingLeft:20,
        paddingRight:20,
        marginRight:5,
        marginBottom:3,
        fontSize:20,
        color:"#000"
      },
})

export default HomeScreen