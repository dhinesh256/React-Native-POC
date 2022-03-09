import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuModal from './MenuModal';



const Header: React.FC = () => {
    return (
            <View style={styles.headerBar}>
                <Text style={styles.logo}>\\WU</Text>
                {/* <Icon name='bars' style={styles.barIcon} /> */}
                <MenuModal/>
            </View>
    )
};

export default Header

const styles = StyleSheet.create({
    headerBar:{
        flexDirection:"row",
        backgroundColor:"black",
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