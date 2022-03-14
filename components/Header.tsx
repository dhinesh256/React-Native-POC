import React from 'react'
import { StyleSheet, View,Image,TouchableOpacity ,Text,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuModal from './MenuModal';

type Props = {
    nav:any
}

const Header: React.FC<Props> = ({nav}) => {

    
    return (
            <View style={styles.headerBar}>

                {/* <TouchableOpacity onPress={()=>{nav.navigate("Home")}}>
                <Image style={styles.imageContainer} source={require('../assets/WU.png')}/>
                </TouchableOpacity> */}

                {/* <Image style={styles.imageContainer} source={require('../assets/WU.png')}/> */}


                <TouchableOpacity onPress={()=>{nav.navigate("Home")}}>
                <Text style={styles.logo}>\\WU</Text>
                </TouchableOpacity>
                
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
    imageContainer:{
        top:"4%",
        left:"4%",
        width:"5%",
        height:"20%"
    },
    
})