import React from 'react';
import {Pressable, Text} from 'react-native';

interface Props {
    text: string;
    onPress: () => void;
}

const CustomButton = (props: Props) => {
    return (
        <Pressable onPress={props.onPress}>
            <Text>{props.text || 'button'}</Text>
        </Pressable>
    );
};

export default CustomButton;
