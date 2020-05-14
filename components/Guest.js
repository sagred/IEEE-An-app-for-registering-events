import React from "react";
import { View, Text, StyleSheet,Image, TextInput,TouchableOpacity,Linking} from "react-native";

const openURL = () => {
    Linking.openURL("https://www.ieee.org/membership/join/index.html")
}

const Benefits = () => {
    return (
      <View style = {styles.container}>
          <Image 
            source = {require('./logo.png')}
            style = {{width:120,height:120}}
          />
          <Text style = {{color:'white',fontSize:32,fontWeight:'700',margin:10}}>IEEE Login</Text>

          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "IEEE id...."
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    style = {{color:'white'}}
                />
          </View>

          <View style = {{width:'90%',marginTop:20}}>
            <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = "#8a8a8a"
                    underlineColorAndroid = "white"
                    secureTextEntry = {true}
                    style = {{color:'white'}}
                />
          </View>
            
            <View style = {{marginTop:30}}>
            <TouchableOpacity
                style={ {alignItems: "center",backgroundColor: "#988fff",padding:10,paddingLeft:100,paddingRight:100,borderRadius:2,marginTop:5}}
                onPress={openURL}
            >
                    <Text style = {{fontWeight:'700'}}>Log In</Text>
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

export default Benefits;