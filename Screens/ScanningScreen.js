import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Platform, Button } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { auth } from '../firebase';


const ScanningScreen = ({ navigation, route }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const isFocused = useIsFocused();

    useFocusEffect(
        useCallback(() => {
            setScanned(false);
        }, [])
    )

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);



    const handleBarCodeScanned = ({ type, data }) => {
        if (data === auth.currentUser.email) {
            console.log("On scaned data : " + data);
            setScanned(true);
            navigation.navigate('Details', { email: data })
        }
        // alert(`Type : ${type} \n Data : ${data}`);
    }


    const handleScanBack = () => {
        navigation.goBack();
    }

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else {

        if (hasPermission === false) {
            return (alert("No access to camera"));
        }

        return (
            <View style={styles.container}>
                <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.scannerCont}>
                    {
                        isFocused ? <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scanner} /> : null
                    }
                </LinearGradient>
                <TouchableOpacity style={{ marginVertical: 20 }} onPress={handleScanBack}>
                    <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.qrBtn}>
                        <Text style={styles.qrBtntxt}>
                            Back
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ScanningScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
        alignItems: "center",
        justifyContent: "center"
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
    },
    scannerCont: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "70%",
        width: "87%",
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'tomato'
    },

    scanner: {
        width: "100%",
        height: "92%",
    }
})