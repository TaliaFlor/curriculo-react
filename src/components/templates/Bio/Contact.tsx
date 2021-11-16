import React from "react";
import {Section} from "../../atoms/Section";
import {IconLink} from "../../atoms/IconLink";


export const Contact = () => {
    return (
        <Section style={{flexDirection: 'row'}}>
            <IconLink icon="cellphone" href="tel:+0000000000000"/>
            <IconLink style={{marginLeft: '0.75em'}} icon="email-multiple" href="mailto:email@email.com"/>
            <IconLink style={{marginLeft: '0.75em'}} isWebsite icon="github" href="https://github.com/[id]"/>
            <IconLink style={{marginLeft: '0.75em'}} icon="linkedin" href="linkedin://profile/[id]"/>
        </Section>
    );
}
