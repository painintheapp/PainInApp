//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const search = require('../../components/images/search2x.png')
const menu2 = require('../../components/images/menu2.png')


const myData = [{
    id:1,
    Drimage: require('../../components/images/baji.png'),
    image2: require('../../components/images/buildings.png'),
    image3: require('../../components/images/clinic.png'),
    drName: 'Dr Elezabith',
    profession: 'PAIN MANAGEMENT',
    Email: 'abc@123',
    mblenum: '+1-23-4567-890',
    website: 'www.abc.com',
    Condition: 'CONDITON BASE KNOWLEDGE',
    Quote: '',
    reviews: Math.floor(Math.random() * 100),
    mail: require('../../components/images/mail.png'),
    utube: require('../../components/images/utube.png'),
    twitter: require('../../components/images/twitter.png'),
    linked: require('../../components/images/in.png'),
    zoomscreen: require('../../components/images/Enhance.png')


},
{
    id:2,
    Drimage: require('../../components/images/baji.png'),
    image2: require('../../components/images/buildings.png'),
    image3: require('../../components/images/clinic.png'),
    drName: 'Dr Elezabith',
    profession: 'PAIN MANAGEMENT',
    Email: 'abc@123',
    mblenum: '+1-23-4567-890',
    website: 'www.abc.com',
    Condition: 'CONDITON BASE KNOWLEDGE',
    Quote: '',
    reviews: Math.floor(Math.random() * 100),
    mail: require('../../components/images/mail.png'),
    utube: require('../../components/images/utube.png'),
    twitter: require('../../components/images/twitter.png'),
    linked: require('../../components/images/in.png'),
    zoomscreen: require('../../components/images/Enhance.png')


}

]



const Index = ({ navigation }) => {
    const [Specialist, setSpecialist] = useState('')
    const [Distance, setDistance] = useState('')
    const [ShowSearchView, setShowSearchView] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                backgroundColor={Color.darkBlue}
                text='SPECIALIST DIRECTORY'
                textColor={Color.White}
                fontSize={25}
                image={menu2}
                image2={search}
                onPress={() => setShowSearchView(!ShowSearchView)}
                onPress1={() => navigation.openDrawer()}
            />

            {
                ShowSearchView ? <View

                    style={styles.searchParentView}
                >
                    <View style={styles.TextInputView}>
                        <TextInput
                            placeholder='TYPE OF SPECIALIST'
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            onChangeText={(text) => setSpecialist(text)}
                            style={{ fontSize: 20, paddingLeft: 15, height: 40 }}
                        />
                    </View>

                    <View style={styles.TextInputView}>
                        <TextInput
                            placeholder='DISTANCE'
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            onChangeText={(text) => setDistance(text)}
                            style={{ fontSize: 20, paddingLeft: 15, height: 40 }}
                        />
                    </View>

                </View> : null
            }
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={myData}
                 keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    return <View style={{backgroundColor:Color.White,padding:10}}>
                    <SpecialistDrComp
                        index={index}
                        drImage={item.Drimage}
                        Image2={item.image2}
                        Image3={item.image3}
                        drName={item.drName}
                        profess={item.profession}
                        email={item.Email}
                        mblenum={item.mblenum}
                        reviews={item.reviews}
                        linkedIn={item.linked}
                        utube={item.utube}
                        mail={item.mail}
                        twitter={item.twitter}
                        zoom={item.zoomscreen}
                        onPress={() => navigation.navigate('Frame41', { data: item })
                        }
                    />
                    </View>
                }}
            />
            <View style={{height:40}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,

    },
    searchParentView: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 10

    },
    TextInputView: {
        borderBottomWidth: 1,

    }
});

//make this component available to the app
export default Index;
