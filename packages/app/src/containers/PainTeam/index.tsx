import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Icon } from "react-native-elements";
import { Header, Specialists } from "../../components";
interface PainTeamState {
}

interface OwnProps {
    navigation: any;
    route: any;
}

type Props = OwnProps;


class PainTeamPage extends React.Component<Props, PainTeamState> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Header
                    title={'SPECIALIST DIRECTORY'}
                    leftIcon={true}
                    rightIcon={false}
                    search={true}
                    navigation={this.props.navigation} />
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.heading}>FEATURE SPECIALISTS</Text>
                    <Specialists
                        full={true}
                        socialIcons={true}
                        small={false}
                        navigation={this.props.navigation}
                        title={"DR>ELIZABETH HOWARD"}
                        designation={"NYC PAIN MANAGEMENT"}
                        email={"EMAIL"}
                        number={"PHONE NUMBER"}
                        website={"WEBSITE"}
                        review={"REVIEWS"}
                        type={"CONDITION KNOWLEDGE BASE"}
                    />
                    <Specialists full={false} socialIcons={false}
                        small={false}
                        navigation={this.props.navigation}
                        title={"DR>MICHAEL MARK"}
                        designation={"PHYSICAL THERAPY"}
                        email={"EMAIL"}
                        number={"PHONE NUMBER"}
                        website={"WEBSITE"}
                        review={"REVIEWS"}
                        type={"CONDITION KNOWLEDGE BASE"}
                    />
                    <Specialists full={false} socialIcons={false}
                        small={true}
                        navigation={this.props.navigation}
                        title={""}
                        designation={""}
                        email={""}
                        number={""}
                        website={""}
                        review={""}
                        type={""}
                    />
                </ScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Icon name={'arrowleft'} type={'antdesign'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="settings" type="Ionicons" />
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        );
    };

    private goBack = () => {
        this.props.navigation.goBack()
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, paddingBottom: 20 },
    contentContainer: { alignItems: 'center', },
    heading: { fontWeight: 'bold', fontSize: 16, width: '90%', marginTop: 20 },
    bottomView: { backgroundColor: '#93BEF2', width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }
})

export const PainTeam = PainTeamPage;
