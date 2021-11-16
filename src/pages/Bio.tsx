import {ScrollView, StyleSheet, View} from "react-native";
import React from "react";
import {AboutMe} from "../components/templates/Bio/AboutMe";
import {Hobbies} from "../components/templates/Bio/Hobbies";
import {Contact} from "../components/templates/Bio/Contact";


const MARGIN = '0.5em';

const styles = StyleSheet.create({
    flex: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const Bio = () => {
    return (
        <ScrollView contentContainerStyle={styles.flex}>
            <View style={{marginTop: MARGIN}}/>

            <AboutMe/>
            <Hobbies/>
            <Contact/>

            <View style={{marginBottom: MARGIN}}/>
        </ScrollView>
    );
}
