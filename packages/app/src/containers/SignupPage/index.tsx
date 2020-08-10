import * as React from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Button, Input } from "react-native-elements";

interface SignupPageState {
    fullname: string;
    email: string;
    password: string;
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class SignupPage extends React.Component<Props, SignupPageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            password: '',
        };
    }


    public componentDidMount() {
    }

    public render() {

        return (
            <React.Fragment>
                <ImageBackground source={require("../../../assets/images/bg.jpg")} resizeMode="cover" style={styles.container}>
                    <View style={styles.mainView}>
                        <View style={styles.horizontalCenter}>
                            <Text style={styles.heading}>PAIN IN THE APP</Text>
                            <Text style={styles.subheading}>a chronic pain management tool</Text>
                        </View>
                        <View style={styles.horizontalCenter}>
                            <Text style={styles.signupText}>Sign up</Text>
                            <Input
                                containerStyle={styles.containerStyle}
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                onChangeText={(fullname) => this.setState({ fullname })}
                                value={this.state.fullname}
                                placeholder="Full name" />
                            <Input
                                containerStyle={styles.containerStyle}
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                keyboardType="email-address"
                                placeholder="Email" />
                            <Input
                                containerStyle={styles.containerStyle}
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                secureTextEntry
                                placeholder="Password" />
                            <Button onPress={this.signup} buttonStyle={styles.register} containerStyle={{ width: '75%' }} titleStyle={styles.titleStyle} title="Create your account" />
                        </View>
                        <View style={styles.horizontalCenter}>
                            <Text style={styles.termsText}>By creating an account, you agree to our <Text style={styles.underline}>Terms</Text></Text>
                            <Text style={styles.termsText}>Already have an account <Text style={styles.underline}>Sign in</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
            </React.Fragment>
        );
    };

    private signup = () => {
        this.props.navigation.navigate("Registration")
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    mainView: { width: '100%', height: '90%', justifyContent: 'space-around', alignItems: 'center' },
    heading: { color: '#000080', fontSize: 26 },
    subheading: { color: '#000080', fontSize: 14 },
    horizontalCenter: { width: '100%', alignItems: 'center' },
    titleStyle: { color: '#fff' },
    signupText: { color: '#000080', fontSize: 26, marginBottom: 20 },
    register: { backgroundColor: '#14CAFF' },
    underline: { textDecorationLine: 'underline' },
    termsText: { color: 'rgba(255,255,255,0.5)', marginTop: 10 },
    containerStyle: { width: '80%' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, color: '#000080', backgroundColor: '#fff', paddingLeft: 10 }
})

export const Signup = SignupPage;
