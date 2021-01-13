import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

export function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Log Out"
                onPress={() => props.navigation.navigate('Signup')}
            />
        </DrawerContentScrollView>
    );
}