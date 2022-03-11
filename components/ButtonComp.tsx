import { View, Text, Pressable, StyleSheet , TouchableOpacity} from 'react-native'
import React  from 'react'

type buttonProps = {
    text :String;
    name? : String;
    navigation? : any ;
    onPress? : () => void;
}
//:React.FC<buttonProps>
const ButtonComp = (props:buttonProps) => {

    const {name , navigation , text , onPress} = props;
    return(
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.pressable}
          onPress={onPress? onPress : () => navigation.navigate(name)}
        >
          <Text style={styles.text}>
            {`${text}`}
          </Text>

        </TouchableOpacity>
    </View>
)}


const styles = StyleSheet.create({
  container : {
    borderRadius:60,
    marginLeft:45
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
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: "#000",
  },

})

export default ButtonComp;


