//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Color from '../../components/Colors'
// create a component
const Index = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Text numberOfLines={props.numberOfLines} style={props.style}>{props.text}</Text>
            <View style={styles.switchView}>
                {
                    isEnabled? <Text style={{fontSize:15}}>{props.name}</Text>:<Text style={{fontSize:15}}>{props.name2}</Text>
                }
               
                <Switch
                    trackColor={{ false: "#767577", true: "#7f0bb5" }}
                    thumbColor={isEnabled ? Color.White : Color.White}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        

    },
    switchView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'30%',
        
    }
});

//make this component available to the app
export default Index;
