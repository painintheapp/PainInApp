import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar
} from 'react-native';
import { Icon } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderComponentState {
}

interface OwnProps {
    navigation: any;
    title: string;
    leftIcon: any;
    rightIcon: any;
    search: any;
}

type Props = OwnProps;

class HeaderComponent extends React.Component<Props, HeaderComponentState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }


    public componentDidMount() {
    }

    public render() {
        const { title, leftIcon, rightIcon,search } = this.props;
        return (
            <React.Fragment>
                <StatusBar backgroundColor="#035EC7" />
                <View style={styles.container}>
                    {leftIcon && <TouchableOpacity><Icon name="menu" type="feather" color={"#fff"} /></TouchableOpacity>}
                    <Text style={styles.titleText}>{title}</Text>
                    {rightIcon && <TouchableOpacity><Icon name="settings" type="Ionicons" color={"#fff"} /></TouchableOpacity>}
                    {search && <TouchableOpacity><Icon name="search" type="Ionicons" color={"#fff"} /></TouchableOpacity>}
                </View>
            </React.Fragment>
        );
    };


}


const styles = StyleSheet.create({
    container: { backgroundColor: '#035EC7', height: 60, padding: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' },
    titleText: { color: '#fff', fontSize: 18 }
})

export const Header = HeaderComponent;
