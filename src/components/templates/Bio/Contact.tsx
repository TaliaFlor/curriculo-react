import React from "react";
import {Section} from "../../atoms/Section";
import {IconLink} from "../../molecules/IconLink";

const MARGIN = {marginLeft: '0.75em'};

export const Contact = () => {
    return (
        <Section style={{flexDirection: 'row'}}>
            <IconLink icon="cellphone" href="tel:+5581984466739"/>
            <IconLink style={MARGIN} icon="email" href="mailto:talianadegia@live.com"/>
            <IconLink style={MARGIN} isWebsite icon="github" href="https://github.com/TaliaFlor"/>
            <IconLink style={MARGIN} isWebsite icon="linkedin" href="https://www.linkedin.com/in/talia-flor/"/>
        </Section>
    );
}
