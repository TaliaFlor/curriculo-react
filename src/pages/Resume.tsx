import {StyleSheet} from "react-native";
import React from "react";
import {Page} from "../components/molecules/Page";
import {AcademicFormation} from "../components/templates/Resume/AcademicFormation";

const styles = StyleSheet.create({
    container: {}
});

export const Resume = () => {
    return (
        <Page>
            <AcademicFormation/>
        </Page>
    );
}
