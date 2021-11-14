import React from 'react';
import {Routes} from './src/routes/Routes';
import {Provider as PaperProvider,} from "react-native-paper";
import {ThemeProvider, useThemeContext} from "./src/contexts/ThemeContext";
import {NavigationContainer} from "@react-navigation/native";


export default function App() {
    return (
        <ThemeProvider>
            <Main/>
        </ThemeProvider>
    );
}

const Main = () => {
    const {theme} = useThemeContext();

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Routes/>
            </NavigationContainer>
        </PaperProvider>
    );
}
