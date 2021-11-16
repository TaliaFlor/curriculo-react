import React from "react";
import {Section} from "../../atoms/Section";
import {SectionTitle} from "../../atoms/SectionTitle";
import {View} from "react-native";
import {Experience} from "../../molecules/Experience";

export const AcademicFormation = () => {
    return (
        <Section>
            <SectionTitle title="Formação Acadêmica"/>
            <View>
                <Experience
                    isFirst
                    name="Ciência da Computação"
                    organization="Universidade Católica de Pernambuco"
                    duration="Agosto de 2018 - Junho de 2023"
                />
                <Experience
                    name="Rede de Computadores"
                    organization="Escola Técnica Estadual Maximiano Accioly Campos"
                    duration="2015 - 2017"
                />
                <Experience
                    name="Intercâmbio"
                    organization="Taieri College"
                    duration="Julho de 2016 - Novembro de 2016"
                />
            </View>
        </Section>
    );
}
