import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import { SliderPicker } from 'react-native-slider-picker';

const Index = ({navigation}) => {
    const [SliderValue, setSliderValue] = useState(0)



    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                onPress1={() => navigation.goBack()}
                backgroundColor={Color.darkBlue}
                text='COMMUNITY'
                textColor={Color.White}
                fontSize={25}

            />
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}> SYRINGOMYELIA </Text>
            </View>
            <View style={{ padding: 20 }}>
                <Image
                    resizeMethod='auto'
                    style={{ width: 70, height: 70, }}
                    resizeMode='contain'
                    source={require('../../components/images/usericon.png')}
                />

            </View>
            <View style={styles.bodyView}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.text}>YOU CAME IN AT A 4 AND SPENT 30 MINUTES IN COMMUNITY ARE YOU FEELING BETTER?</Text>
                    <Text style={styles.text}>Y/N</Text>
                    <Text style={styles.text}>IF YES, PLEASE RATE YOUR EMOTIONAL MIND STATE</Text>
                </View>


                <View>
                    <SliderPicker
                        maxValue={10}
                        callback={position => setSliderValue(position)}
                        defaultValue={SliderValue}
                        labelFontColor={"#6c7682"}
                        labelFontWeight={'600'}
                        showFill={true}
                        fillColor={'green'}
                        showNumberScale={true}
                        showSeparatorScale={true}
                        buttonBackgroundColor={'#fff'}
                        buttonBorderColor={"#6c7682"}
                        buttonBorderWidth={1}
                        scaleNumberFontWeight={'300'}
                        buttonDimensionsPercentage={6}
                        heightPercentage={1}
                        widthPercentage={80}
                    />
                </View>
                <View style={styles.showValueView}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{SliderValue}</Text>

                </View>
                <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttontext}>SUBMIT</Text>
                </TouchableOpacity>



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
    headerTextView: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#8BC8F2',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bodyView: {
        flex: 1,
    },
    text: {
        fontSize: 15,
        fontWeight: '600'
    },
    showValueView: {
        width: '40%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.White
    },
    button: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 70,
        backgroundColor:Color.White
    },
    buttontext:{
        color:'green',
        fontSize:20,
        fontWeight:'600'
    }
});

//make this component available to the app
export default Index;
