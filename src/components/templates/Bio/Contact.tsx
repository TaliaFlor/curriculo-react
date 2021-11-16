import React from "react";
import {Section} from "../../atoms/Section";
import {IconLink} from "../../atoms/IconLink";

const MARGIN = {marginLeft: '0.75em'};

export const Contact = () => {
    return (
        <Section style={{flexDirection: 'row'}}>
            <IconLink icon="cellphone" href="tel:+5581984466739"/>
            <IconLink style={MARGIN} icon="email" href="mailto:talianadegia@live.com"/>
            <IconLink style={MARGIN} website icon="github" href="https://github.com/TaliaFlor"/>
            <IconLink style={MARGIN} website icon="linkedin" href="https://www.linkedin.com/in/talia-flor/"/>
        </Section>
    );
}
