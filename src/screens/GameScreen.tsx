import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import Bar from '../components/Bar';

type BarDataType = {
  line: number;
  delay: number;
};

const GameScreen = ({navigation}: {navigation: NavigationStackProp}) => {
  const [score, setScore] = useState(0);

  const addScore = (additionalScore = 1) => {
    setScore(prev => prev + additionalScore);
  };

  const subtractScore = (subtractionScore = 15) => {
    setScore(prev => prev - subtractionScore);
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  const getRandomBarData = (num = 100) => {
    let randomBars: BarDataType[] = [];
    let accDelays = 1000;

    for (let i = 0; i < num; i++) {
      accDelays += Math.floor(Math.random() * 20) * 30 + 300;
      randomBars.push({
        line: Math.floor(Math.random() * 3),
        delay: accDelays,
      });
    }

    console.log(randomBars);

    return randomBars;
  };

  const barData = getRandomBarData();

  const renderBars = (line: number) => {
    const currentLineBars = barData.filter(e => e.line === line);
    const res = currentLineBars.map((e, idx) => (
      <Bar
        key={`Bar-${idx}`}
        delay={e.delay}
        addScore={addScore}
        subtractScore={subtractScore}
      />
    ));

    return res;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.lineWrapper}>
        <View style={styles.line}>{renderBars(0)}</View>
        <View
          style={[
            styles.line,
            {borderColor: '#000', borderLeftWidth: 1, borderRightWidth: 1},
          ]}>
          {renderBars(1)}
        </View>
        <View style={styles.line}>{renderBars(2)}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lineWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  line: {
    flex: 1,
  },
});

export default GameScreen;
