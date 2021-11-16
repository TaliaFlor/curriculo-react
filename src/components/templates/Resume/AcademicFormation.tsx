import React from "react";
import {Section} from "../../atoms/Section";
import {SectionTitle} from "../../atoms/SectionTitle";
import {View} from "react-native";
import {Formation} from "../../molecules/Formation";

export const AcademicFormation = () => {
    return (
        <Section isFirst>
            <SectionTitle title="Formação Acadêmica"/>
            <View>
                <Formation
                    isFirst
                    course="Ciência da Computação"
                    institute="Universidade Católica de Pernambuco"
                    duration="Agosto de 2018 - Junho de 2023"
                />
                <Formation
                    course="Rede de Computadores"
                    institute="Escola Técnica Estadual Maximiano Accioly Campos"
                    duration="2015 - 2017"
                />
                <Formation
                    course="Intercâmbio"
                    institute="Taieri College"
                    duration="Julho de 2016 - Novembro de 2016"
                />
            </View>
        </Section>
    );
}
