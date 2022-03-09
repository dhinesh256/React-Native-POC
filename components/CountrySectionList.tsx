import { View, Text, SafeAreaView, StyleSheet, FlatList,SectionList , TouchableOpacity, TextInput } from 'react-native'
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

const CountrySelection = () => {

    const [searchInput, setSearchInput] = useState("")

    const [FilteredData, setFilteredData] = useState(CountryData)

    // const [selected, setSelected] = useState("IN")

    const searchFilter = (text:string) => {
        if(text){
            const newData = CountryData.filter(({data},index) => {
                const itemValue = data[index].name.toUpperCase() 
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
        selectedData.map(({data},index) => {
            data[index].iso2 === selected.iso2 ? data[index].selected==true : data[index].selected==false
        })
        console.log(selectedData)
        // setFilteredData(selectedData)
        return selectedData;

        // console.log(selected)

    }

    const renderItemView = (item:countryProps) => (
        <TouchableOpacity
            onPress={()=>{
                // setFilteredData(FilteredData)
                // item.selected = true
                
                
                // const newD = changeSelected(item)
                // console.log(newD)
                // setFilteredData(newD)
                // console.log(selected===item.iso2)
                // setFilteredData(FilteredData)
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
      <SafeAreaView style={styles.sView}>
          <View>
              <TextInput
              style={styles.searchBar}
              value= {searchInput}
              placeholder='search here'
              onChangeText={(text) => searchFilter(text)}/>


              <SectionList
              sections={FilteredData}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent = {ItemSeperatorView}
              renderItem={({item}) => renderItemView(item)}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            //   renderSectionFooter={()=>{
            //     return (<ButtonComp name={"continue"}/>)
            //   }}
              style={{margin:10}}
              />

              
          </View>
      </SafeAreaView>
    
  )
}

export default CountrySelection;

const styles = StyleSheet.create({
    sView:{
        // flex:1,
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
    searchBar:{
        margin:10,
        borderBottomColor:"#c8c8c8",
        borderBottomWidth:2
    },
    header: {
        fontSize: 18,
        color: "#000",
        padding:3,
        marginTop:7
    },
})