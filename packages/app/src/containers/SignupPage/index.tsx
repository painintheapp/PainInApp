import * as React from 'react';
import {
    ImageBackground,
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Button, Input } from "react-native-elements";

interface SignupPageState {
    email: string;
    password: string;
    invalidEmail: boolean;
    invalidPass: boolean;
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class SignupPage extends React.Component<Props, SignupPageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            invalidEmail: false,
            invalidPass: false,
        };
    }


    public componentDidMount() {
    }

    public render() {
        const { invalidEmail, invalidPass, email, password } = this.state;

        return (
            <React.Fragment>
                <ImageBackground source={require("../../../assets/images/background.jpg")} resizeMode="cover" style={styles.container}>
                    <View style={styles.mainView}>
                        <View style={styles.horizontalCenter}>
                            <Text style={styles.heading}>PainLes</Text>
                            <Text style={styles.subheading}>a chronic pain management tool</Text>
                        </View>
                        <View style={styles.horizontalCenter}>
                            <Text style={styles.signupText}>Sign up</Text>
                            <Input
                                containerStyle={styles.containerStyle}
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                onBlur={this.checkEmail}
                                keyboardType="email-address"
                                placeholder="Email" />
                            {
                                invalidEmail ?
                                    <View style={styles.errorText}>
                                        <Text style={styles.errorTextColor}>invalid email</Text>
                                    </View> : null
                            }
                            <Input
                                containerStyle={styles.containerStyle}
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                onBlur={this.checkPass}
                                secureTextEntry
                                placeholder="Password" />
                            {
                                invalidPass ?
                                    <View style={styles.errorText}>
                                        <Text style={styles.errorTextColor}>A password containing at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and have a length of at least of 6</Text>
                                    </View> : null
                            }
                            <Button disabled={(email && password && invalidPass == false) ? false : true} onPress={this.signup} buttonStyle={styles.register} containerStyle={{ width: '75%' }} titleStyle={styles.titleStyle} title="Create your account" />
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

    private checkEmail = () => {
        const { email } = this.state;
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/
        if (regex.test(email)) {
            if (email != '') {
                this.setState({ invalidEmail: false })
            } else {
                this.setState({ email: '' })
            }
        } else {
            this.setState({ email: '', invalidEmail: true })
        }
    }
    private checkPass = () => {
        const { password } = this.state;
        const regex = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
        if (regex.test(password)) {
            if (password != '') {
                this.setState({ invalidPass: false })
            } else {
                this.setState({ password: '' })
            }
        } else {
            this.setState({ invalidPass: true })
        }
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
    inputStyle: { fontSize: 14, color: '#000080', backgroundColor: '#fff', paddingLeft: 10 },
    errorText: { width: '75%', alignItems: 'flex-start', marginTop: -10, marginBottom: 10 },
    errorTextColor: { color: 'red' }
})

export const Signup = SignupPage;