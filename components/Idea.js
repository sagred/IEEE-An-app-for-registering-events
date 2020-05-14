import React from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity,Linking} from "react-native";

const openURL = () => {
    Linking.openURL("https://bmsit.ac.in/")
}

const Idea = () => {
    return (
      <View style = {styles.container}>
          
          <Text style = {{color:'white',fontSize:32,fontWeight:'700',margin:10}}>IEEE Ideas</Text>

          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Name..."
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>
          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "USN and SEMISTER"
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>
          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Email..."
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>
          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Phone No..."
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>
          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Idea...??"
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>
          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Link...(if any)"
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>

            
            <View style = {{marginTop:30}}>
            <TouchableOpacity
                style={ {alignItems: "center",backgroundColor: "#988fff",padding:10,paddingLeft:100,paddingRight:100,borderRadius:2,marginTop:5}}
                onPress={openURL}
            >
                    <Text style = {{fontWeight:'700'}}>Submit</Text>
                </TouchableOpacity>
            </View>

      </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
});

export default Idea;