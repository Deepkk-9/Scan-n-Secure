import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_700Bold,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';

const LoginScreen = () => {
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular,
    });

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

                    <TextInput style={styles.inputs} placeholder="email@mes.ac.in" />
                    <TextInput style={styles.inputs} placeholder="**********" secureTextEntry autoCapitalize='none' autoCorrect={false} />

                    <TouchableOpacity style={styles.loginBtn} >
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, fontFamily: "Poppins_400Regular" }} >Login</Text>
                    </TouchableOpacity>

                    <Text>
                        or
                    </Text>

                    <TouchableOpacity style={styles.loginBtn} >
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, fontFamily: "Poppins_400Regular" }} >Login</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient >
        )
    }
}

export default LoginScreen

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

    loginBtn: {
        width: "90%",
        alignItems: "center",
        marginVertical: 15,
        backgroundColor: "#4285F4",
        paddingVertical: 13,
        borderRadius: 5
    }

})