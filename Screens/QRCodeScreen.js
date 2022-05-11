import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import QRCode from 'react-native-qrcode-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../firebase';
import { storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';



const QRCodeScreen = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const studentDetails = auth.currentUser;
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const imgName = studentDetails.email;
            console.log(imgName);
            const reference = ref(storage, "/" + imgName + ".png")
            await getDownloadURL(reference).then((re) => {
                console.log("Yup ig Student image is getting fetched");
                setImgUrl(re);
            })
        }

        if (imgUrl == undefined) { func() };
    }, []);

    const handleQRBack = () => {
        navigation.goBack();
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.qrcCont}>
                    <View style={styles.dpCont}>
                        <Image source={{ uri: imgUrl }} resizeMode="contain" style={styles.dp} />
                    </View>
                    <Text style={{ fontFamily: "Poppins_400Regular", marginTop: 65, marginBottom: 25 }}>{studentDetails.email}</Text>

                    <QRCode
                        value={studentDetails.email}
                        size={250} />
                </View>

                <TouchableOpacity style={{ marginVertical: 50 }} onPress={handleQRBack}>
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

export default QRCodeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#F3F3F3",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    },

    qrcCont: {
        width: "85%",
        height: "50%",
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginVertical: 25
    },

    dpCont: {
        borderRadius: 50,
        backgroundColor: "#000",
        width: 100,
        height: 100,
        position: "absolute",
        top: "-12%"
    },

    dp: {
        height: "100%",
        width: "100%"
    },

    qrcode: {
        width: "100%",
        height: 250
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

})