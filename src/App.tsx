import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CustomButton from './components/CustomButton';

const App = () => {

    const handlePress = () => {
        console.log('press');
    }

    return (
        <SafeAreaView>
            <View>
                <CustomButton text='custom button' onPress={handlePress}></CustomButton>
            </View>
        </SafeAreaView>
    );
};

export default App;
