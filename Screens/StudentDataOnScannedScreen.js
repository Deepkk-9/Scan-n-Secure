import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import React from 'react'

const StudentDataOnScannedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
            </View>
            <View style={styles.arr}>
                <Text>Name: </Text>
                <Text>Deep Kawale</Text>
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
        marginVertical: 5
    }
})