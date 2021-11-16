import React from "react";
import {AboutMe} from "../components/templates/Bio/AboutMe";
import {Hobbies} from "../components/templates/Bio/Hobbies";
import {Contact} from "../components/templates/Bio/Contact";
import {Page} from "../components/molecules/Page";


export const Bio = () => {
    return (
        <Page>
            <AboutMe/>
            <Hobbies/>
            <Contact/>
        </Page>
    );
}
