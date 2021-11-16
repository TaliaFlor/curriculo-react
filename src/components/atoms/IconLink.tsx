import React from "react";
import {Linking, StyleSheet} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import {Avatar, TouchableRipple} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        // @ts-ignore
        borderRadius: '50em'
    }
});

type Props = {
    isWebsite?: boolean,
    icon: string,
    href: string,
    style?: any,
}

export const IconLink = (props: Props) => {
    const goto = () => props.isWebsite ? WebBrowser.openBrowserAsync(props.href) : Linking.openURL(props.href)

    return (
        <TouchableRipple style={[styles.container, props.style]} onPress={goto}>
            <Avatar.Icon icon={props.icon} size={35}/>
        </TouchableRipple>
    );
}
