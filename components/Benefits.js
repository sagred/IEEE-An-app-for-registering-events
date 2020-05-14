import React from "react";
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Linking} from "react-native";
import data from './benefitsofIEEE'

const openURL = () => {
    Linking.openURL("https://www.ieee.org/membership/join/index.html")
}

const Benefits = () => {
    return (
      <View style = {styles.container}>
          <Text style = {{color:'#fbff00',fontSize:32,fontWeight:'700'}}>IEEE Benefits</Text>
          <ScrollView>
            <View style = {{margin:10}}>
                {data.map(a => {
                    return(
                        <Text style = {styles.text} key = {a.id}>{a.point}</Text>
                    )
                })}
            </View>
          </ScrollView>

            <View style = {styles.button}>
            <TouchableOpacity
                style={ {alignItems: "center",backgroundColor: "#988fff",padding: 10,borderRadius:20,marginTop:5}}
                onPress={openURL}
            >
                    <Text style = {{fontWeight:'700'}}>Join IEEE</Text>
                </TouchableOpacity>
            </View>

      </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'black'
    },
    text: {
        color:'white',
        fontSize:14,
        fontWeight:'700',
        marginTop:10
    },
    button: {
        position:'absolute',
        marginTop:'150%',
        paddingLeft:'60%'
    }
});

export default Benefits;