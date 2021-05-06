//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const Index = (props) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={props.onPress} style={styles.container}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
       
    );
};


 export const PainLessButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={props.onPress}  style={props.styles}>
            <Text style={[styles.mybuttonText,{textAlign: props.textAlign}]}>{props.name}</Text>
        </TouchableOpacity>
       
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'flex-start',
      
    },
    buttonText:{
        fontSize:18,
        marginLeft:40,
        fontWeight:'400'
    },
    mybuttonText:{
        fontSize:17,
        fontWeight:'500'
    }
});

//make this component available to the app
export default Index;
