import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Landing, Signup } from '../containers';
import { createStackNavigator } from '@react-navigation/stack';

class Navigator extends Component {
    render() {

        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={"none"}>
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Signup" component={Signup} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export const Navigation = Navigator;
