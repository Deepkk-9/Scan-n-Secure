import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    Poppins_400Regular,
} from '@expo-google-fonts/poppins';

const DetailsCard = (props) => {
    return (
        <View style={styles.arr}>
            <Text style={[styles.font, { fontWeight: "bold" }]}>{props.about}</Text>
            <Text style={styles.font}> {props.data} </Text>
        </View>
    )
}

export default DetailsCard;

const styles = StyleSheet.create({
    arr: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 7,
        marginVertical: 10,
        padding: 10,
        marginHorizontal: 5
    },

    font: {
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
    }
})