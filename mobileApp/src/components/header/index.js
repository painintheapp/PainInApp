//import liraries
import React, { Component } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';


const Index = (props) => {
    return (
        <View style={[styles.container,{backgroundColor:props.backgroundColor,}]}>
            <View style={styles.headerView}>
            <TouchableOpacity onPress={props.onPress1} >
                <Image
                source={props.image}
                style={{width:30,height:30}}
                />
            </TouchableOpacity>
            <Text style={{ fontWeight:'600', color:props.textColor,fontSize:props.fontSize}}>{props.text}</Text>
            <TouchableOpacity onPress={props.onPress} >
            <Image
                source={props.image2}
                style={{width:30,height:30}}
                />


            </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 10,
        height:'11%',
        justifyContent: 'center',
        alignItems: 'center',

    },
  
    headerView:{
        width:'90%',
        marginTop:20,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        
    }
});

//make this component available to the app
export default Index;
