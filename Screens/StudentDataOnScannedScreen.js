import { StyleSheet, Text, View, Platform, StatusBar, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase';


const StudentDataOnScannedScreen = ({ navigation, route }) => {

    const { email } = route.params;
    console.log("This is from the props " + email);

    const [details, setDetails] = useState({});

    useEffect(() => {
        const getStudentDetails = async () => {
            const StudentCol = query(collection(db, 'Students'), where("email", "==", email));
            const studentSnapshot = await getDocs(StudentCol);
            const studentList = studentSnapshot.docs.map(doc => doc.data());

            setDetails(...studentList);

        }
        getStudentDetails();

    }, [])



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
        </View>
    )
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