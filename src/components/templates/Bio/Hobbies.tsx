import React from "react";
import {SectionTitle} from "../../atoms/SectionTitle";
import {SectionParagraph} from "../../atoms/SectionParagraph";
import {Section} from "../../atoms/Section";


export const Hobbies = () => {
    return (
        <Section>
            <SectionTitle title="Hobbies"/>
            <SectionParagraph style={{marginTop: '0.5em'}}>
                Meu hobby principal é a leitura. Meu genêro favorito
                incontestadamente é fantasia, mas também leio outras coisas,
                como: ficção científica, mistério, romance e não-ficção -
                onde, nesse caso, leio mais pop science, história, tecnologia
                e biografia.
            </SectionParagraph>
        </Section>
    );
}
