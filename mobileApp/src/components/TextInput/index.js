//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextInputs = (props) => {
    return (
        <TextInput
            {...props}
        />
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default TextInputs;
