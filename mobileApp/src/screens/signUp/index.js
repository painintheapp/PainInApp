
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../components/Colors'
import Button from "../../components/Button";
import StatusBar from '../../components/StatusBar'
import { useDispatch, useSelector } from 'react-redux'
import { DataRequestAction } from '../../redux/actions/Commonhttp'

const Index = ({ navigation }) => {

    const [data, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confPassword: ""
    })


    const [dataError, setFormDataError] = useState({
        usernameError: "",
        emailError: "",
        passwordError: "",
        confPasswordError: ""
    })

    const [ShowPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch();
    const authProps = useSelector(state => state.auth)
    const { message, accountCreatingLoader, accountCreateSuccess } = authProps

    if (accountCreateSuccess) {
        navigation.navigate('Drawer')
        dispatch({
            type: "update_auth_props"
        })
    }

    const createAccount = () => {
        let errorSet = false;
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        data.email = data.email.trim();
        let dataErrorObj = {
            usernameError: "",
            emailError: "",
            passwordError: "",
            confPasswordError: ""
        };
        if (data.userName === "") {
            dataErrorObj.usernameError = "username required";
            errorSet = true;
        }
        if (data.email === "") {
            dataErrorObj.emailError = "email required"
            errorSet = true;
        }

        if (reg.test(data.email) === false) {
            dataErrorObj.emailError = "email not valid required"
            errorSet = true;
        }

        if (data.password === "") {
            dataErrorObj.passwordError = "password required"
            errorSet = true;
        }
        // if (data.confPassword === "") {
        //     dataErrorObj.confPasswordError = "retype password required"
        //     errorSet = true;
        // }
        // if (data.confPassword !== data.password) {
        //     dataErrorObj.confPasswordError = "password not matched"
        //     errorSet = true;
        // }

        console.log("========= data Set =======", data, errorSet);
        setFormDataError(dataErrorObj);
        if (!errorSet) {
            data.createdFrom = "app"
            dispatch(DataRequestAction('POST', 'signup', 'registerUser', data, 'creatingAccount'))
        }

    }

    console.log("======== data ======", dataError, data);

    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['#BBD2F3', '#10458B', '#438AD1']}
            style={styles.linearGradient}>
            <StatusBar />
            <SafeAreaView />
            <View style={styles.headerView}>
                <Text style={styles.headerText} >PAIN IN THE APP</Text>
                <Text style={[styles.headerText, { fontSize: 20, marginTop: 10, color: '#262522' }]} >a chronic pain management tool</Text>

            </View>
            <View style={styles.footerView}>
                <Text style={[styles.headerText, { fontWeight: '200' }]} >Sign up</Text>
                <TextInput
                    placeholder='Full Name'
                    autoCorrect={false}
                    //value={data.userName}
                    style={dataError.usernameError !== "" ? styles.TextInputError : styles.TextInput}
                    onChangeText={e => {
                        data.fullName = e;
                        setFormData(data);
                        dataError.usernameError = ""
                        setFormDataError({ ...dataError })
                    }}
                />

                <TextInput
                    placeholder='Email'
                    autoCorrect={false}
                    style={dataError.emailError !== "" ? styles.TextInputError : styles.TextInput}
                    autoCapitalize={false}
                    onChangeText={e => {
                        data.email = e;
                        setFormData(data);
                        dataError.emailError = ""
                        setFormDataError({ ...dataError })
                    }}
                />

                <View style={[styles.fullNameView, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <TextInput
                        placeholder='Password'
                        autoCorrect={false}
                        secureTextEntry={ShowPassword ? false : true}
                        style={[styles.TextInput, { width: '90%' }]}
                        onChangeText={e => {
                            console.log("======== e ======", data.password);
                            data.password = e;
                            setFormData(data);
                            let dataErrorObj = dataError;
                            dataErrorObj.passwordError = ""
                            setFormDataError({ ...dataErrorObj })
                        }}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)} >
                        <Text>{ShowPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>

                </View>
                <Button
                    name='Create your account'
                    color={Color.White}
                    backgroundColor={Color.lightblue}
                    onPress={() => createAccount()}
                />

                <View style={styles.signupView}>
                    <Text>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupButtonText}>Sign in</Text>

                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },

    headerView: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '500'
    },
    footerView: {
        flex: 2,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    fullNameView: {
        backgroundColor: Color.White,
        height: 50,
        paddingHorizontal: 15,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

    },
    TextInput: {
        width: '80%',
        paddingLeft: 10,
        backgroundColor: Color.White,
        paddingHorizontal: 15,
        fontSize: 20,
        marginTop: 25,
        height: 40,
    },

    TextInputError: {
        width: '80%',
        borderColor: 'red',
        backgroundColor: Color.White,
        marginTop: 25,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 20,
        height: 40
    },

    signupView: {
        flexDirection: 'row',
        width: '51%',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signupButtonText: {
        fontSize: 15,
        color: Color.White
    }
});


export default Index;
