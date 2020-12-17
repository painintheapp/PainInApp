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
import { CONDITIONS_LIST } from "constants/conditions";

interface SearchConditionsState {
    searchcondition: string;
    searchconditionlist: Array<any>;
    selectedlist: Array<any>;
    searched: boolean;
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class SearchConditionsPage extends React.Component<Props, SearchConditionsState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            searchcondition: '',
            searchconditionlist: [],
            selectedlist: [],
            searched: false,
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
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <Text style={styles.heading}>{"Conditions"}</Text>
                        <Text style={styles.subheading}>{"Hi Patty, which condition(s) are you dealing with?"}</Text>
                        <Input
                            containerStyle={[styles.containerStyle, { width: '90%' }]}
                            inputStyle={[styles.inputStyle]}
                            inputContainerStyle={[styles.inputContainerStyle, { marginTop: -5 }]}
                            onChangeText={(value) => this.filtered('searchcondition', value)}
                            leftIcon={<Icon name="search" type="feather" color="#000" size={18} />}
                            value={this.state.searchcondition}
                            placeholder={"Search"} />
                        {
                            this.state.searchconditionlist && this.state.searchconditionlist.length ?
                                <ScrollView keyboardDismissMode='none' keyboardShouldPersistTaps="always" style={styles.searchView}>
                                    {
                                        this.state.searchconditionlist && this.state.searchconditionlist.map(item => {

                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    this.onChange('searchcondition', item)
                                                    this.setState({ searchconditionlist: [], searched: true })
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
                        <Text style={styles.doyouknow}>{"Do you know your condition? "}<Text>Click here</Text></Text>
                    </View>
                    <Button title="Select Condition" disabled={!this.state.searched} buttonStyle={styles.register} containerStyle={styles.buttonContainer} onPress={this.onSubmit} />
                </View>
            </React.Fragment>
        );
    };

    private onSubmit = () => {
        this.setState({ searchcondition: '' })
        this.props.navigation.navigate('SelectedCondition', { condition: this.state.selectedlist });
    }

    private onChange = (name: string, value: any) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
            selectedlist: [...prevState.selectedlist, value]
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
                let filteredName = CONDITIONS_LIST.filter((item) => {
                    return item.toLowerCase().match(text)
                })
                if (!text || text === '') {
                    this.setState(prevState => ({
                        ...prevState,
                        [name + 'list']: CONDITIONS_LIST,
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
                    [name + 'list']: CONDITIONS_LIST,
                }));
            }
        });
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 20 },
    heading: { color: '#000', fontSize: 16, fontWeight: 'bold' },
    subheading: { color: '#000', fontSize: 14, marginBottom: 30, marginTop: 10 },
    doyouknow: { color: '#fff', fontSize: 14, marginBottom: 30, marginTop: 10 },
    topView: { width: '100%', alignItems: 'center' },
    buttonContainer: { width: '75%', marginTop: 20 },
    register: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    searchView: { zIndex: 20, maxHeight: '70%', elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' }
})

export const SearchConditions = SearchConditionsPage;
