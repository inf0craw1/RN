import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

type BarProps = {
  delay: number;
};

const Bar = ({delay}: BarProps) => {
  const {height} = useWindowDimensions();
  const animatedBarPosition = useRef(new Animated.Value(-100)).current;

  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    console.log('pressed');
    setIsPressed(true);
  };

  useEffect(() => {
    Animated.timing(animatedBarPosition, {
      toValue: height + 20,
      duration: 3000,
      delay: delay,
      useNativeDriver: true,
    }).start();
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
