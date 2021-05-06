//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const search = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')


const data = [{
    Drimage: 'https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg',
    image2: 'https://cdn.pixabay.com/photo/2020/02/05/10/02/wuchang-4820691_960_720.jpg',
    image3: 'https://cdn.pixabay.com/photo/2017/02/24/18/04/san-diego-2095778_960_720.jpg',
    drName: 'Dr Elezabith',
    profession: 'PAIN MANAGEMENT',
    Email: 'abc@123',
    mblenum: '+1-23-4567-890',
    website: 'www.abc.com',
    Quote: '',
    reviews: Math.floor(Math.random() * 100),
    mail: require('../../components/images/mail.png'),
    utube: require('../../components/images/utube.png'),
    twitter: require('../../components/images/twitter.png'),
    linked: require('../../components/images/in.png')


}]

const Index = ({ navigation,route }) => {
    
     const data=route.params.data
    
    const [isVisible, setisVisible] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={search}
                onPress={() => setisVisible(!isVisible)}
                onPress1={()=>navigation.goBack()}
                backgroundColor={Color.darkBlue}
                text='SPECIALIST DIRECTORY'
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={{fontSize:15,padding:10,fontWeight:'400' }}>FEATURED SPECIALISTS</Text>
            <View style={styles.parentView}>
                <View style={styles.imageView}>
                    <Image
                        source={data.Drimage }
                        resizeMode='stretch'
                        style={{ width: "40%", height: "100%" }}

                    />
                    <View style={styles.bottomImagesView}>
                        <Image
                            source={data.image2}
                            resizeMode='stretch'
                            style={{ width: '130%', height: 50 }}
                        />
                        <Image
                            source={data.image3}
                            resizeMode='stretch'
                            style={{ width: '70%', height: '50%' }}
                        />
                    </View>
                </View>

                <View style={styles.nameView}>
                    <Text style={styles.text}>Dr Name : {data.drName}</Text>
                    <Text style={styles.text}>Profession : {data.profession}</Text>
                    <Text style={styles.text}>Email : {data.Email} </Text>
                    <Text style={styles.text}>Phone : {data.mblenum}</Text>
                    <Text style={styles.text}>Website : {data.website}</Text>
                    <Text style={styles.text}>Condition : {data.Condition}</Text>

                    <View style={styles.socialIconeViews}>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/in.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/utube.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/mail.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/twitter.png')}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
            <Modal
                visible={isVisible}
                transparent={true}
                animationType='slide'
                onRequestClose={()=>setisVisible(false)}
            >
                <View style={styles.modalView}>
                    <Button
                    name='close Modal'
                    onPress={()=>setisVisible(false)}
                    />
                    <Text style={styles.text}>EXCLUSIVE</Text>
                    <Text style={styles.text}>PACKAGE</Text>
                    <Text style={styles.text}>500/month</Text>

                </View>


            </Modal>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    parentView: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageView: {
        flex: 1,
        flexDirection: 'row',
       
    },

    nameView: {
        flex: 1,
        alignSelf: 'center',
        padding: 30,
        

    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        marginVertical: 5
    },
    socialIconeViews: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width:'70%',
        height:'30%',
        alignItems: 'center',
        marginTop:"60%",
        alignSelf: 'center',
        backgroundColor:Color.White

    }
});

//make this component available to the app
export default Index;
