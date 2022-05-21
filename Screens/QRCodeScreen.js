import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import QRCode from 'react-native-qrcode-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './Card';
import { auth } from '../firebase';
import { storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';




const QRCodeScreen = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const studentDetails = auth.currentUser;
    const [imgUrl, setImgUrl] = useState();
    const [details, setDetails] = useState({});
    const [validUser, isValidUser] = useState(null);

    useEffect(() => {
        const func = async () => {
            const imgName = studentDetails.email;
            console.log(imgName);
            const reference = ref(storage, "/" + imgName + ".png")
            await getDownloadURL(reference).then((re) => {
                setImgUrl(re);
            })
        }

        if (imgUrl == undefined) { func() };

        const getStudentDetails = async () => {
            const StudentCol = query(collection(db, 'Students'), where("email", "==", studentDetails.email));
            const studentSnapshot = await getDocs(StudentCol);


            if (!studentSnapshot.empty) {
                const studentList = studentSnapshot.docs.map(doc => doc.data());
                setDetails(...studentList);
                isValidUser(true);
            }
            else {
                isValidUser(false);
            }

        }
        getStudentDetails();

    }, []);

    console.log(details.name);

    const handleQRBack = () => {
        navigation.goBack();
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                <Card
                    userImg={imgUrl}
                    name={validUser ? details.name : null}
                    dept={validUser ? details.dept : null}
                    email={studentDetails.email}
                    add_no={validUser ? details.admission_no : null}
                    adcyear={validUser ? details.academic_year : null} />

                <View style={styles.qrcCont}>
                    <View style={styles.dpCont}>
                        <Image source={{ uri: imgUrl }} resizeMode="contain" style={styles.dp} />
                    </View>
                    <Text style={{ fontFamily: "Poppins_500Medium", marginTop: 65, marginBottom: 25, textAlign: "center" }}>{studentDetails.email}</Text>

                    <QRCode
                        value={studentDetails.email}
                        size={200} />
                </View>

                <TouchableOpacity onPress={handleQRBack}>
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
        justifyContent: "space-evenly",
        backgroundColor: "#F3F3F3",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    },

    qrcCont: {
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginTop: 30,
        paddingBottom: 30
    },

    dpCont: {
        borderRadius: 50,
        backgroundColor: "#000",
        width: 100,
        height: 100,
        position: "absolute",
        top: "-15%"
    },

    dp: {
        height: "100%",
        width: "100%"
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