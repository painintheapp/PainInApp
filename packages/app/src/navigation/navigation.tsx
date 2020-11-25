import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Landing, Signup, Registration, SearchConditions, SelectedCondition, AddTeams } from '../containers';
import { createStackNavigator } from '@react-navigation/stack';

class Navigator extends Component {
    render() {

        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={"none"}>
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="SearchConditions" component={SearchConditions} />
                    <Stack.Screen name="SelectedCondition" component={SelectedCondition} />
                    <Stack.Screen name="AddTeams" component={AddTeams} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export const Navigation = Navigator;
