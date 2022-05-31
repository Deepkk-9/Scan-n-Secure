import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase';
import { storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import AppLoading from 'expo-app-loading';
import Success from './svgs/Success';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Poppins_700Bold,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import DetailsCard from './components/DetailsCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StudentDataOnScannedScreen = ({ navigation, route }) => {

    const { email } = route.params;


    const [details, setDetails] = useState({});
    const [validUser, isValidUser] = useState(null);
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const imgName = email;
            console.log(imgName);
            const reference = ref(storage, "/" + imgName + ".png")
            await getDownloadURL(reference).then((re) => {
                setImgUrl(re);
            })
        }

        if (imgUrl == undefined) { func() };

        const getStudentDetails = async () => {
            const StudentCol = query(collection(db, 'Students'), where("email", "==", email));
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



    if (validUser) {

        const scanAgain = () => {
            navigation.goBack();
        }

        return (
            <View style={styles.container}>
                <View style={styles.success}>
                    <Success />

                    <Text style={{ fontFamily: "Poppins_400Regular", color: "#1B8700", fontSize: 25, fontWeight: "700" }}>
                        Student Verified Successfully
                    </Text>
                    <Text style={{ fontFamily: "Poppins_400Regular", color: "#000", fontSize: 18 }}>
                        Students Details
                    </Text>
                </View>


                <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.dtlsCard}>

                    <View style={styles.cardTop}>
                        <View style={styles.cardImg}>
                            <Image source={{ uri: imgUrl }} resizeMode="cover" style={{ width: 75, height: 75 }} />
                        </View>

                        <View style={{ width: "70%" }}>
                            <Text style={[styles.text, { fontSize: 15, fontWeight: "700" }]}>
                                {details.name}
                            </Text>
                            <Text style={styles.text}>
                                {details.email}
                            </Text>
                        </View>
                    </View>

                    <DetailsCard about="Department: " data={details.dept} />
                    <DetailsCard about="Email: " data={details.email} />
                    <DetailsCard about="Name: " data={details.name} />
                    <DetailsCard about="Phone No: " data={details.phno} />
                    <DetailsCard about="Paid Fees: " data={details.paid_fees} />
                    <DetailsCard about="Remaining Fees: " data={details.remaining_fees} />
                    <DetailsCard about="Pick Up Spot: " data={details.pickup} />
                </LinearGradient >

                <TouchableOpacity style={styles.scan} onPress={scanAgain}>
                    <LinearGradient colors={['#6F55CB', '#B151C3']} style={[styles.scan, { padding: 18 }]} >
                        <MaterialCommunityIcons name="qrcode-scan" size={32} color="white" />
                    </LinearGradient>
                </TouchableOpacity>

            </View >
        )
    }
    else if (validUser == null) {
        return (
            <AppLoading />
        )
    }
    else {
        return (
            <View style={styles.container}>
                {alert("User does not exist", navigation.goBack())}
                <Text>
                    Invalid User
                </Text>
            </View>

        )
    }

}

export default StudentDataOnScannedScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    },

    cardTop: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 15,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "space-between"
    },

    cardImg: {
        backgroundColor: "#000",
        borderRadius: 50,
    },

    success: {
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    dtlsCard: {
        width: "90%",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    text: {
        color: "#fff",
        marginVertical: 2,
        fontFamily: "Poppins_400Regular",
        fontSize: 13
    },

    scan: {
        borderRadius: 50,
    }
})