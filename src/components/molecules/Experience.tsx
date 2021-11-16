// @ts-nocheck
import React from "react";
import {StyleSheet} from "react-native";
import {Caption, Headline, Subheading, Surface, useTheme} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        elevation: 5,
        paddingVertical: '0.75em',
        paddingHorizontal: '1em',
        borderRadius: '1em',
        width: '18em',
    },
    name: {
        fontSize: '0.9em',
        fontWeight: "bold",
    },
    organization: {
        fontSize: '0.75em',
    },
    duration: {
        fontSize: '0.63em',
    }
});


type Props = {
    isFirst?: boolean,
    name: string,
    organization: string,
    duration: string,
};

export const Experience = (props: Props) => {
    const theme = useTheme();

    const marginTop = (props.isFirst ? '' : {marginTop: '0.5em'});
    const courseTheme = {
        color: theme?.colors.primary,
        opacity: 0.85
    };

    return (
        <Surface style={[styles.container, marginTop]}>
            <Headline style={[styles.name, courseTheme]}>{props.name}</Headline>
            <Subheading style={styles.organization}>{props.organization}</Subheading>
            <Caption style={styles.duration}>{props.duration}</Caption>
        </Surface>
    );
}
