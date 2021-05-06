//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const Index = (props) => {
    
    return (

        <View key={props.index} style={styles.container}>

            <View style={styles.imagesView}>
                <Image
                    resizeMode='stretch'
                    style={styles.image1}
                    source={props.drImage}
                />

                <View style={{ flex:1, flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center', }}>
                    <Image
                        resizeMode='contain'
                       style={styles.image2}
                        source={props.Image2}
                    />
                    <Image
                        resizeMode='contain'
                        style={styles.image3}
                        source={props.Image3}
                    />
                </View>

            </View>
            <View style={styles.NameView}>
                <Text style={styles.text}>Dr Name: {props.drName}</Text>
                <Text style={styles.text}>Profession: {props.profess}</Text>
                <Text style={styles.text}>Email: {props.email}</Text>
                <Text style={styles.text}>Mobile: {props.mblenum}</Text>
                <Text style={styles.text}>Reviews: {props.reviews}</Text>

                <View style={styles.SocialView}>
                    <TouchableOpacity activeOpacity={.7} onPress={props.linkedInPress}>
                        <Image
                            source={props.linkedIn}
                            resizeMode='stretch'
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.7} onPress={props.utube}>
                        <Image
                            source={props.utube}
                            resizeMode='contain'
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={props.mail}>
                        <Image
                            source={props.mail}
                            resizeMode='contain'
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={props.twitter}>
                        <Image
                            source={props.twitter}
                            resizeMode='contain'
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.zoomImage} activeOpacity={.7} onPress={props.onPress}>
                        <Image
                            source={props.zoom}
                            resizeMode='contain'
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    
                </View>


            </View>



        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imagesView: {
        flex: 1,
    },
    NameView: {
        flex: 1,
        padding: 10,
        overflow:'hidden'   
    },
    image1: {
        width: "100%",
        height:'55%'
    },
    image2: {
        width: "48%",
        height: "40%",
        
    },
    image3: {
        width: "48%",
        height: "40%"
    },
    SocialView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 5

    },
    zoomImage:{
        marginTop:30
    }

});

//make this component available to the app
export default Index;
