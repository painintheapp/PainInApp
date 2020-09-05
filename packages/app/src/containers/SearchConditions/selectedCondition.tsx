import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Button, CheckBox, Icon } from "react-native-elements";
import { Header } from "../../components";
interface SearchConditionsState {
    no: boolean;
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
        };
    }


    public componentDidMount() {
    }

    public render() {
        const Conditions = this.props.route.params.condition && this.props.route.params.condition[0];
        return (
            <React.Fragment>
                <Header
                    title={'CONDITIONS'}
                    leftIcon={true}
                    rightIcon={true}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
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
                    <View style={styles.backView}>
                        <Button title="" icon={<Icon name="caretleft" type="antdesign" />} buttonStyle={styles.backCaret} containerStyle={styles.buttonContainer} onPress={this.goBack} />
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
        const Conditions = this.props.route.params.condition;
        if (!no) {
            this.props.navigation.navigate('SearchConditions', { Conditions: Conditions });
        } else {
        }
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 },
    inputView: { width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 20 },
    heading: { color: '#000', fontSize: 16, fontWeight: 'bold' },
    subheading: { color: '#000', fontSize: 14, marginBottom: 30, marginTop: 10, textAlign: 'center' },
    doyouknow: { color: '#fff', fontSize: 14, marginBottom: 30, marginTop: 10 },
    topView: { width: '90%', alignItems: 'center' },
    acceptButtonContainer: { width: '75%', marginTop: 20 },
    accept: { backgroundColor: '#035EC7', borderRadius: 5 },
    buttonContainer: { marginTop: 20 },
    backCaret: { backgroundColor: 'transparent', borderRadius: 5 },
    toggleView: { backgroundColor: 'transparent', borderWidth: 0 },
    backView: { width: '90%', alignItems: 'flex-start' },
    searchView: { zIndex: 20, maxHeight: '70%', elevation: 3, borderWidth: 0, width: '90%', borderRadius: 0, marginBottom: 20, backgroundColor: '#fff' },
    searchedItem: { width: '100%', alignItems: 'flex-start', height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d7d7d7' }
})

export const SelectedCondition = SelectedConditionPage;
