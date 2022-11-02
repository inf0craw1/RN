import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {NavigationStackProp} from 'react-navigation-stack';
import Bar from "../components/Bar";

type BarDataType = {
    line: number,
    position: number
}

const GameScreen = ({navigation}: {navigation: NavigationStackProp}) => {
    
    const barData = [{line: 1, position: 300},{line: 0, position: 500},{line: 2, position: 700},{line: 1, position: 100}];

    const renderBars = (line: number) => {
        const currentLineBars = barData.filter(e => e.line === line);
        const res = currentLineBars.map((e, idx) => <Bar key={`Bar-${idx}`} />);

        return res;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.lineWrapper}>
                <View style={styles.line}>
                    {renderBars(0)}
                </View>
                <View style={[styles.line, {borderColor: '#000', borderLeftWidth: 1, borderRightWidth: 1}]}>

                {renderBars(1)}
                </View>
                <View style={styles.line}>

                {renderBars(2)}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    lineWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    line: {
        flex: 1,
    },
    
})

export default GameScreen;