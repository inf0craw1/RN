import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import Bar from '../components/Bar';

type BarDataType = {
  line: number;
  delay: number;
};

const GameScreen = ({navigation}: {navigation: NavigationStackProp}) => {
  const getRandomBarData = (num = 100) => {
    let randomBars: BarDataType[] = [];
    let accDelays = 3000;

    for (let i = 0; i < num; i++) {
      accDelays += Math.floor(Math.random() * 30) * 100;
      randomBars.push({
        line: Math.floor(Math.random() * 3) + 1,
        delay: accDelays,
      });
    }
  };

  const barData = getRandomBarData();

  const renderBars = (line: number) => {
    const currentLineBars = barData.filter(e => e.line === line);
    const res = currentLineBars.map((e, idx) => (
      <Bar key={`Bar-${idx}`} delay={e.delay} />
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
