/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Test from './components/Test'
import CountrySelection from './components/CountrySelection';
import EnterAmountScreen from './screens/EnterAmountScreen';
import EstimateDetails from './screens/EstimateDetails';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import DropdownComp from './DropdownComp';
import StepperComp from './stepper';

export type RootStackParams = {
  Home:undefined;
  CountrySelectionScreen:undefined;
  EnterAmountScreen:undefined;
  EstimateDetailsScreen:undefined;
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {

  return (<StepperComp/>)

  // return(<EstimateDetails/>)

  return (
    <NavigationContainer>
         <RootStack.Navigator screenOptions={{ header: ({navigation}) => {return (<Header nav={navigation}/>);}}} >
      
          <RootStack.Screen name="Home" component={HomeScreen}   />
          <RootStack.Screen name="CountrySelectionScreen" component={CountrySelection} />
          <RootStack.Screen name='EnterAmountScreen' component={EnterAmountScreen}/>
          <RootStack.Screen name='EstimateDetailsScreen' component={EstimateDetails} />

         </RootStack.Navigator>
    </NavigationContainer> 
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

{/* <HomeScreen/> */}
{/* <ButtonComp name="click"/>
<TextBoxAmt/> */}
{/* <ModelComp/> */}
{/* <CountrySelection/> */}
{/* <Test /> */}
{/* <EnterAmountScreen/> */}