import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_700Bold,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { auth } from '../firebase';

import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular,
    });

    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const [secureEnter, setsecureEnter] = useState(true);
    const [icon, setIcon] = useState('eye');

    const userLogin = () => {
        signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                alert("Invalid User");
            });
    }

    const passwordVisibility = () => {
        setsecureEnter(!secureEnter);

        setIcon(secureEnter ? "eye-off" : "eye");
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.container}>
                <View style={styles.compContainer}>
                    <Text style={styles.greet}>
                        Welcome!
                    </Text>

                    <Text style={styles.loginDesc}>
                        Sign in with Student MES Account only.
                    </Text>

                    <Image source={require('../assets/pillai-logo.png')} style={styles.logo} resizeMode="contain" />

                    <TextInput
                        style={styles.inputs}
                        placeholder="email@mes.ac.in"
                        onChangeText={text => setMail(text)}
                        value={mail} />

                    <View style={[styles.inputs, styles.passInp]}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="**********"
                            secureTextEntry={secureEnter}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={text => setPass(text)}
                            value={pass}
                        />

                        <TouchableOpacity onPress={passwordVisibility}>
                            <Icon name={icon} size={20} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginBtn} onPress={userLogin}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, fontFamily: "Poppins_400Regular" }} >Login</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient >
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    compContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: "80%",
        width: "83%",
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    },

    greet: {
        fontFamily: "Poppins_700Bold",
        fontSize: 30,
        marginVertical: 20
    },

    loginDesc: {
        fontFamily: "Poppins_400Regular",
        fontSize: 17,
        paddingHorizontal: 25,
        textAlign: "center"
    },

    logo: {
        height: 90,
        width: 90,
        marginVertical: 20
    },

    inputs: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#D4D4D4",
        borderRadius: 5,
        padding: 10,
        marginVertical: 15
    },

    passInp: {
        flexDirection: "row",
    },

    loginBtn: {
        width: "90%",
        alignItems: "center",
        marginVertical: 15,
        backgroundColor: "#4285F4",
        paddingVertical: 13,
        borderRadius: 5
    }

})