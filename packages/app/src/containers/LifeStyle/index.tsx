import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch,
    TouchableOpacity
} from 'react-native';
import { Button, CheckBox, Icon, Input } from "react-native-elements";
import { Header } from "../../components";
interface LifeStyleState {
    isVitamins: boolean;
    isExercise: boolean;
    isTeam: boolean;
    vname: string;
    vaditional: string;
    vaditional1: string;
}

interface OwnProps {
    navigation: any;
    route: any;
}

interface InputAreaProps {
    placeholder: string;
    name: string;
    value: any;
    onChange: any;
    searchIcon?: any;
}

type Props = OwnProps;

const InputArea: React.FC<InputAreaProps> = ({ placeholder, name, value, onChange, searchIcon }) => {
    return (
        <View style={styles.inputView}>
            <Input
                containerStyle={[styles.containerStyle, { width: '100%' }]}
                inputStyle={[styles.inputStyle]}
                inputContainerStyle={[styles.inputContainerStyle, { marginTop: searchIcon ? -5 : 0 }]}
                onChangeText={(value) => onChange(name, value)}
                rightIcon={searchIcon}
                value={value}
                placeholder={searchIcon ? "Symptom" : placeholder} />
        </View>
    )
}

class LifeStylePage extends React.Component<Props, LifeStyleState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isVitamins: false,
            isExercise: false,
            isTeam: false,
            vname: '',
            vaditional: '',
            vaditional1: '',
        };
    }

    public componentDidMount = () => {
    }


    public render() {
        const { isVitamins, isExercise, isTeam } = this.state;
        return (
            <React.Fragment>
                <Header
                    title={'PAIN IN THE APP'}
                    leftIcon={true}
                    rightIcon={true}
                    search={false}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
                    <Text style={styles.heading}>LifeStyle</Text>
                    <View style={styles.row}>
                        <Text>Vitamins</Text>
                        <View style={styles.switchrow}>
                            <Text style={styles.yesNo}>{isVitamins ? "Yes" : "No"}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#035EC7" }}
                                thumbColor={isVitamins ? "#035EC7" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={isVitamins}
                            />
                        </View>
                    </View>
                    {
                        isVitamins &&
                        <View style={[styles.row, { alignItems: 'flex-start', marginTop: 20 }]}>
                            <Text>Types</Text>
                            <View style={{ width: '60%', marginBottom: 20 }}>
                                <InputArea
                                    placeholder="Vitamin Name"
                                    name="vname"
                                    value={this.state.vname}
                                    onChange={this.onChange} />
                                <InputArea
                                    placeholder="Additional Vitamin"
                                    name="vaditional"
                                    value={this.state.vaditional}
                                    onChange={this.onChange} />
                                <InputArea
                                    placeholder="Additional Vitamin"
                                    name="vaditional1"
                                    value={this.state.vaditional1}
                                    onChange={this.onChange} />
                            </View>
                        </View>
                    }

                    <View style={styles.row}>
                        <Text>Do you exercise?</Text>
                        <View style={styles.switchrow}>
                            <Text style={styles.yesNo}>{isExercise ? "Yes" : "No"}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#035EC7" }}
                                thumbColor={isExercise ? "#035EC7" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={isExercise}
                            />
                        </View>
                    </View>
                    <View style={[styles.row, { alignItems: 'flex-start', marginTop: 20 }]}>
                        <Text>Type of exercise</Text>
                        <View style={{ width: '60%', marginBottom: 20 }}>
                            <InputArea
                                placeholder="Ex. Cardio"
                                name="vname"
                                value={this.state.vname}
                                onChange={this.onChange} />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.halfwidth}>Do you have a pain management team?</Text>
                        <View style={styles.switchrow}>
                            <Text style={styles.yesNo}>{isTeam ? "Yes" : "No"}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#035EC7" }}
                                thumbColor={isTeam ? "#035EC7" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={isTeam}
                            />
                        </View>
                    </View>
                    <Button title="Start your pain management" buttonStyle={styles.startPainButton} containerStyle={styles.startPainContainer} onPress={this.onSubmit} />
                </View>
            </React.Fragment>
        );
    };

    private onChange = (name: string, value: any) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    private onSubmit = () => {
        this.props.navigation.navigate('PainTeam');
    }

    toggleSwitch = () => this.setState(previousState => ({ isVitamins: !previousState.isVitamins }));
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', paddingVertical: 20 },
    heading: { fontWeight: 'bold', fontSize: 16 },
    row: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center' },
    switchrow: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    inputView: { width: '100%', marginBottom: 10 },
    halfwidth: { width: '50%' },
    startPainButton: { backgroundColor: '#035EC7', borderRadius: 5 },
    startPainContainer: { width: '75%', marginTop: 20, marginBottom: 30 },
    yesNo: { marginRight: 20 },
    containerStyle: { backgroundColor: '#fff', height: 35, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0, height: 35, },
    inputStyle: { fontSize: 14, width: '100%', color: '#000080', },
})

export const LifeStyle = LifeStylePage;
