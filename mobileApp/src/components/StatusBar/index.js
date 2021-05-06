//import liraries
import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Color from '../../components/Colors'
// create a component
const Index = () => {
    return (
        <StatusBar translucent barStyle='light-content' backgroundColor={Color.darkBlue} />
    );
};


export default Index;
