import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { height } = useWindowDimensions();
    const image = require("../assets/Signinwithoutbutton.png");
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" source={image} style={styles.Background}>
                <View style={styles.loginView}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#ababab55"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={[styles.TextInput, { color: "black" }]}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#ababab55"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.forgottenView}>
                        <TouchableOpacity style={[styles.loginText, { color: "#4040fdaa" }]} onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forgottentext}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.BtnView}>
                        <TouchableOpacity style={styles.loginBtn}  >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.GoogleView}>
                            <TouchableOpacity style={styles.FacebookBtn}  >
                                <Text style={styles.loginText}>Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.GoogleBtn}  >
                                <Text style={styles.loginText}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CreateBtn}>
                            <TouchableOpacity   >
                                <Text style={[styles.loginText, { color: "black" }]}>Create an account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Background: {

        // justifyContent: 'flex-end',
        width: '100%',
        height: '100%',

    },
    loginView: {
        alignItems: 'center',
        width: '100%',
    },
    inputView: {
        backgroundColor: '#85858629',
        borderColor: '#505050',
        borderRadius: 10,
        width: '80%',
        height: "7%",
        marginTop: "50%",
        marginBottom: "10%",

    },
    inputView2: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: "7%",
        marginBottom: "10%",

    },
    TextInput: {
        height: "100%",
        // padding: "5%",
        marginLeft: "5%",
    },
    BtnView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
    },
    GoogleView: {
        flexDirection: 'row',
        width: "40%",
        height: "20%",
        marginRight: "40%",
    },
    forgottenView: {
        marginRight: "30%",
        paddingLeft: "30%",
    },
    forgottentext: {
        color: '#ED7014',
    },
    loginBtn: {
        width: "80%",
        marginTop: "10%",
        marginBottom: "20%",
        borderRadius: 10,
        height: "13%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },
    FacebookBtn: {
        width: "100%",
        marginRight: "5%",
        // marginBottom: "20%",
        borderRadius: 10,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    GoogleBtn: {
        width: "100%",
        // marginLeft: "45%",
        // marginBottom: "20%",
        borderRadius: 10,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    CreateBtn: {
        marginTop: "1.5%",
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',

    },
});

