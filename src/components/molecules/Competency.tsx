import React from "react";
import {Chip, useTheme} from "react-native-paper";


type Props = {
    first?: boolean,
    icon?: string,
    value: string,
};

export const Competency = (props: Props) => {
    const theme = useTheme();

    const margin = props.first ? '' : {margin: '0.25em'};

    const icon = props.icon || '';
    const value = props.value || '';

    // @ts-ignore
    return <Chip style={[margin, {borderColor: theme?.colors.primary}]} icon={icon} mode="outlined">{value}</Chip>
}
