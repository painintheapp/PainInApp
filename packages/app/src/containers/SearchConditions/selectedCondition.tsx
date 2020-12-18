import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Button, CheckBox, Icon, Input } from "react-native-elements";
import { Header } from "../../components";
import { CONDITIONS_LIST } from "constants/conditions";

interface SearchConditionsState {
    no: boolean;
    addCondition: boolean;
    searchcondition: string;
    searchconditionlist: Array<any>;
    searched: boolean;
    selectedlist: Array<any>;
}

interface OwnProps {
    navigation: any;
    route: any;
}

type Props = OwnProps;

class SelectedConditionPage extends React.Component<Props, SearchConditionsState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            no: true,
            addCondition: false,
            searchcondition: '',
            searchconditionlist: [],
            selectedlist: [],
            searched: false
        };
    }

    public componentDidMount = () => {
        const Conditions = this.props.route.params.condition && this.props.route.params.condition[0];
        this.setState(prevState => ({
            ...prevState,
            selectedlist: [...prevState.selectedlist, Conditions]
        }));
    }


    public render() {
        const Conditions = this.props.route.params.condition && this.props.route.params.condition[0];
        const { addCondition, searched, searchcondition } = this.state;
        return (
            <React.Fragment>
                <Header
                    title={'CONDITIONS'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
                    {
                        addCondition ?
                            <React.Fragment>
                                <Input
                                    containerStyle={[styles.containerStyle, { width: '90%' }]}
                                    inputStyle={[styles.inputStyle]}
                                    inputContainerStyle={[styles.inputContainerStyle, { marginTop: -5 }]}
                                    onChangeText={(value) => this.filtered('searchcondition', value)}
                                    leftIcon={<Icon name="search" type="feather" color="#000" size={18} />}
                                    value={searched ? "" : searchcondition}
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
                                                            <Text>{item ? item : 'No condition found'}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                            {
                                                this.state.searchconditionlist == [] ? <Text>No condition found</Text> : null
                                            }
                                        </ScrollView>
                                        : null
                                }
                            </React.Fragment>
                            :

                            <View style={styles.topView}>
                                <Text style={styles.heading}>{Conditions}</Text>
                                <Text style={styles.subheading}>{"This condition has been added to your journal. Do you suffer from any other conditions?"}</Text>
                                <CheckBox
                                    center
                                    title='Yes'
                                    checkedIcon='dot-circle-o'
                                    checkedColor={'#fff'}
                                    uncheckedColor={"#fff"}
                                    uncheckedIcon='circle-o'
                                    onPress={() => this.setState({ no: !this.state.no })}
                                    containerStyle={styles.toggleView}
                                    checked={!this.state.no}
                                />
                                <CheckBox
                                    center
                                    title='No'
                                    checkedIcon='dot-circle-o'
                                    checkedColor={'#fff'}
                                    uncheckedColor={"#fff"}
                                    containerStyle={styles.toggleView}
                                    onPress={() => this.setState({ no: !this.state.no })}
                                    uncheckedIcon='circle-o'
                                    checked={this.state.no}
                                />
                                <Button title="Accept" buttonStyle={styles.accept} containerStyle={styles.acceptButtonContainer} onPress={this.onAccept} />
                            </View>
                    }
                    <View style={styles.backView}>
                        <Button title="" icon={<Icon name="caretleft" type="antdesign" />} buttonStyle={styles.backCaret} onPress={this.goBack} />
                        {
                            (addCondition && searched) &&
                            <Text style={styles.selectedCondition}>{searchcondition}</Text>
                        }
                        {
                            (addCondition && searched) &&
                            <Button title="" icon={<Icon name="caretright" type="antdesign" />} buttonStyle={styles.nextCaret} />
                        }
                    </View>
                </View>
            </React.Fragment>
        );
    };

    private goBack = () => {
        this.props.navigation.goBack();
    }

    private onAccept = () => {
        const { no } = this.state;
        if (!no) {
            this.setState({ addCondition: true })
        } else {
            this.props.navigation.navigate('LifeStyle')
        }
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
    heading: { color: '#000', fontSize: 16, fontWeight: 'bold' },
    subheading: { color: '#000', fontSize: 14, marginBottom: 30, marginTop: 10, textAlign: 'center' },
    topView: { width: '90%', alignItems: 'center' },
    acceptButtonContainer: { width: '75%', marginTop: 20 },
    accept: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    searchView: { zIndex: 20, maxHeight: '70%', elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' },
    toggleView: { backgroundColor: 'transparent', borderWidth: 0 },
    backCaret: { backgroundColor: 'transparent', borderRadius: 5 },
    nextCaret: { backgroundColor: '#228B22', borderRadius: 20 },
    selectedCondition: { color: '#228B22' },
    backView: { width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
})

export const SelectedCondition = SelectedConditionPage;
