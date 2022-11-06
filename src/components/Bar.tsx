import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';

type BarProps = {
  delay: number;
  addScore: (additionalScore: number) => void;
  subtractScore: (subtractionScore: number) => void;
};

const Bar = ({delay, addScore, subtractScore}: BarProps) => {
  const {height} = useWindowDimensions();
  const animatedBarPosition = useRef(new Animated.Value(-100)).current;

  const [isPressed, setIsPressed] = useState(false);
  let timeout: any;

  const handleTouchStart = () => {
    addScore(10);
    setIsPressed(true);
    clearTimeout(timeout);
  };

  useEffect(() => {
    Animated.timing(animatedBarPosition, {
      toValue: height + 20,
      duration: 3000,
      delay: delay,
      useNativeDriver: true,
    }).start();

    timeout = setTimeout(() => {
      subtractScore(5);
    }, 3000 + delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.bar,
        {backgroundColor: isPressed ? '#8490ff' : '#424ef3'},
        {transform: [{translateY: animatedBarPosition}]},
      ]}>
      <View style={styles.pressable} onTouchStart={handleTouchStart}></View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: '#424ef3',
  },
  pressable: {
    flex: 1,
  },
});

export default Bar;
