import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
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
            navigation.navigate('Scan');
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
            <ScrollView>
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

                    <Text style={styles.guide}>
                        You will be provided a digitally signed secured QR code. This can be authenticated online using the verification utility provided by this app.
                        {"\n\n"}
                        <Text style={[styles.boldS, styles.bold]}>Steps for verification:</Text>
                        {"\n\n"}
                        <Text style={styles.bold}>1.</Text>  Click on the “Scan QR Code” button
                        {"\n\n"}
                        <Text style={styles.bold}>2.</Text>  A notification will prompt to activate your device’s camera
                        {"\n\n"}
                        <Text style={styles.bold}>3.</Text>  Point the camera to the QR code that will appear on the other device
                        {"\n\n"}
                        <Text style={styles.bold}>4.</Text>  Please keep the following points in mind while scanning the QR code {":"}
                        {"\n\n"}
                        <Text style={styles.italic}>
                            {'\t\t'}{'\u2B57'}  QR code should cover at-least 70%-80% of screen
                            {"\n"}
                            {'\t\t'}{'\u2B57'}  Complete QR code should be part of camera frame
                            {"\n"}
                            {'\t\t'}{'\u2B57'}  QR code should be parallel to the camera
                            {"\n"}
                            {'\t\t'}{'\u2B57'}  Camera should be hold steadily for at-least 5 sec
                        </Text>
                        {"\n\n"}
                        <Text style={styles.bold}>5.</Text>  On successful verification the needed data will be displayed on the screen

                    </Text>

                    <TouchableOpacity style={{ marginVertical: 20 }} onPress={handleSignOut}>
                        <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.qrBtn}>
                            <FontAwesome name="sign-out" size={24} color="white" style={styles.qrMIcon} />
                        </LinearGradient>
                    </TouchableOpacity>

                    <Text>
                    </Text>
                </View>
            </ScrollView>
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

    guide: {
        fontFamily: "Poppins_400Regular",
        paddingHorizontal: 30,
        marginVertical: 10,
        fontSize: 14,
    },

    qrMIcon: {
        fontFamily: "Poppins_400Regular",
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
    },

    bold:
    {
        fontWeight: "bold",
    },

    italic:
    {
        fontWeight: "700",
        fontSize: 11
    },

    boldS:
    {
        fontSize: 20,
    }
})