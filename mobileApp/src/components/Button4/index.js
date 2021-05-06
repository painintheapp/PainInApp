//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../components/Colors'
// create a component
const Inex = (props) => {
    return (
        
           <TouchableOpacity activeOpacity={.7} onPress={props.onPress} style={styles.button}>
               <Text numberOfLines={props.numberOfLines}  {...props} style={styles.buttonText}>{props.name}</Text>
           </TouchableOpacity>
        
    );
};

// define your styles
const styles = StyleSheet.create({
   
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'49%',
        height:80,
        backgroundColor:Color.White

    },
    buttonText:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'400'
    }
});

//make this component available to the app
export default Inex;
