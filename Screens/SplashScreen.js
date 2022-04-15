import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
})