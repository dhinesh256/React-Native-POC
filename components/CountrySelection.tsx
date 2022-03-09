import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput ,Modal} from 'react-native'
import React , {useState} from 'react'
import CountryFlag from "react-native-country-flag";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import CountryData from '../data/countryDetails'
import ButtonComp from './ButtonComp';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type countryProps = {
        name: string;
        flag: string;
        iso2: string;
        iso3: string;
        selected:boolean;
}

type Props = {
    navigation:any;
}

const CountrySelection = ({navigation}:Props) => {


    const [searchInput, setSearchInput] = useState("")

    const [isEmpty, setisEmpty] = useState(true)

    const [FilteredData, setFilteredData] = useState(CountryData)

    const [extraData, setExtraData] = useState(false)

    const [displayButton, setDisplayButton] = useState(false)

    const buttonPress = (navigation:any,name:String) => {
        setDisplayButton(false)
        navigation.navigate(name)
    }

    const displayView = () => {
        if(searchInput===""){
            setisEmpty(true)
        }
        else{
            setisEmpty(false)
        }
    }
    
    const searchFilter = (text:string) => {
        if(text){
            const newData = CountryData.filter((data) => {
                const itemValue = data.name.toUpperCase() 
                const textValue = text.toUpperCase()
                return itemValue.indexOf(textValue) > -1 
            })
            setFilteredData(newData)
            setSearchInput(text)
        }
        else{
            setFilteredData(CountryData)
            setSearchInput(text)
        }
    }

    const changeSelected = (selected:countryProps) => {

        
        const selectedData = FilteredData
        selectedData.map((data,index) => {
            if(data.iso2 === selected.iso2) {
                data.selected = true
            }else{
                data.selected= false
            }   
            return {...data}
        })
        // console.log(selectedData)
        setFilteredData(selectedData)
        console.log(selectedData===FilteredData)

        // console.log(selected)

    }

    const renderItemView = (item:countryProps) => (
        <TouchableOpacity
            onPress={()=>{
                // setFilteredData(FilteredData)
                // item.selected = true
                
                changeSelected(item)
                setExtraData(!extraData)
                setDisplayButton(true)
                
                // console.log(newD)
                // setFilteredData(newD)
                // console.log(selected===item.iso2)
                // setFilteredData(FilteredData)
            }
            
            }
            style={[item.selected ? styles.container : {}]} 
        >
        <View style={styles.nationsContainer}>
            <CountryFlag isoCode={item.iso2} size={25} style={styles.flag} />
            
            <Text style={styles.nationName}> {`${item.name}`} </Text>

            {item.selected ? <Icon name="check-circle" size={25} color="green" /> : <></>}
        </View> 
        </TouchableOpacity>
             
      )

    const ItemSeperatorView = () => {
        return (
            <View 
            style={{height:10 , width:'100%' , backgroundColor:'white'}}
            />
        )
    }

  return (
      <View style={styles.sView}>
          <View >
                    <View style={styles.searchBarContainer}>
                            <TextInput
                            style={styles.searchBar}
                            value= {searchInput}
                            placeholder='search here'
                            onChangeText={(text) => searchFilter(text)}
                            />
                            <Icon name="search" size={25} color="blue" />

                    </View>

              <Modal
                animationType="fade"
                transparent={true}
                visible={displayButton}
                onRequestClose={() => {
                    setDisplayButton(!displayButton)
                }}>
                    
                            <View style={styles.bottomView}>
                            <ButtonComp name={"EnterAmountScreen"} text={"continue"} navigation={navigation} 
                            onPress={()=>buttonPress(navigation,"EnterAmountScreen")}/>
                            </View>
              </Modal>
              <Text>{displayButton?"hello":"bye"}</Text>
              <FlatList
              data={FilteredData}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent = {ItemSeperatorView}
              renderItem={({item}) => renderItemView(item)}
              style={{margin:10,marginBottom:10}}
              extraData={extraData}
              
              />

              {/* {displayButton ? 
                 <View style={styles.bottomView}>
                 <ButtonComp name={"EnterAmountScreen"} text={"continue"} navigation={navigation} onPress={()=>buttonPress(navigation,"EnterAmountScreen")}/>               
                 </View>
                : <></>
                } */}
              
          </View>
      </View>
  )
}

export default CountrySelection;

const styles = StyleSheet.create({
    sView:{
        // flex:1,
        paddingBottom:10
    
    },
    container:{
        backgroundColor:'#8bd683',
        borderRadius:10
    },
    flag:{
        borderRadius:90,
        marginLeft:10,
        marginRight:40,
    },
    nationsContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:5,
    },
    nationName:{
        width:"65%",
    },
    searchBarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft:30,
        width:"70%",
        borderBottomColor:"#c8c8c8",
        borderBottomWidth:1
    },
    searchBar:{
        width:"100%",
        color:'black',
        fontSize:15,
        fontWeight:'600',
    },
    bottomView: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        
        position: 'absolute', 
        bottom: 0, 
      }
    
})