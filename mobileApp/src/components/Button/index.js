//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const Index = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} disabled={props.disabled} onPress={props.onPress} style={[styles.Button, { backgroundColor: props.backgroundColor, alignSelf: props.alignSelf, }]}>
            <Text style={[styles.buttontext,{color:props.color}]}>{props.name}</Text>

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    Button: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 50,
        borderRadius: 10,

    },
    buttontext: {
        fontSize: 20,
        // color: Color.White
    }
});

//make this component available to the app
export default Index;
