//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from '../TextInput'
import Color from '../../components/Colors'

const Index = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.HeaderText}>{props.name}</Text>
                <View style={styles.inputView} >
                    <TextInput
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    Value={props.Value}
                    autoCorrect={false}
                    keyboardType={props.keyboardType}
                    style={{width:'90%', height:50}}
                    />
                </View>


            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:20

    },
    inputView: {
        width: '50%',
        backgroundColor:Color.White,
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderText:{
        fontSize:20,
        fontWeight:'400'
    }
});


export default Index;
