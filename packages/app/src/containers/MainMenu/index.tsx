import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Header } from "../../components";

interface MainMenuPageState {
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class MainMenuPage extends React.Component<Props, MainMenuPageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render() {
        const list = [
            { title: 'SPECIALIST DIRECTORY', name: "store-mall-directory", type: 'material-icons' },
            { title: 'MY JOURNAL', name: "notebook-multiple", type: 'material-community' },
            { title: 'EDUCATION', name: "book-search", type: 'material-community' },
            { title: 'COMMUNITY DISCUSSION', name: "comments", type: 'font-awesome' },
        ]

        return (
            <React.Fragment>
                <Header
                    title={'PAIN IN THE APP'}
                    leftIcon={true}
                    leftIconName='settings'
                    onPressLeft={() => this.props.navigation.navigate('Settings')}
                    rightIcon={true}
                    userIcon={true}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
                    <View style={styles.mainView}>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.heading}>Menu</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {
                                list.map((item, index) => (
                                    <TouchableOpacity key={index} style={styles.items}>
                                        <Icon name={item.name} type={item.type} size={40} containerStyle={styles.icons} />
                                        <Text>{item.title}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
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

export const MainMenu = MainMenuPage;
