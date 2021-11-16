import React from "react";
import {Linking} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import {IconButton, useTheme} from "react-native-paper";


type Props = {
    isWebsite?: boolean,
    icon: string,
    href: string,
    style?: any,
}

export const IconLink = (props: Props) => {
    const theme = useTheme();

    const goto = () => props.isWebsite ? WebBrowser.openBrowserAsync(props.href) : Linking.openURL(props.href)

    return <IconButton
        style={props.style}
        animated
        icon={props.icon}
        size={30}
        color={theme?.colors.primary}
        onPress={goto}
    />
}
