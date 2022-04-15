import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import {
    useFonts,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';


const InfoBtnScreen = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const { title, btnDesc, type } = route.params;

    const handleCamQr = () => {
        if (type === "T") {
            // navigation.navigate('Scan');
            navigation.navigate('Details');
        }
        if (type === "S") {
            navigation.navigate('QRCode')
        }
    }

    const handleSignOut = () => {
        signOut(auth).then((re) => {
            console.log(re)
        }).catch((error) => {
            console.log(error)
        });
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/mes-logo.png')} style={styles.logo} />

                <Text style={styles.txt}>
                    {title}
                </Text>

                <TouchableOpacity style={{ marginVertical: 20 }} onPress={handleCamQr}>
                    <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.qrBtn}>
                        <Text style={styles.qrBtntxt}>
                            {btnDesc}
                        </Text>
                        <MaterialIcons name="qr-code-scanner" size={32} color="white" style={styles.qrMIcon} />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 20 }} onPress={handleSignOut}>
                    <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.qrBtn}>
                        <FontAwesome name="sign-out" size={24} color="white" style={styles.qrMIcon} />
                    </LinearGradient>
                </TouchableOpacity>

                <Text>
                </Text>
            </View>
        )
    }
}

export default InfoBtnScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
        backgroundColor: "#fff"
    },

    logo: {
        height: 150,
        width: 150,
        marginVertical: 40
    },

    txt: {
        fontFamily: "Poppins_400Regular",
        fontSize: 25
    },

    qrMIcon: {
        marginHorizontal: 15,
    },

    qrBtn: {
        borderRadius: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    qrBtntxt: {
        marginHorizontal: 15,
        color: "#fff",
        fontSize: 17
    }
})