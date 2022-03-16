import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Stepper = () => {
  return (
    <View style={{ flex:1, margin:20 , width:8}}>
      <View style={styles.verticalLine}> 
      </View>
            <View style={styles.itemWrap}>
                <View style={styles.firstPoint}></View>
                <View style={[styles.currentPoint]}></View>
                <View style={styles.firstPoint}></View>
                <View style={styles.firstPoint}></View>
            </View>
    </View>
);
};


const styles = StyleSheet.create({
  verticalLine: {
    backgroundColor: '#c8c8c8',
    width: 2.7,
    height: '68%',
    position: 'absolute',
    marginLeft: 3,
  },
  itemWrap: {
    marginTop:10,
    justifyContent: 'space-between',
  },
  firstPoint: {
    backgroundColor: '#c8c8c8',
    borderRadius: 20,
    height:10,
    width:10,
    marginBottom:15,
  },
  currentPoint: { 
      backgroundColor: 'black',
      borderRadius: 20,
      height:10,
      width:10,
      marginBottom:15,
     },
});

export default Stepper;
