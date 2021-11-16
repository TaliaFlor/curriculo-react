import React from "react";
import {StyleSheet, View} from "react-native";
import {Section} from "../../atoms/Section";
import {SectionTitle} from "../../atoms/SectionTitle";
import {Competency} from "../../molecules/Competency";


const styles = StyleSheet.create({
    languages: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '0.25em'
    }
});


export const Skills = () => {
    return (
        <Section>
            <SectionTitle title="Habilidades"/>
            <View style={styles.languages}>
                <Competency first icon="language-java" value="Java"/>
                <Competency value="Spring Boot"/>
                <Competency icon="language-javascript" value="JavaScript"/>
                <Competency icon="language-typescript" value="TypeScript"/>
                <Competency icon="angular" value="Angular"/>
                <Competency icon="language-python" value="Python"/>
                <Competency icon="react" value="React Native"/>
                <Competency icon="git" value="Git"/>
                <Competency value="SQL"/>
                <Competency icon="api" value="REST API"/>
                <Competency value="Microserviços"/>
                <Competency value="Web Apps"/>
            </View>
        </Section>
    );
}
