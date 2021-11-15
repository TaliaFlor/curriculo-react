import React from "react";
import {Appbar, useTheme} from "react-native-paper";
import {useThemeContext} from "../../contexts/ThemeContext";


export const Header = () => {
    const theme = useTheme();
    const {isThemeDark, toggleTheme} = useThemeContext();

    const THEME_ICON = isThemeDark ? 'moon-waning-crescent' : 'white-balance-sunny';
    const THEME_ICON_COLOR = isThemeDark ? 'white' : '#ffa500';
    const THEME_LABEL = 'Ativar ' + (isThemeDark ? 'Modo Claro' : 'Modo Escuro');

    return (
        <Appbar.Header theme={{colors: {primary: theme?.colors.surface}}}>
            <Appbar.Content title="Talia Flor" color={theme?.colors.primary}/>
            <Appbar.Action icon={THEME_ICON} size={30} color={THEME_ICON_COLOR} accessibilityLabel={THEME_LABEL}
                           onPress={toggleTheme}/>
        </Appbar.Header>
    );
}
