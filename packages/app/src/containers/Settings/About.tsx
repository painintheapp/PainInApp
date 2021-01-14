import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Header } from "../../components";

interface AboutPageProps {
}

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

class AboutPage extends React.Component<Props, AboutPageProps> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <React.Fragment>
                <Header
                    title={'About PainLes'}
                    leftIcon={true}
                    rightIcon={false}
                    userIcon={true}
                    navigation={this.props.navigation} />
                <View style={styles.container}>
                    <View style={styles.mainView}>
                        <Text>
                            Can’t move or get of bed and unable to get the day started?
                            Face it there are so many people suffering from chronic pain.
                            We must strive to discover our PMP, a self made algorithm comprised of the most
                            effective blend of body movement, diet, vitamins, medication, and/or alternative
                            lifestyle habits to mitigate the pain. Know your body, where it’s going,
                            and what it’s doing in order to Let Everything Subside!
                        </Text>
                    </View>
                </View>
            </React.Fragment>
        );
    };
}


const styles = StyleSheet.create({
    container: { backgroundColor: '#93BEF2', flex: 1, alignItems: 'center', justifyContent: 'center' },
    mainView: { flex: 1, width: '100%', alignItems: 'flex-start', paddingHorizontal: 24, paddingVertical: 12 },
    heading: { color: '#000', fontSize: 20, marginTop: 20 },
    subheading: { color: '#000080', fontSize: 14 },
    menuItem: { fontSize: 24, fontWeight: 'bold', marginVertical: 18 },
    logo: { height: 200 },
    icons: { width: 80 },
    titleStyle: { color: '#000080' },
    items: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
    login: { width: '100%', marginTop: 20, backgroundColor: '#14CAFF' }
})

export const About = AboutPage;
