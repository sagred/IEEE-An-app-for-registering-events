import React from "react";
import { View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,Alert,Linking} from "react-native";
import data from '../Data'


const alert = () =>
Alert.alert(
  "Alert Title",
  "My Alert Msg",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);

const openURL = () => {
    Linking.openURL("https://forms.gle/y2HJzbVFACNWoNct5")
}
const Home = () => {
    return(
    
        <View style={styles.container}>

            <View style = {styles.title}>
                <Image source={require('./logo.png')} style = {{width:40,height:40}} />
                <Text style = {styles.titleText}>BMSIT IEEE Events</Text>
            </View>

            <ScrollView >
                    {data.map(a => {
                        return(
                            <View style = {styles.content} key = {a.id}>

                            <Image source={require('./1.jpeg')} style = {{width:145,height:200,margin:10}} />
                            <View style = {styles.contentInfo}>
                                <Text style = {{color:'white',fontWeight:'700',fontSize:18}}>{a.name}</Text>
                                <Text style = {{color:'white',fontSize:12,fontWeight:'600'}}>{a.description}</Text>
                                <Text style = {{color:'#ffd500',fontSize:12,fontWeight:'700'}}>{a.attra}</Text>
                                <Text style = {{color:'white',fontSize:12,fontWeight:'700'}}>Organized by: {a.by}</Text>
                                <Text style = {{color:'white',fontSize:12,fontWeight:'700'}}>Prize money: {a.prize}</Text>
                                <Text style = {{color:'white',fontSize:12,fontWeight:'700'}}>Deadline: {a.deadline}</Text>
                                <TouchableOpacity
                                    style={ {alignItems: "center",backgroundColor: "white",padding: 10,borderRadius:3,marginTop:5}}
                                    onPress={alert}
                                >
                                    <Text >Register Now</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        )
                    })}
            </ScrollView>
            
            
        </View>

    
) }
    
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
    },
    title: {
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        margin:'1%'
    },
    titleText: {
        color:'white',
        fontSize:30,
        fontWeight:'700'
    },
    content:{
        backgroundColor:'#1a1a1a',
        margin:10,
        display:'flex',
        flexDirection:'row',
        borderRadius:10,
        shadowColor:'white'
    },
    contentInfo:{
        flexDirection:'column',
        margin:5,
        width:'50%'
    }
});