import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Header } from "../../components";

interface UserProfilePageState {
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class UserProfilePage extends React.Component<Props, UserProfilePageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <React.Fragment>
                <Header
                    title={'Profile'}
                    leftIcon={false}
                    rightIcon={true}
                    onPressRight={() => this.props.navigation.openDrawer()}
                    userIcon={true}
                    navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <View style={styles.mainView}>
                        <Text>User Profile</Text>
                    </View>
                </View>
            </React.Fragment>
        );
    };

    private _signup = () => {
        this.props.navigation.navigate("Signup")
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', justifyContent: 'center' },
    mainView: { flex: 1, width: '100%', alignItems: 'center' },
    heading: { color: '#000', fontSize: 20, marginTop: 20 },
    subheading: { color: '#000080', fontSize: 14 },
    logo: { height: 200 },
    icons: { width: 80 },
    titleStyle: { color: '#000080' },
    items: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
    login: { width: '100%', marginTop: 20, backgroundColor: '#14CAFF' }
})

export const UserProfile = UserProfilePage;
