//import liraries
import React, { Component,useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Button2 from "../../components/Button";
import Button3 from "../../components/Button3";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'

const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')


const Index = ({ navigation }) => {
    const [Data, setData] = useState('')
    function CommonFunc(value) {
        setData(value)

    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='PAIN IN THE APP'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <View style={styles.headerVoew}>
                <Text style={styles.headerText}>Please rate your overall pain for the day</Text>
            </View>
            <View style={styles.bodyView}>
                <View style={styles.iconView}>
                    <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/NoPain.png')}
                    />
                    <Button3
                    
                    onPress={()=>CommonFunc('No Pain')}
                        name='No Pain'
                    />

                </View>

                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/MildPain.png')}
                    />
                    <Button3
                        name='Mild Pain'
                        onPress={()=>CommonFunc('Mild Pain')}
                    />

                </View>

                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/uncomfortable.png')}
                    />
                    <Button3
                        name='Uncomfortable Pain'
                        onPress={()=>CommonFunc('Uncomfortable Pain')}
                    />

                </View>
                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/Moderate.png')}
                    />
                    <Button3
                        name='Moderate Pain'
                        onPress={()=>CommonFunc('Moderate Pain')}
                    />

                </View>
                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/SeverePain.png')}
                    />
                    <Button3
                        name='Severe Pain'
                        onPress={()=>CommonFunc('Severe Pain')}
                    />

                </View>
                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/SeverePain.png')}
                    />
                    <Button3
                        name='Very Severe Pain'
                        onPress={()=>CommonFunc('Very Severe Pain')}
                    />

                </View>
                <View style={styles.iconView}>
                <Image
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }}
                        source={require('../../components/images/WorstPain.png')}
                    />
                    <Button3
                        name='Worst Severe Pain'
                        onPress={()=>CommonFunc('Worst Severe Pain')}
                    />

                </View>
                
            </View>
            <View style={[styles.headerVoew, { backgroundColor: '#7FF68F' }]}>
                <Text style={styles.headerText}>You have chosen "{Data}"</Text>

            </View>
            <View style={{marginTop: 30, bottom:20, }}>
                <Button2
                    name='Next'
                    alignSelf='center'
                    color={Color.White}
                    onPress={() => navigation.navigate('Frame30')}
                    backgroundColor={Color.darkBlue}
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
    bodyView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30

    },
    headerVoew: {
        marginVertical: 10,
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#70E8F7'
    },
    headerText: {
        fontSize: 18
    },
    iconView: {
        width: '60%',
        flexDirection: 'row',
        marginVertical:10,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',

    }
});

//make this component available to the app
export default Index;
