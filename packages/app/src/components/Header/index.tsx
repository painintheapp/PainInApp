import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Icon } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderComponentState {
}

interface OwnProps {
    navigation: any;
    title: string;
    leftIcon: any;
    leftIconName?: string;
    onPressLeft?: () => void;
    rightIcon: any;
    onPressRight?: () => void;
    userIcon: any;
}

type Props = OwnProps;

class HeaderComponent extends React.Component<Props, HeaderComponentState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };

        this.handlePress = this.handlePress.bind(this);
    }

    private handlePress() {
        if (this.props.onPressLeft) {
            this.props.onPressLeft();
        } else {
            this.props.navigation.goBack();
        }
    }

    public componentDidMount() {
    }

    public render() {
        const { title, leftIcon, leftIconName, rightIcon, userIcon } = this.props;
        return (
            <React.Fragment>
                <View style={styles.container}>
                    {leftIcon && <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="chevron-left" type="feather" color={"#fff"}/></TouchableOpacity>}
                    {!leftIcon && <View></View>}
                    <Text style={styles.titleText}>{title}</Text>
                    {!rightIcon && <View></View>}
                    {rightIcon && !userIcon && <TouchableOpacity><Icon name="settings" type="Ionicons" color={"#fff"} /></TouchableOpacity>}
                    {rightIcon && userIcon && <TouchableOpacity onPress={this.props.onPressRight}><Icon name="user" type="entypo" color={"#fff"} /></TouchableOpacity>}
                </View>
            </React.Fragment>
        );
    };


}


const styles = StyleSheet.create({
    container: { backgroundColor: '#035EC7', height: 80, padding: 15, paddingTop: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' },
    titleText: { color: '#fff', fontSize: 18, textAlign: 'center', position: 'absolute', left: 100, right: 100, bottom: 15 }
})

export const Header = HeaderComponent;
