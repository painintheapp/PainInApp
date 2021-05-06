//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Color from '../../components/Colors'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
const Home = require('../../components/images/Home.png')
const Index = ({ navigation }, props) => {
    return (
        <View style={styles.container} >
            <DrawerContentScrollView {...props}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Menu</Text>
                </View>
                <DrawerItem
                    icon={({ focused, size }) => { focused ? <Image style={{ width: 50, height: 50 }} source={Home} /> : <Image style={{ width: 50, height: 50 }} source={Home} /> }}
                    label={({ focused, color }) => <Text style={{ ...styles.Text, color: '#000', fontSize: 16 }}>{focused ? 'SPECIALIST DIRECTORY' : 'SPECIALIST DIRECTORY'}</Text>}
                    onPress={() => navigation.navigate('SpecialistDr')}
                />
                <DrawerItem
                    icon={({ focused, size }) => { focused ? <Image style={{ width: 50, height: 50 }} source={Home} /> : <Image style={{ width: 50, height: 50 }} source={Home} /> }}
                    label={({ focused, color }) => <Text style={{ ...styles.Text, color: '#000', fontSize: 16 }}>{focused ? 'MY JOURNAL' : 'MY JOURNAL'}</Text>}
                    onPress={() => navigation.navigate('Myjournal')}
                />
                <DrawerItem
                    icon={({ focused, size }) => { focused ? <Image style={{ width: 50, height: 50 }} source={Home} /> : <Image style={{ width: 50, height: 50 }} source={Home} /> }}
                    label={({ focused, color }) => <Text style={{ ...styles.Text, color: '#000', fontSize: 16 }}>{focused ? 'EDUCATION' : 'EDUCATION'}</Text>}
                    onPress={() => navigation.navigate('PainEducation')}
                />
                <DrawerItem
                    icon={({ focused, size }) => { focused ? <Image style={{ width: 50, height: 50 }} source={Home} /> : <Image style={{ width: 50, height: 50 }} source={Home} /> }}
                    label={({ focused, color }) => <Text style={{ ...styles.Text, color: '#000', fontSize: 16 }}>{focused ? 'COMMUNITY DISCUSSION' : 'COMMUNITY DISCUSSION'}</Text>}
                    onPress={() => navigation.navigate('CommunityDiscussion1')}

                />

                <Text style={styles.commingText}>COMING SOON</Text>


            </DrawerContentScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',

    },
    commingText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'red',
        padding: 0,
        margin: 0
    }
});

//make this component available to the app
export default Index;
