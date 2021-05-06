//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const Index = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={.7} style={[styles.button,{...props}]} >
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    button:{
      marginVertical:5,
        justifyContent: 'center',
        alignItems: 'center',
        height:45
    },
    text:{
        fontSize:20
    }
   
});

//make this component available to the app
export default Index;
