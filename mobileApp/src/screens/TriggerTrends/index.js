//import liraries
import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Button from "../../components/Button2";
import Color from '../../components/Colors'
const search2x = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <HeaderView
                image={backArrow}
                image2={search2x}
                backgroundColor={Color.darkBlue}
                text='MY JOURNAL'
                onPress1={()=>navigation.goBack()}
               // onPress1={() => navigation.navigate('')}
                textColor={Color.White}
                fontSize={25}

            />
             <Image
                resizeMode='stretch'
                style={{ width: '100%', alignSelf: 'center', height: '20%' }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg' }}
            />
            <View style={styles.bodyView}>
                <Text style={styles.headertext}> TRIGGER TRENDS</Text>
                <Button
                onPress={()=>{}}
                name='EMOTIONAL ANXIETY'
                />
                 <Button
                onPress={()=>{}}
                name='PHYSICAL STRESS'
                />
                 <Button
                onPress={()=>navigation.navigate('SleepingHabits')}
                name='SLEEPING HABITS'
                />
                 <Button
                onPress={()=>{}}
                name='TEMPRETURE SWINGS'
                />
                 <Button
                onPress={()=>{}}
                name='OVEREXERTION'
                />
                 <Button
                onPress={()=>{}}
                name='INFLAMMATORY FOODS'
                />
               

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
    bodyView:{
        flex: 1,
        alignItems: 'center',
    },
    headertext:{
        fontSize:20,
        marginVertical:20,
        fontWeight:'600'
    }
});

//make this component available to the app
export default Index;
