import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Platform } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';


const ScanningScreen = ({ navigation, route }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setScanned(false);
        }, [])
    )

    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>
                    Requesting for permission
                </Text>
            </View>
        )
    }


    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                {navigation.goBack()}
            </View>
        )
    }

    if (hasPermission === true) {

        const handleBarCodeScanned = ({ type, data }) => {
            console.log("On scaned data : " + data);
            setScanned(true);
            navigation.navigate('Details', { email: data });
        }

        const handleScanBack = () => {
            navigation.goBack();
        }

        return (
            <View style={styles.container}>
                <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.scannerCont}>
                    {
                        isFocused ? <BarCodeScanner barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scanner} /> : null
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