import { View, Text, Pressable, StyleSheet} from 'react-native'
import React  from 'react'

type buttonProps = {
    text? :String;
    name : String;
    navigation? : any ;
}
//:React.FC<buttonProps>
const ButtonComp = (props:buttonProps) => {

    const {name , navigation , text} = props;
    return(
    <View style={styles.container}>
      <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate(name)}
        >
          <Text style={styles.text}>
            {`${text}`}
          </Text>

        </Pressable>
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
    fontSize: 25,
    fontWeight: '600',
    color: "#000",
  },

})

export default ButtonComp;


