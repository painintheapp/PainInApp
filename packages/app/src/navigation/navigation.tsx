import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Landing, Signup, Registration,SearchConditions, SelectedCondition,MainMenu,LifeStyle, AddTeams } from '../containers';
import { createStackNavigator } from '@react-navigation/stack';
import {Settings} from "containers/Settings";
import {About} from "containers/Settings/About";
import {Hipaa} from "containers/Settings/Hipaa";
import {Contact} from "containers/Settings/Contact";

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
                    <Stack.Screen name="MainMenu" component={MainMenu} />
                    <Stack.Screen name="LifeStyle" component={LifeStyle} />
                    <Stack.Screen name="AddTeams" component={AddTeams} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="HIPAA" component={Hipaa} />
                    <Stack.Screen name="Contact" component={Contact} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export const Navigation = Navigator;
