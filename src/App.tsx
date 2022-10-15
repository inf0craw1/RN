import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from './components/CustomButton';

const App = () => {

    const handlePress = () => {
        console.log('press');
    };

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text>Test</Text>
                <CustomButton text='custom button' onPress={handlePress}></CustomButton>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;
