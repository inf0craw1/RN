import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <StyledView>
                <Text>asdf</Text>
            </StyledView>
        </SafeAreaView>
    )
}

const StyledView = styled.View`
    flex: 1;
    background-color: 'black';
`

export default HomeScreen;