import { View, Text ,StyleSheet , Modal, TouchableOpacity, TouchableWithoutFeedback , FlatList, TouchableHighlight,Pressable} from 'react-native'
import React ,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const MenuModal = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const options = ["Send money" , "Track and transfer" , "Find locations", "Help" , "Profile",
                  "History","Resend" , "My Wu" , "My Receivers" , "Settings"]

  const renderItemView = (item:String) => {
      return(
        <TouchableHighlight 
        underlayColor="#515152"
        activeOpacity={1}
        onPress={()=>{console.log("clicked")}}>
          <Text style={styles.FLtext}>
              {item}
          </Text>
        </TouchableHighlight>
      )
  }

  return (
    <View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}

      >
      <TouchableWithoutFeedback onPress={()=>{
        setModalVisible(!modalVisible)
      }}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                    <View style={styles.topContainer}>
                          <TouchableOpacity
                            style={styles.lgnButton}
                            onPress={() => {}}
                            activeOpacity={0.8}
                          >
                          <Text style={styles.textStyle}>Login</Text>
                          </TouchableOpacity>
                          
                          <TouchableOpacity
                            style={styles.rgrButton}
                            onPress={()=>{}}
                            activeOpacity={0.8}
                          >
                          <Text style={styles.textStyle}>Register</Text>
                          </TouchableOpacity>
                    </View>
                    <FlatList
                        data={options}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({item}) => renderItemView(item)}
                        style={{margin:10,marginBottom:10}}
                    />
                    <View style={{flexDirection:"row", justifyContent:"space-between",marginLeft:40,marginTop:0}}>
                      <Text style={{color:"white"}}>
                          EN
                      </Text>
                      <Icon name={"chevron-right"} color={"white"} size={24}/>
                    </View>
              </View>
            </View>

      </TouchableWithoutFeedback>
       
      </Modal>

      {modalVisible ? <Icon name='close' color={'#ffdd00'}  style={styles.barIcon} onPress={()=>setModalVisible(false)}/> : <></> }
      {!modalVisible ? <Icon name='bars' style={styles.barIcon} onPress={()=>setModalVisible(true)}/>  : <></>} 
    </View>
  )
}

export default MenuModal

const styles = StyleSheet.create({
  barIcon:{
      color: "#ffdd00",
      fontSize:35,
      padding:15,
  },

  centeredView: {
    // flex: 1,
    justifyContent: "center",
    
  },
  modalView: {
    marginTop:40,
    backgroundColor: "black",
    // padding: 20,
    width:"100%",
    height:"90%"

  },
  topContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:0.8,
    borderBottomColor:"#fff",
    padding:5
  },
  lgnButton: {
    textAlign:"center",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal:35,
    elevation: 2,
    borderColor:"#ffdd00",
    borderWidth:3,
    marginLeft:20,
    marginBottom:20,
    marginTop:20
  },
  rgrButton: {
    textAlign:"center",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal:35,
    elevation: 2,
    // borderColor:"#ffdd00",
    borderWidth:3,
    marginRight:20,
    marginBottom:20,
    marginTop:20
  },
  textStyle: {
    color: "#ffdd00",
    fontWeight: "normal",
    fontSize:19,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  FLtext:{
    marginLeft:15,
    padding:14,
    color:"#fff",
    width:"80%",
  }
  
})
