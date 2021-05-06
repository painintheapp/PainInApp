//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const Index = ({ radio_props, onReadioSelect }) => {
    return (
        <View style={styles.container}>
            <View style={styles.radioView}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={onReadioSelect}
                    
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    radioView: {
        width: '80%',
        
        alignSelf: 'center',
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 20
    }
});

//make this component available to the app
export default Index;
