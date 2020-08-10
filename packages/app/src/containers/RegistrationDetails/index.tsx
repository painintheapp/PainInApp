import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Button, Input, Icon } from "react-native-elements";
import { Header } from "../../components";
import { TouchableOpacity } from 'react-native-gesture-handler';
interface RegistrationDetailsState {
    firstname: string;
    lastname: string;
    age: string;
    weight: string;
    height: string;
    gender: string;
    conditions: string;
    primarysymptom: string;
    searchcondition: string;
    primarysymptomlist: Array<any>;
    searchconditionlist: Array<any>;
}

interface OwnProps {
    navigation: any
}

interface InputAreaProps {
    placeholder: string;
    name: string;
    value: any;
    onChange: any;
    searchIcon?: any;
}

type Props = OwnProps;

var list: Array<any> = ["fever", "cough", "sore throat", "runny or stuffy nose", "muscle or body aches", "headaches", "fatigue"]
const InputArea: React.FC<InputAreaProps> = ({ placeholder, name, value, onChange, searchIcon }) => {
    if (name === 'gender') {
        return (
            <View style={styles.inputView}>
                <Text style={styles.inputPlaceholder}>{placeholder}</Text>
                <View style={styles.genderView}>
                    <TouchableOpacity style={[styles.genderBox, { backgroundColor: value === 'male' ? '#035EC7' : '#63C2FE' }]} onPress={() => onChange(name, "male")}>
                        <Text style={{ color: value === 'male' ? '#fff' : '#000' }}>{"Male"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.genderBox, { backgroundColor: value === 'female' ? '#035EC7' : '#63C2FE' }]} onPress={() => onChange(name, "female")}>
                        <Text style={{ color: value === 'female' ? '#fff' : '#000' }}>{"Female"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputPlaceholder}>{placeholder}</Text>
            <Input
                containerStyle={[styles.containerStyle, { width: searchIcon ? '60%' : '70%' }]}
                inputStyle={[styles.inputStyle]}
                inputContainerStyle={[styles.inputContainerStyle, { marginTop: searchIcon ? -5 : 0 }]}
                onChangeText={(value) => onChange(name, value)}
                rightIcon={searchIcon}
                value={value}
                placeholder={searchIcon ? "Symptom" : placeholder} />
        </View>
    )
}

class RegistrationDetails extends React.Component<Props, RegistrationDetailsState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            weight: '',
            height: '',
            gender: 'male',
            conditions: '',
            primarysymptom: '',
            searchcondition: '',
            primarysymptomlist: [],
            searchconditionlist: [],
        };
    }


    public componentDidMount() {
    }

    public render() {
        return (
            <React.Fragment>
                <Header
                    title={'PAIN IN THE APP'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={{ alignItems: 'center', }} style={styles.container}>
                    <InputArea
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.onChange} />
                    <InputArea
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.onChange} />
                    <InputArea
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChange} />
                    <InputArea
                        placeholder="Weight"
                        name="weight"
                        value={this.state.weight}
                        onChange={this.onChange} />
                    <InputArea
                        placeholder="Height"
                        name="height"
                        value={this.state.height}
                        onChange={this.onChange} />
                    <InputArea
                        placeholder="Gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange} />
                    {
                        this.state.primarysymptomlist && this.state.primarysymptomlist.length ?
                            <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps="always" style={styles.searchView}>
                                {
                                    this.state.primarysymptomlist && this.state.primarysymptomlist.map(item => {

                                        return (
                                            <TouchableOpacity onPress={() => {
                                                this.onChange('primarysymptom', item)
                                                this.setState({ primarysymptomlist: [] })
                                            }} style={styles.searchedItem}>
                                                <Text>{item ? item : 'No Product Found'}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                                {
                                    this.state.primarysymptomlist == [] ? <Text>No product found</Text> : null
                                }
                            </ScrollView>
                            : null
                    }
                    <InputArea
                        placeholder="Primary Symptom"
                        name="primarysymptom"
                        value={this.state.primarysymptom}
                        searchIcon={<Icon name="search" type="feather" color="#000" size={18} />}
                        onChange={this.filtered} />
                    {
                        this.state.searchconditionlist && this.state.searchconditionlist.length ?
                            <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps="always" style={styles.searchView}>
                                {
                                    this.state.searchconditionlist && this.state.searchconditionlist.map(item => {

                                        return (
                                            <TouchableOpacity onPress={() => {
                                                this.onChange('searchcondition', item)
                                                this.setState({ searchconditionlist: [] })
                                            }} style={styles.searchedItem}>
                                                <Text>{item ? item : 'No Product Found'}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                                {
                                    this.state.searchconditionlist == [] ? <Text>No product found</Text> : null
                                }
                            </ScrollView>
                            : null
                    }
                    <InputArea
                        placeholder="Search Condition(s)"
                        name="searchcondition"
                        value={this.state.searchcondition}
                        searchIcon={<Icon name="search" type="feather" color="#000" size={18} />}
                        onChange={this.filtered} />
                    <View style={styles.inputView}>
                        <Text>List Condition(s)</Text>
                    </View>
                    <Input
                        containerStyle={[styles.containerStyle, { width: '80%', height: 80 }]}
                        inputStyle={[styles.inputStyle]}
                        multiline={true}
                        returnKeyType="done"
                        blurOnSubmit={true}
                        inputContainerStyle={[styles.inputContainerStyle]}
                        onChangeText={(value) => this.onChange("conditions", value)}
                        value={this.state.conditions}
                        placeholder={"Enter conditions"} />
                    <Button title="Next" buttonStyle={styles.register} containerStyle={styles.buttonContainer} onPress={this.next} />
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

    private filtered = (name: string, value: string) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
        if (value) {
            const re = new RegExp(value, 'i');
            var filtered = list.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.match(re)));
            this.setState(prevState => ({
                ...prevState,
                [name + 'list']: filtered,
            }));
        } else {
            this.setState(prevState => ({
                ...prevState,
                [name + 'list']: list,
            }));
        }
    }

    private next = () => {
        this.props.navigation.navigate('SearchConditions')
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 20 },
    inputPlaceholder: { color: '#000', fontSize: 14 },
    genderView: { borderColor: '#fff', borderWidth: 1, borderRadius: 5, flexDirection: 'row', alignItems: 'center' },
    genderBox: { width: 90, height: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#fff', borderWidth: 1, },
    buttonContainer: { width: '75%', marginTop: 20 },
    register: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    searchView: { zIndex: 20, height: 100, elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' }
})

export const Registration = RegistrationDetails;
