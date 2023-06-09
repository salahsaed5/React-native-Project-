import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react'


const GetStart3 = ({ navigation }) => {
  const image = require("../assets/GetStart3.png");
  const imagee = require("../assets/buttons/GetStartBTN.png");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.Background}>
        <TouchableOpacity onPress={() => navigation.push('Login')} >
          <ImageBackground source={imagee} style={styles.btn}>

          </ImageBackground>

        </TouchableOpacity>
      </ImageBackground>



    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Background: {

    // justifyContent: 'flex-end',
    width: '100%',
    height: '100%',

  },
  btn: {
    width: "80%",
    // backgroundColor:Colors.primary ,
    height: "20%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "19%",
    marginVertical: "150%",
    borderRadius: 55,
  },

});

export default GetStart3