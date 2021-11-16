import React from "react";
import {StyleSheet} from "react-native";
import {Surface} from "react-native-paper";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        paddingVertical: '1.5em',
        paddingHorizontal: '3em',
        // @ts-ignore
        borderRadius: '1em',
        width: '23em',
    }
});


type Props = {
    isFirst?: boolean,
    style?: any,
    children?: any,
};

export const Section = (props: Props) => {
    const marginTop = (props.isFirst ? '' : {marginTop: '1em'});

    return (
        <Surface style={[styles.container, props.style, marginTop]}>
            {props.children}
        </Surface>
    );
}
