import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const CustomButton = ({text, onPress}: ButtonProps) => {
    return (
        <Pressable style={styles.styledPressable} onPress={onPress} accessibilityLabel={text}>
            <Text style={styles.styledText}>{text || 'button'}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    styledPressable: {
        backgroundColor: '#424ef3',
        padding: 12,
        borderRadius: 9,
    },
    styledText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
    
})

export default CustomButton;
