import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {NavigationStackProp} from 'react-navigation-stack';
import CustomButton from "../components/CustomButton";



const HomeScreen = ({navigation}: {navigation: NavigationStackProp}) => {

    const handlePlayPress = () => {
        navigation.navigate('Game');
    }

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.styledView}>
            <CustomButton text="Play" onPress={handlePlayPress}></CustomButton>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    styledView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;