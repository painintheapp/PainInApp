//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import Button from "../../components/Button2";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='MY JOURNAL'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
             <Image
                resizeMode='stretch'
                style={{ width: '100%', alignSelf: 'center', height: '20%' }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg' }}
            />
            <View style={styles.footerView}>
                <View>
                    <Button
                    onPress={()=>{}}
                    name='PAIN SYMTOMS'
                    onPress={()=>navigation.navigate('Frame4')}
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='BODY LOCATOR'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='TRIGGERS'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='PAIN SPECIALIST TREATMENT'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='ALTERNATIVE TREATMENTS'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='SELF TREATMENTS'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='MEDICATION'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='ACTIVITIES'
                    />
                </View>

                <View>
                    <Button
                    onPress={()=>{}}
                    name='RATE YOUR DAY'
                    />
                </View>

            </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Color.backGround
    },
    footerView:{
        flex:1,
        //justifyContent: 'center',
        alignItems: 'center',
        
    }
});

//make this component available to the app
export default Index;
