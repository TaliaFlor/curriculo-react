import React from "react";
import {Page} from "../components/molecules/Page";
import {AcademicFormation} from "../components/templates/Resume/AcademicFormation";
import {WorkExperience} from "../components/templates/Resume/WorkExperience";
import {Skills} from "../components/templates/Resume/Skills";
import {Languages} from "../components/templates/Resume/Languages";


export const Resume = () => {
    return (
        <Page>
            <WorkExperience/>
            <AcademicFormation/>
            <Languages/>
            <Skills/>
        </Page>
    );
}
