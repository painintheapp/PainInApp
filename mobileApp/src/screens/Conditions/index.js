
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const setting = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const data = [
    'Acute Pain',
    'Addiction',
    'Addvanced Prostate Cancer',
    'AIDS-Related Pain',
    'Ankylosing Spondylitis',
    'Arachnoiditis',
    'Arthritis',
    'Arthrofibroisis',
    'Ataxic Cerebral Palsy'

]

const Index = ({ navigation }) => {

    const [myData, setmyData] = useState(data)
    const [searchResult, setsearchResult] = useState(false)

    function SerachText (text) {
       const SelctedData=myData.filter(item=>item.toLowerCase()===text.toLowerCase())


       console.log('=========SelctedData========',SelctedData)
        setmyData(SelctedData)
        setsearchResult(true)
    }

    return (
        <View style={styles.container}>
            <StatusBar />

            <HeaderView
                backgroundColor={Color.darkBlue}
                text='CONDITIONS'
                fontSize={30}
                textColor={Color.White}
                onPress1={() => navigation.goBack()}
                image={backArrow}
                image2={setting}
            />
            
            <View style={styles.searchView}>
                <TouchableOpacity >
                    <Image
                        source={require('../../components/images/search.png')}
                        style={{ width: 30, height: 30 }}
                    />

                </TouchableOpacity>
                <TextInput
                    placeholder='Search'
                    placeholderTextColor='#000'
                    autoCorrect={false}
                    style={styles.TextInput}
                    onChangeText={(text) => SerachText(text)}
                />

            </View>
            {
                searchResult ? <View style={styles.searchingResultView}>
                    <TouchableOpacity  onPress={() => navigation.navigate('MoreConditions', { data: item })} >
                            <Text style={{ fontSize: 15 }}>{myData}</Text>
                        </TouchableOpacity>

                </View> :
                    <View style={styles.conditionView}>
                        <Text style={styles.text}>Don't know your condition ?</Text>
                        <TouchableOpacity>
                            <Text style={styles.text}> Click here</Text>
                        </TouchableOpacity>
                    </View>
            }

            <View style={styles.ButtonView}>
                <Button
                    name='Select Condition'
                    alignSelf='center'
                    color={searchResult? Color.White:'black'}
                    onPress={() => navigation.navigate('MoreCondition2')}
                    disabled={searchResult ? false : true}
                    backgroundColor={searchResult ? Color.darkBlue : Color.greyLight}
                />
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    headerText: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '400'
    },
    searchView: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: Color.White
    },
    TextInput: {
        width: '85%',
        fontSize: 15,
        paddingLeft: 10,
        height: 40
    },
    searchingResultView: {
        alignSelf: 'center',
        width: '90%',
        padding: 10,
        backgroundColor: Color.White,


    },
    conditionView: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical:20,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,

    },
    ButtonView:{
        flex: 1,
        alignItems: 'center',
        ...Platform.select({
            'android':{
                justifyContent: 'flex-end',
                bottom:10
            },
            'ios':{
                justifyContent: 'flex-end',
                bottom:20
            }
        })
       
    }

});


export default Index;
