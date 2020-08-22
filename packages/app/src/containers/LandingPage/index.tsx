import * as React from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Button } from "react-native-elements";

interface LandingPageState {
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class LandingPage extends React.Component<Props, LandingPageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render() {

        return (
            <React.Fragment>
                <ImageBackground source={require("../../../assets/images/background.jpg")} resizeMode="cover" style={styles.container}>
                    <View style={styles.mainView}>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.heading}>PAIN IN THE APP</Text>
                            <Text style={styles.subheading}>a chronic pain management tool</Text>
                        </View>
                        <Image style={styles.logo} resizeMode="contain" source={require("../../../assets/images/logo.png")} />
                        <View >
                            <Button
                                onPress={this._signup}
                                buttonStyle={styles.signup}
                                titleStyle={styles.titleStyle}
                                title="SIGN UP" />
                            <Button
                                buttonStyle={styles.login}
                                titleStyle={styles.titleStyle}
                                title="LOG IN" />
                        </View>
                    </View>
                </ImageBackground>
            </React.Fragment>
        );
    };

    private _signup = () => {
        this.props.navigation.navigate("Signup")
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    mainView: { flex: 1, width: '100%', justifyContent: 'space-around', alignItems: 'center' },
    heading: { color: '#000080', fontSize: 26 },
    subheading: { color: '#000080', fontSize: 14 },
    logo: { height: 200 },
    titleStyle: { color: '#000080' },
    signup: { width: '100%', backgroundColor: '#fff' },
    login: { width: '100%', marginTop: 20, backgroundColor: '#14CAFF' }
})

export const Landing = LandingPage;
