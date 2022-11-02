import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, useWindowDimensions } from "react-native";

type BarProps = {
    delay: number;
}

const Bar = ({delay}: BarProps) => {
    const { height } = useWindowDimensions();
    const animatedBarPosition = useRef(new Animated.Value(-20)).current;

    useEffect(() => {
        Animated.timing(animatedBarPosition, { 
            toValue: height + 20,
            duration: 5000,
            delay: delay,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.bar, { transform: [{translateY: animatedBarPosition }]}]}>
            
        </Animated.View>
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