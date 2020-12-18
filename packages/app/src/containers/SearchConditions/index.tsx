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
import MultiSelect from "react-native-multiple-select";

interface SearchConditionsState {
    conditionsList: { id: string, name: String }[]
    selectedItems: []
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class SearchConditionsPage extends React.Component<Props, SearchConditionsState> {
    constructor(props: Props) {
        super(props);

        console.log('props:', props)

        this.state = {
            conditionsList: CONDITIONS_LIST.map((condition, i) => ({id: '' + i, name: condition})),
            selectedItems: []
        };
    }

    public componentDidMount() {
    }

    public render() {
        const { name } = this.props.route.params

        return (
            <React.Fragment>
                <Header
                    title={'PainLes'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <Text style={styles.heading}>{"Conditions"}</Text>
                        <Text style={styles.subheading}>Hi {name}, which condition(s) are you dealing with?</Text>

                        <View style={{flex: 1, width: '90%' }}>
                            <MultiSelect
                                hideTags
                                items={this.state.conditionsList}
                                uniqueKey="id"
                                onSelectedItemsChange={(items: any) => this.setState({selectedItems: items})}
                                selectedItems={this.state.selectedItems}
                                selectText="Select Condition(s)"
                                searchInputPlaceholderText="Search Items..."
                                onChangeInput={(text) => console.log(text)}
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                searchInputStyle={{color: '#CCC' }}
                                styleTextDropdown={{ paddingHorizontal: 10 }}
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"
                            />
                        </View>

                    </View>
                    <Button title="Select Condition" disabled={this.state.selectedItems.length === 0} buttonStyle={styles.register} containerStyle={styles.buttonContainer} onPress={this.onSubmit} />
                </View>
            </React.Fragment>
        );
    };

    private onSubmit = () => {
        this.props.navigation.navigate('LifeStyle', { condition: this.state.selectedItems });
        this.setState({ selectedItems: [] })
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 20 },
    heading: { color: '#000', fontSize: 16, fontWeight: 'bold' },
    subheading: { color: '#000', fontSize: 14, marginBottom: 30, marginTop: 10 },
    doyouknow: { color: '#fff', fontSize: 14, marginBottom: 30, marginTop: 10 },
    topView: { width: '100%', height: 300, alignItems: 'center' },
    buttonContainer: { width: '75%', marginTop: 20 },
    register: { backgroundColor: '#035EC7', borderRadius: 5 },
    containerStyle: { backgroundColor: '#fff', height: 40, alignItems: 'center' },
    inputContainerStyle: { borderBottomWidth: 0 },
    inputStyle: { fontSize: 14, width: '100%', height: 40, color: '#000080', },
    searchView: { zIndex: 20, maxHeight: '70%', elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' }
})

export const SearchConditions = SearchConditionsPage;
