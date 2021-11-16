// @ts-nocheck
import React from "react";
import {Avatar, Title, useTheme} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {SectionParagraph} from "../../atoms/SectionParagraph";
import {Section} from "../../atoms/Section";


const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullname: {
        fontWeight: "bold",
        marginLeft: '0.5em',
        fontSize: '2em'
    }
});

export const AboutMe = () => {
    const theme = useTheme();

    return (
        <Section first>
            <View style={styles.header}>
                <Avatar.Image size={150} source={require('../../../../assets/images/photo.jpg')}/>
                <Title style={[styles.fullname, {color: theme?.colors.primary}]}>Talia Nadegia Flor</Title>
            </View>
            <View style={{marginTop: '1.5em'}}>
                <SectionParagraph>
                    Analista Plena na Accenture, onde trabalha desde julho de 2019. Também é
                    bacharelanda em Ciência da Computação pela Universidade Católica de Pernambuco,
                    com previsão de graduação para o primeiro semestre de 2023.
                </SectionParagraph>
                <SectionParagraph style={{marginTop: '0.75em'}}>
                    Programa principalmente em Java e se considera uma desenvolvedora backend,
                    mas também tem habilidades em JavaScript e Angular. Sabe um pouco de Python e
                    possui inglês fluente. Já trabalhou com APIs e microserviços.
                </SectionParagraph>
            </View>
        </Section>
    );
}
