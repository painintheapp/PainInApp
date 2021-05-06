//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// create a component
const Index = (props) => {
    return (
        <View style={styles.CheckBoxView}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical:10,
                        overflow:'hidden'
                    }}>
                        <CheckBox
                            style={{
                                marginRight:15
                            }}
                            disabled={false}
                            value={props.value}
                            lineWidth={2}
                            onCheckColor={Color.lightblue}
                            tintColor={Color.darkBlue}
                            boxType='square'
                            onValueChange={props.onValueChange}
                        />

                        <Text style={styles.text}>{props.text}</Text>
                  
                    </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    text:{
        fontSize:18
    }


})

export default Index;
