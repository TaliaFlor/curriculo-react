import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Bio} from "../pages/Bio";
import {Resume} from "../pages/Resume";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {useTheme} from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

export const Routes = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Bio"
            backBehavior="history"
            shifting={true}
            activeColor={theme?.colors.primary}
            inactiveColor="gray"
            screenOptions={{tabBarColor: theme?.colors.surface}}
        >
            <Tab.Screen
                name="Bio"
                component={Bio}
                options={{
                    title: 'Sobre Mim',
                    tabBarIcon: ({focused, color}) => {
                        const icon = focused ? 'person' : 'person-outline';
                        return <Ionicons name={icon} size={18} color={color}/>
                    }
                }}/>
            <Tab.Screen
                name="Resume"
                component={Resume}
                options={{
                    title: 'Currículo',
                    tabBarIcon: ({focused, color}) => {
                        const icon = focused ? 'file-text' : 'file-text-o';
                        return <FontAwesome name={icon} size={18} color={color}/>
                    }
                }}/>
        </Tab.Navigator>
    );
};
