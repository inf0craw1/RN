import React from 'react';
import {Pressable, Text} from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const CustomButton = ({text, onPress}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} accessibilityLabel={text}>
            <Text>{text || 'button'}</Text>
        </Pressable>
    );
};

export default CustomButton;
