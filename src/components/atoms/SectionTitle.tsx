import React from "react";
import {Headline, useTheme} from "react-native-paper";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title: {
        // @ts-ignore
        fontSize: '1em',
        fontWeight: "bold",
        alignSelf: "flex-start",
        textTransform: "uppercase"
    },
});


type Props = {
  title: string
};

export const SectionTitle = (props: Props) => {
    const theme = useTheme();

    // @ts-ignore
    return <Headline style={[styles.title, {color: theme?.colors.primary}]}>{props.title}</Headline>
}
