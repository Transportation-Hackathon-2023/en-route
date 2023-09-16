import React from "react";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../models/surveyModel";

export const SurveyForm = () => {
  const survey = new Model(surveyJson);
  console.log(survey);
  return (
    <div>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyForm;
