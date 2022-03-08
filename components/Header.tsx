import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'



const Header: React.FC = () => {
    return (
            <View style={styles.headerBar}>
                <Text style={styles.logo}>\\WU</Text>
                <Icon name='bars' style={styles.barIcon} />
            </View>
    )
};

export default Header

const styles = StyleSheet.create({
    headerBar:{
        flexDirection:"row",
        backgroundColor:"black",
        height: "100%",
        width:"100%",
        justifyContent: "space-between"
    },
    logo:{
        color: "#ffdd00",
        fontSize:30,
        fontWeight:"bold",
        padding:10,
        
    },
    barIcon:{
        color: "#ffdd00",
        fontSize:35,
        padding:15,
    },
    
})