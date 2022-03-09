import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , TextInput,FlatList ,TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView, Keyboard} from "react-native";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import CountryFlag from "react-native-country-flag";
import CountryData from '../data/countryDetails'
import TextBoxAmt from "./TextBoxAmt";

type countryProps = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
  selected:boolean;
}


const ModelComp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [searchInput, setSearchInput] = useState("")

  const [FilteredData, setFilteredData] = useState(CountryData)

  const [extraData, setExtraData] = useState(false)

  const [selectedState, setSelectedState] = useState({
    name:"",
    iso2:""
  })


  const changeSelected = (selected:countryProps) => {

    const selectedData = FilteredData
    selectedData.map((data,index) => {
        if(data.iso2 === selected.iso2) {
            data.selected = true
            setSelectedState({
              name:data.name,
              iso2:data.iso2
            })
        }else{
            data.selected= false
        }   
        return {...data}
    })
    setFilteredData(selectedData)
    // console.log(selectedData===FilteredData)


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

  const renderItemView = (item:countryProps) => (
    <TouchableOpacity
        onPress={()=>{
            changeSelected(item)
            setExtraData(!extraData)
            setModalVisible(false)
        }}

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
    <KeyboardAvoidingView>
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback>
              <View style={styles.centeredView}>
              <FlatList
                    data={FilteredData}
                    keyExtractor={(item,index) => index.toString()}
                    ItemSeparatorComponent = {ItemSeperatorView}
                    renderItem={({item}) => renderItemView(item)}
                    style={{marginTop:340,elevation:3,margin:10,backgroundColor:'#fff',height:"40%"}}
                    extraData={extraData}
              />
              </View>
        </TouchableWithoutFeedback>
        
      </Modal>
          <View>
              <View style={styles.searchBarContainer}>

                    <CountryFlag isoCode={selectedState.iso2} size={15} style={styles.flagInput}/>

                    <TextInput
                    style={styles.searchBar}
                    // value= {selectedState}
                    placeholder='search here'
                    onChangeText={(text) => searchFilter(text)}
                    onFocus={()=>{
                      setModalVisible(true)
                      // setSelectedState("")
                    }
                    }
                    />
                    <Pressable style={{padding:5,marginRight:15}}>
                      {modalVisible ?  <Icon name="chevron-up" size={20} color="blue" onPress={() => setModalVisible(false)} /> :
                        <Icon name="chevron-down" size={20} color="blue"  onPress={() => setModalVisible(true)} />}
                    </Pressable>

              </View>
          </View>

              <TextBoxAmt/>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 29
  },
  modalView: {
    margin: 70,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  searchBarContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:50,
    // marginLeft:0,
    width:"70%",
    
},
searchBar:{
    width:"100%",
    color:'black',
    fontSize:15,
    fontWeight:'600', 
    // transform: [
    //   { scaleX: 45 },
    //   { scaleY: 45 }
    // ] 
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
flagInput:{
  borderRadius:100,
  marginLeft:5,
  marginRight:5,
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
});

export default ModelComp;