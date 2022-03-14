import { View, Text, SafeAreaView, StyleSheet, FlatList,SectionList , TouchableOpacity, TextInput , ScrollView } from 'react-native'
import React , {useState} from 'react'
import CountryFlag from "react-native-country-flag";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import CountryData from '../data/countryDetailsSL'
import ButtonComp from './ButtonComp';

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

const CountrySelectionList = ({navigation}:Props) => {

    const [FilteredData, setFilteredData] = useState(CountryData)

    const [displayButton, setDisplayButton] = useState(false)

    const [extraData, setExtraData] = useState(false)

    const buttonPress = (navigation:any,name:String) => {
        setDisplayButton(false)
        navigation.navigate(name)
    }

    const changeSelected = (Selected:countryProps) => {

        const selectedData = CountryData
        selectedData.map(({data},index) => {


            data.map((item) => 
            {
                // console.log(index)
                // console.log(item)
                // console.log(Selected)

                if( item.iso2 === Selected.iso2 ){
                item.selected = true 
                }else{
                    item.selected = false
                }
                console.log(item)
                return {...item}
            })

            return {...data}          
            
        })
        // console.log(selectedData[0])
        setFilteredData(selectedData)
    }

    const renderItemView = (item:countryProps) => (
        <TouchableOpacity
            onPress={()=>{
                changeSelected(item)
                setDisplayButton(true)
                setExtraData(!extraData)
            }
            }
            style={[item.selected ? styles.container : {}]}
        >
        <View style={styles.nationsContainer}>
            <CountryFlag isoCode={item.iso2} size={25} style={styles.flag}/>
            
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
            
            <SectionList
            sections={FilteredData}
            keyExtractor={(item,index) => index.toString()}
            ItemSeparatorComponent = {ItemSeperatorView}
            renderItem={({item}) => renderItemView(item)}
            extraData={extraData}
            renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
            )}
        
            style={displayButton ? {margin:10,marginBottom:70} : {margin:10,marginBottom:0}}
            />   

            {displayButton ? 
                <View style={styles.bottomView}>
                <ButtonComp name={"EnterAmountScreen"} text={"continue"} navigation={navigation} onPress={()=>buttonPress(navigation,"EnterAmountScreen")}/>               
                </View>
                
            : <></>
        }           
          </View>
          
  )
}

export default CountrySelectionList;

const styles = StyleSheet.create({
    sView:{
        flex:1,
        paddingBottom:10,
        height:"100%",
        backgroundColor:"#fff"
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
        // backgroundColor: '#fff',
        marginLeft:30,
        width:"80%",
        borderBottomColor:"#c8c8c8",
        borderBottomWidth:2
    },
    searchBar:{
        marginLeft:10,
    
    },
    header: {
        fontSize: 18,
        color: "#000",
        padding:3,
        fontWeight:"bold",
        marginTop:10,
        marginBottom:15,
    },
    bottomView: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        position: 'absolute', 
        bottom: 0, 
        zIndex:1
    }
})