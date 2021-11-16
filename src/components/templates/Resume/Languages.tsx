import React from "react";
import {StyleSheet, View} from "react-native";
import {Section} from "../../atoms/Section";
import {SectionTitle} from "../../atoms/SectionTitle";
import {Competency} from "../../molecules/Competency";


const styles = StyleSheet.create({
    languages: {
        display: "flex",
        flexDirection: "row",
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '0.25em'
    }
})

export const Languages = () => {
    return (
        <Section>
            <SectionTitle title="Idiomas"/>
            <View style={styles.languages}>
                <Competency first icon="format-letter-case" value="Inglês"/>
            </View>
        </Section>
    );
}
