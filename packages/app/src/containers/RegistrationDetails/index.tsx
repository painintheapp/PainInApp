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
import {SYMPTOMS_LIST} from "constants/symptoms";
import {CONDITIONS_LIST} from "constants/conditions";
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
    conditionsList: {
        id: number,
        name: String
    }[],
    selectedConditions: any[]
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
            primarysymptomlist: SYMPTOMS_LIST,
            searchconditionlist: CONDITIONS_LIST,
            conditionsList: CONDITIONS_LIST.map((condition, i) => ({
                id: i,
                name: condition
            })),
            selectedConditions: []
        };
    }

    public componentDidMount() {
    }

    public render() {
        return (
            <React.Fragment>
                <Header
                    title={'PainLes'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />

                <View style={[styles.container, { alignItems: 'center' }]}>
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

                    <InputArea
                        placeholder="Primary Symptom"
                        name="primarysymptom"
                        value={this.state.primarysymptom}
                        searchIcon={<Icon name="search" type="feather" color="#000" size={18} />}
                        onChange={this.filtered} />
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
                    <Button title="Next" buttonStyle={styles.register} containerStyle={styles.buttonContainer} onPress={this.next} />
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

    private filtered = (name: string, value: string) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
            searched: false
        }), () => {
            let state = this.state[name];
            if (state) {
                let text = state.toLowerCase()
                let filteredName = SYMPTOMS_LIST.filter((item) => {
                    return item.toLowerCase().match(text)
                })
                console.warn(text, filteredName);
                if (!text || text === '') {
                    this.setState(prevState => ({
                        ...prevState,
                        [name + 'list']: SYMPTOMS_LIST,
                    }));
                } else if (Array.isArray(filteredName)) {
                    this.setState(prevState => ({
                        ...prevState,
                        [name + 'list']: filteredName,
                    }));
                }
            } else {
                this.setState(prevState => ({
                    ...prevState,
                    [name + 'list']: SYMPTOMS_LIST,
                }));
            }
        });
    }

    private next = () => {
        console.log('firstname:', this.state.firstname)
        this.props.navigation.navigate('SearchConditions', { name: this.state.firstname })
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 20 },
    inputPlaceholder: { color: '#000', fontSize: 14 },
    genderView: { borderColor: '#fff', borderWidth: 1, borderRadius: 5, flexDirection: 'row', alignItems: 'center' },
    genderBox: { width: 90, height: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#fff', borderWidth: 1, },
    buttonContainer: { width: '75%', marginTop: 10, marginBottom: 10 },
    register: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    searchView: { zIndex: 20, maxHeight: 100, elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' }
})

export const Registration = RegistrationDetails;
