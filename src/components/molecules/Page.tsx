import {ScrollView, StyleSheet, View} from "react-native";
import React from "react";


const MARGIN = '0.5em';

const styles = StyleSheet.create({
    flex: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

type Props = {
    style?: any,
    children?: any,
};

export const Page = (props: Props) => {
    return (
        <ScrollView contentContainerStyle={[styles.flex, props.style]}>
            <View style={{marginTop: MARGIN}}/>

            {props.children}

            <View style={{marginBottom: MARGIN}}/>
        </ScrollView>
    );
}
