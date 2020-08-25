import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {  SearchConditions } from '../containers';
import { createStackNavigator } from '@react-navigation/stack';

class Navigator extends Component {
    render() {

        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={"none"}>
                    <Stack.Screen name="SearchConditions" component={SearchConditions} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export const Navigation = Navigator;
