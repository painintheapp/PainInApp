import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Switch,
} from 'react-native';
import { Button, Input, Icon } from "react-native-elements";
import { Header } from "../../components";
import { TouchableOpacity } from 'react-native-gesture-handler';
interface AddTeamState {
    teamA: string;
    teamB: string;
    teamC: string;
    teamD: string;
    emailA: string;
    emailB: string;
    emailC: string;
    emailD: string;
    invalidEmailA: boolean;
    invalidEmailB: boolean;
    invalidEmailC: boolean;
    invalidEmailD: boolean;
    hippa: boolean;
}

interface OwnProps {
    navigation: any
}

interface InputAreaProps {
    placeholder: string;
    name: string;
    value: any;
    email: any;
    onChange: any;
    checkEmail: any;
    mail: string;
}

type Props = OwnProps;

const InputArea: React.FC<InputAreaProps> = ({ placeholder, mail, name, value, onChange, checkEmail, email }) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputPlaceholder}>{placeholder}</Text>
            <Icon name={"user"} type={"entypo"} color={"#93BEF2"} size={18} containerStyle={styles.userIcon} />
            <Input
                containerStyle={[styles.containerStyle, { width: '40%' }]}
                inputStyle={[styles.inputStyle]}
                inputContainerStyle={[styles.inputContainerStyle]}
                onChangeText={(value) => onChange(name, value)}
                value={value}
                placeholder={"Name"} />
            <Input
                containerStyle={[styles.containerStyle, { width: '40%' }]}
                inputStyle={[styles.inputStyle]}
                inputContainerStyle={[styles.inputContainerStyle]}
                onChangeText={(value) => onChange(mail, value)}
                onBlur={() => checkEmail(name)}
                value={email}
                placeholder={"Email"} />
        </View>
    )
}

class AddTeam extends React.Component<Props, AddTeamState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            teamA: '',
            teamB: '',
            teamC: '',
            teamD: '',
            emailA: '',
            emailB: '',
            emailC: '',
            emailD: '',
            invalidEmailA: false,
            invalidEmailB: false,
            invalidEmailC: false,
            invalidEmailD: false,
            hippa: false,
        };
    }


    public componentDidMount() {
    }

    public render() {
        const { invalidEmailA, invalidEmailB, invalidEmailC, invalidEmailD ,hippa} = this.state;
        return (
            <React.Fragment>
                <Header
                    title={'PAIN IN THE APP'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={{ alignItems: 'center', }} style={styles.container}>
                    <Text style={styles.heading}>Pain Management Team</Text>
                    <View style={styles.placeHolderView}>
                        <Text>Name</Text>
                        <Text>Email</Text>
                    </View>
                    <InputArea
                        placeholder="A"
                        name="teamA"
                        mail="emailA"
                        checkEmail={this.checkEmail}
                        email={this.state.emailA}
                        value={this.state.teamA}
                        onChange={this.onChange} />
                    {
                        invalidEmailA ?
                            <View style={styles.errorText}>
                                <Text style={styles.errorTextColor}>invalid email</Text>
                            </View> : null
                    }
                    <InputArea
                        placeholder="B"
                        name="teamB"
                        mail="emailB"
                        checkEmail={this.checkEmail}
                        email={this.state.emailB}
                        value={this.state.teamB}
                        onChange={this.onChange} />
                    {
                        invalidEmailB ?
                            <View style={styles.errorText}>
                                <Text style={styles.errorTextColor}>invalid email</Text>
                            </View> : null
                    }
                    <InputArea
                        placeholder="C"
                        checkEmail={this.checkEmail}
                        mail="emailC"
                        name="teamC"
                        email={this.state.emailC}
                        value={this.state.teamC}
                        onChange={this.onChange} />
                    {
                        invalidEmailC ?
                            <View style={styles.errorText}>
                                <Text style={styles.errorTextColor}>invalid email</Text>
                            </View> : null
                    }
                    <InputArea
                        placeholder="D"
                        checkEmail={this.checkEmail}
                        name="teamD"
                        mail="emailD"
                        email={this.state.emailD}
                        value={this.state.teamD}
                        onChange={this.onChange} />
                    {
                        invalidEmailD ?
                            <View style={styles.errorText}>
                                <Text style={styles.errorTextColor}>invalid email</Text>
                            </View> : null
                    }
                    <View style={styles.toggleView}>
                        <Text>HIPPA</Text>
                        <Switch value={hippa} onValueChange={(value) => this.setState({ hippa: value })} />
                    </View>
                    <Button title="Save to Journal" buttonStyle={styles.register} containerStyle={styles.buttonContainer} onPress={this.next} />
                </ScrollView>
            </React.Fragment>
        );
    };

    private onChange = (name: string, value: any) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    private checkEmail = (state: string) => {
        const { emailA, emailB, emailC, emailD } = this.state;
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/
        if (state === 'teamA') {
            if (regex.test(emailA)) {
                if (emailA != '') {
                    this.setState({ invalidEmailA: false })
                } else {
                    this.setState({ emailA: '' })
                }
            } else {
                this.setState({ emailA: '', invalidEmailA: true })
            }
        }
        else if (state === 'teamB') {
            if (regex.test(emailB)) {
                if (emailB != '') {
                    this.setState({ invalidEmailB: false })
                } else {
                    this.setState({ emailB: '' })
                }
            } else {
                this.setState({ emailB: '', invalidEmailB: true })
            }
        }
        else if (state === 'teamC') {
            if (regex.test(emailC)) {
                if (emailC != '') {
                    this.setState({ invalidEmailC: false })
                } else {
                    this.setState({ emailC: '' })
                }
            } else {
                this.setState({ emailC: '', invalidEmailC: true })
            }
        }
        else if (state === 'teamD') {
            if (regex.test(emailD)) {
                if (emailD != '') {
                    this.setState({ invalidEmailD: false })
                } else {
                    this.setState({ emailD: '' })
                }
            } else {
                this.setState({ emailD: '', invalidEmailD: true })
            }
        }
    }

    private next = () => {
        this.props.navigation.navigate("MainMenu")
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 40 },
    inputPlaceholder: { color: '#000', fontSize: 14 },
    buttonContainer: { width: '75%', marginTop: 20, marginBottom: 30 },
    register: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    placeHolderView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '50%', marginBottom: 10 },
    heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    userIcon: { backgroundColor: '#000', borderRadius: 3, padding: 2 },
    errorText: { width: '60%', alignItems: 'flex-end', marginTop: -10, marginBottom: 10 },
    errorTextColor: { color: 'red' },
    toggleView: { flexDirection: 'row', alignItems: 'center' }
})

export const AddTeams = AddTeam;
