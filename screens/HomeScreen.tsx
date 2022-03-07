import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from "../components/Header";
import ModelComp from "../components/ModalComp";


const HomeScreen: React.FC = ()=>{
    return(
        <View>
            <Header/>
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
                <TouchableOpacity style={styles.sendBtn}>
                    <Text style={styles.btnText}>Send Money Now</Text>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Icon name="shield" style={styles.shieldIcon}/>
                    <Text style={styles.infoText1}>Be informed. Be aware.  
                        <Text style={styles.infoText2}> Protect yourself {'\n'}from fraud</Text>
                    </Text>
                </View>
            </View>
        </View>
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
        width:"40%",
        height:"7%",
        margin:30,
        alignSelf:"flex-start"
    },
    btnText:{
        color:"#ffdd00",
        padding:18,
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
    }
})

export default HomeScreen