import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase';
import AppLoading from 'expo-app-loading';


const StudentDataOnScannedScreen = ({ navigation, route }) => {

    const { email } = route.params;
    console.log("This is from the props " + email);

    const [details, setDetails] = useState({});
    const [validUser, isValidUser] = useState(null);

    useEffect(() => {
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

    }, [])



    if (validUser) {
        return (
            <View style={styles.container}>
                <View style={styles.arr}>
                    <Text>Department: </Text>
                    <Text> {details.dept} </Text>
                </View>
                <View style={styles.arr}>
                    <Text>Email: </Text>
                    <Text>{details.email}</Text>
                </View>
                <View style={styles.arr}>
                    <Text>Name: </Text>
                    <Text> {details.name} </Text>
                </View>
                <View style={styles.arr}>
                    <Text>Phone No. : </Text>
                    <Text> {details.phno} </Text>
                </View>
                <View style={styles.arr}>
                    <Text>Paid Fees. : </Text>
                    <Text> {details.paid_fees} </Text>
                </View>
                <View style={styles.arr}>
                    <Text>Phone No. : </Text>
                    <Text> {details.remaining_fees} </Text>
                </View>
            </View>
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
        justifyContent: "center",
        backgroundColor: "#F3F3F3",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    },

    arr: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: 15
    }
})