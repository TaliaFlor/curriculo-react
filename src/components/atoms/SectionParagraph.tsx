import React from "react";

import {Paragraph} from "react-native-paper";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    paragraph: {
        textAlign: "justify",
    }
});


type Props = {
    style?: any,
    children?: any,
};

export const SectionParagraph = (props: Props) => {
    return (
        <Paragraph style={[styles.paragraph, props.style]}>
            {'\t'} {props.children}
        </Paragraph>
    );
}
