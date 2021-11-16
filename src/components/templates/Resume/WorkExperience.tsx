import React from "react";
import {Section} from "../../atoms/Section";
import {SectionTitle} from "../../atoms/SectionTitle";
import {View} from "react-native";
import {Experience} from "../../molecules/Experience";

export const WorkExperience = () => {
    return (
        <Section first>
            <SectionTitle title="Experiência"/>
            <View>
                <Experience
                    isFirst
                    name="Analista de Software"
                    organization="Accenture"
                    duration="Julho de 2019 - Atual"
                />
            </View>
        </Section>
    );
}
