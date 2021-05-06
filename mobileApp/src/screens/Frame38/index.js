//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Button from "../../components/Button4";
import StatusBar from '../../components/StatusBar'
import Color from '../../components/Colors'
const search2x = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={search2x}
                backgroundColor={Color.darkBlue}
                text='PAIN EDUCATION'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}
            />
            <Text style={styles.headertext}>INTRO TO PAIN</Text>

            <View style={styles.bodyView}>
                <View style={styles.buttonView}>
                    <Button
                        onPress={() => { }}
                        name='DEFINATION'

                    />
                    <Button
                        onPress={() => navigation.navigate('Frame39') }
                        name='CAUSES'

                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress={() => { }}
                        name='TYPES OF PAIN'

                    />
                    <Button
                        onPress={() => { }}
                        name='HISTORY'
                        numberOfLines={2}


                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress={() => { }}
                        name='DIAGONOSIS'

                    />
                    <Button
                        onPress={() => { }}
                        name='NEXT STEPS'

                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress={() => { }}
                        name='TRIGGERS'

                    />
                    <Button
                        onPress={() => { }}
                        name='TREATMENTS'

                    />
                </View>



            </View>
            {/* <TouchableOpacity style={styles.conditionButton}>
                    <Text style={styles.conditionButtontext}>GO TO MY CONDITION(S)</Text>
                </TouchableOpacity> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headertext:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        marginTop:20
    },
    bodyView: {
        flex: 1,
        marginTop: 20,
        
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    conditionButton:{
        alignSelf: 'center',
        backgroundColor:Color.White,
        padding: 20,
        width:'80%',
        bottom:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conditionButtontext:{
        fontSize:18,
        color:'green',
        fontWeight:'600'
    }


});

//make this component available to the app
export default Index;
