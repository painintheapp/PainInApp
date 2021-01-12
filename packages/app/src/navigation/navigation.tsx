import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Landing, Signup, Registration,SearchConditions, SelectedCondition,MainMenu,LifeStyle, AddTeams } from '../containers';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {UserProfile} from "components/Drawer/UserProfile";
import {CustomDrawerContent} from "navigation/CustomDrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class DrawerNav extends Component {
    render() {
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>} drawerPosition="right">
                <Drawer.Screen name="MainMenu" component={MainMenu}/>
                <Drawer.Screen name="UserProfile" component={UserProfile}/>
                {/*<Drawer.Screen name="Hipaa" component={Hipaa}/>*/}
            </Drawer.Navigator>
        )
    }
}

class Navigator extends Component {
    render() {

        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={"none"} initialRouteName="Landing" screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="SearchConditions" component={SearchConditions} />
                    <Stack.Screen name="SelectedCondition" component={SelectedCondition} />
                    <Stack.Screen name="MainMenu" component={DrawerNav} />
                    <Stack.Screen name="LifeStyle" component={LifeStyle} />
                    <Stack.Screen name="AddTeams" component={AddTeams} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export const Navigation = Navigator;
