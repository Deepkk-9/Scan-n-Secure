import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { useFonts, SourceSansPro_600SemiBold } from '@expo-google-fonts/source-sans-pro';
import { FontAwesome } from '@expo/vector-icons';

const SplashScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        SourceSansPro_600SemiBold,
    });

    const getStarted = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.containerM}>
            <ImageBackground
                source={require("../assets/splash-screen.png")}
                resizeMode="contain"
                style={styles.container}
            >
                <Text style={styles.appname}>Scan n' Secure</Text>

                <TouchableOpacity style={styles.getStartBtn} onPress={getStarted} >
                    <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, fontFamily: "SourceSansPro_600SemiBold", marginHorizontal: 10 }} >Get Started</Text>
                    <FontAwesome name="long-arrow-right" size={25} color="black" style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        top: -10,
        backgroundColor: "#fff",
    },

    containerM: {
        backgroundColor: "#fff",
    },

    appname: {
        fontFamily: "SourceSansPro_600SemiBold",
        fontSize: 36,
        position: "absolute",
        top: 155,
    },

    getStartBtn: {
        flexDirection: 'row',
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
        backgroundColor: "#FDE5DF",
        paddingVertical: 13,
        borderRadius: 50,
        position: "absolute",
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    }
})