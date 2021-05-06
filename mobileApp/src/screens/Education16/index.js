//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import CheckBox from '../../components/CheckBox'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({navigation}) => {
    const [Value, setValue] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                onPress={()=>navigation.navigate('Education17')}
                onPress1={() => navigation.goBack()}
                backgroundColor={Color.darkBlue}
                text='PAINLESS'
                textColor={Color.White}
                fontSize={25}

            />


            <Text style={styles.headerText}>COMPLEMENTARY & ALTERNATIVE THERAPY</Text>

            <View style={styles.HeaderView}>
                <Text style={styles.headerVoewText}> HAVE YOU TIRED THIS?</Text>
                <View style={{ width:'25%', flexDirection:'row',alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={styles.headerVoewText}>{Value?'Y':'N'}</Text>
                <CheckBox
                 value={Value}
                 onValueChange={()=>{setValue(!Value)}}
                 
                />
                </View>
               

            </View>
            <View>
            <Text style={[styles.headerText,{alignSelf: 'flex-start', fontSize:20, fontWeight:'500' }]}>DID IT HELP ?</Text>
            <Text style={[styles.headerText,{alignSelf: 'flex-start', fontSize:20, fontWeight:'500' }]}>ARE YOU ACTIVELY USING IT?</Text>
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
    headerText: {
        alignSelf: 'center',
        fontSize: 15,
        marginVertical: 30
    },
    HeaderView:{
        width:'80%',
        height:50,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:Color.White
    },
    headerVoewText:{
        fontSize:20,
        fontWeight:'600'
    }

});

//make this component available to the app
export default Index;
