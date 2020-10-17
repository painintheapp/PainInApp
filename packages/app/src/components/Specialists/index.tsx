import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { Icon } from "react-native-elements";

interface SpecialistsComponentState {
}

interface OwnProps {
    navigation: any;
    socialIcons: boolean;
    full: boolean;
    title: any;
    designation: any;
    email: any;
    number: any;
    website: any;
    review: any;
    type: any;
    small: boolean;
}

type Props = OwnProps;

class SpecialistsComponent extends React.Component<Props, SpecialistsComponentState> {
    constructor(props: Props) {
        super(props);

    }


    public render() {
        const {
            socialIcons,
            full, title, small,
            designation,
            email,
            number,
            website,
            review,
            type, } = this.props;
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.viewContainer}>
                        <View style={styles.imageView}>
                            <Image style={{ width: '100%', height: full ? 200 : small ? 100 : 150 }} source={require('../../../assets/images/dr.jpg')} />
                            {
                                full &&
                                <View style={styles.smallImages}>
                                    <Image style={styles.smallImage} source={require('../../../assets/images/dr1.jpg')} />
                                    <Image style={styles.smallImage} source={require('../../../assets/images/dr2.jpg')} />
                                </View>
                            }
                        </View>
                        <View style={styles.textView}>
                            {
                                !small ?
                                    <View style={styles.textContainer}>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{title} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{designation} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{email} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{number} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{website} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{review} </Text>
                                        <Text style={{ fontSize: full ? 14 : 12 }}>{type} </Text>
                                        {
                                            full &&
                                            <Text style={styles.quote}>{"QUOTE:"} </Text>
                                        }
                                    </View>
                                    : <View />
                            }
                            <React.Fragment>
                                {
                                    socialIcons &&
                                    <View style={styles.socialIcons}>
                                        <Icon name={"linkedin"} type={"entypo"} />
                                        <Icon name={"youtube-square"} type={"font-awesome"} />
                                        <Icon name={"mail"} type={"entypo"} />
                                        <Icon name={"twitter"} type={"entypo"} />
                                    </View>
                                }
                                <View style={styles.resizeIcon}>
                                    <Icon name={"resize-full-screen"} type={"entypo"} />
                                </View>
                            </React.Fragment>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        );
    };


}


const styles = StyleSheet.create({
    container: { padding: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' },
    viewContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, paddingBottom: 10 },
    imageView: { width: '45%' },
    smallImages: { flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between' },
    smallImage: { width: '45%', height: 50 },
    textView: { width: '50%', justifyContent: 'space-between' },
    quote: { marginTop: 10, fontWeight: 'bold' },
    textContainer: { width: '100%' },
    resizeIcon: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' },
    socialIcons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '80%', marginBottom: -30 }
})

export const Specialists = SpecialistsComponent;
