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
        // @ts-ignore
        borderRadius: '1em',
    },
    course: {
        // @ts-ignore
        fontSize: '0.9em',
        fontWeight: "bold",
    },
    type: {
        // @ts-ignore
        fontSize: '0.6em',
    },
    institute: {
        // @ts-ignore
        fontSize: '0.75em',
    },
    duration: {
        // @ts-ignore
        fontSize: '0.6em',
    }
});


type Props = {
    isFirst?: boolean,
    course: string,
    institute: string,
    duration: string,
};

export const Formation = (props: Props) => {
    const theme = useTheme();

    const marginTop = (props.isFirst ? '' : {marginTop: '0.5em'});
    const courseTheme = {
        color: theme?.colors.primary,
        opacity: 0.85
    };

    return (
        <Surface style={[styles.container, marginTop]}>
            <Headline style={[styles.course, courseTheme]}>{props.course}</Headline>
            <Subheading style={styles.institute}>{props.institute}</Subheading>
            <Caption style={styles.duration}>{props.duration}</Caption>
        </Surface>
    );
}
