import React from "react";
import { StyleSheet, View } from "react-native";

const Bar = () => {
    return (
        <View style={styles.bar}>
            
        </View>
    )
};

const styles = StyleSheet.create({
    bar: {
        position: 'absolute',

        width: '100%',
        height: 16,
        backgroundColor: '#424ef3'

    }
})

export default Bar;