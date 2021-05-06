//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
import CheckBox from '../../components/CheckBox'
const search2x = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({ navigation }) => {
    const [isVisible, setisVisible] = useState(false)


function SelectionFunc(){
    
   
}

    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={search2x}
                backgroundColor={Color.darkBlue}
                onPress={() => navigation.navigate('Education10')}
                text='PAIN EDUCATION'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}
            />
           
                <Text style={styles.headertext}>TYPES OF PAIN</Text>
                <ScrollView onResponderEnd={()=>setisVisible(true)}>
                <View style={styles.bodyView}>
                    <Text style={[styles.headertext, { alignSelf: 'flex-start', }]}>TYPES</Text>
                    <Text style={{ paddingLeft: 10 }} >Pain can be acute or chronic</Text>

                    <Text style={[styles.headertext, { alignSelf: 'flex-start', textAlign: 'left', fontSize: 16 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </Text>
                </View>
                {isVisible ?
                <View style={styles.whiteBackgroundView}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>HAVE YOU TRIED THIS? </Text>
                    <View style={styles.checkboxView}>
                        <CheckBox
                            text='Y'
                            value={''}
                            onValueChange={() => SelectionFunc()}

                        />
                        <CheckBox
                            text='N'
                            value={''}
                            onValueChange={() => { }}
                        />
                    </View>

                </View> : null}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headertext: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        fontWeight: '400',
        marginVertical: 10
    },
    bodyView: {
        flex: 1,


    },
    whiteBackgroundView: {
        backgroundColor: Color.White,
        position:'absolute',
        // zIndex:1,
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        width: '75%',
        bottom: 0,
        flexDirection: 'row',
        height: 50

    },
    checkboxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Index;
