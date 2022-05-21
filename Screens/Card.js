import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    useFonts,
    Poppins_500Medium,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const Card = (props) => {

    return (
        <View style={styles.containerM}>
            <LinearGradient colors={['#6F55CB', '#B151C3']} style={styles.container}>
                <Image source={require("../assets/mes-logo-blur.png")} style={styles.logoImg} />

                <Text style={styles.data}>
                    Pillai HOC College of Engineering and Technology
                </Text>

                <View style={styles.midImg_info}>
                    <View style={styles.dpCont}>
                        <Image source={{ uri: props.userImg }} resizeMode="contain" style={styles.dp} />
                    </View>

                    <View>
                        <Text style={styles.white}>
                            {props.name}
                            {/* Deep K Kawalee */}
                        </Text>
                        <Text style={styles.white}>
                            {props.dept}
                            {/* Diploma Computer 2019 */}
                        </Text>
                        <Text style={styles.white}>
                            {props.email}
                        </Text>
                    </View>
                </View>

                <View style={styles.botImg_info}>
                    <Text style={[styles.white, { marginLeft: 15 }]}>
                        {props.adcyear}
                    </Text>
                    <Text style={styles.white}>
                        {props.add_no}
                    </Text>
                    <Image source={require("../assets/pillai-logo-w.png")} />
                </View>

            </LinearGradient>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({

    containerM: {
        width: "90%",
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },

    container: {
        borderRadius: 15
    },

    logoImg: {
        position: 'absolute',
        right: 7,
        top: 7,
    },

    data: {
        textAlign: "center",
        fontFamily: "Poppins_600SemiBold",
        color: "#fff",
        marginVertical: 10,
        fontWeight: "bold"
    },

    dpCont: {
        height: 75,
        width: 75,
        borderRadius: 50,
        backgroundColor: "#000",
        marginHorizontal: 20
    },

    dp: {
        width: "100%",
        height: "100%"
    },

    midImg_info: {
        flexDirection: "row",
        width: "60%",
        marginTop: 15
    },

    botImg_info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },

    white: {
        color: "#fff",
        fontSize: 13,
        fontFamily: "Poppins_500Medium"
    }

})