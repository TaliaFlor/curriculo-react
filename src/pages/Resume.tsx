import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {useTheme} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export const Resume = () => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[{color: theme?.colors.text}]}>Resume</Text>
        </View>
    );
}
