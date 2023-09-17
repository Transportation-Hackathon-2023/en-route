import React from "react";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../models/surveyModel";

export const SurveyForm = () => {
  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return (
    <div>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyForm;
