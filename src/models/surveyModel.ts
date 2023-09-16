export const surveyJson = {
  elements: [
    {
      name: "ZipCode",
      title: "Enter your home zipcode:",
      type: "text",
    },
    {
      name: "Email",
      title: "Enter your email:",
      type: "text",
    },
    {
      name: "Destination",
      title: "Destination:",
      type: "text",
    },
    {
      name: "ModeOfTransportation",
      title: "How did you get here?",
      type: "dropdown",
      choices: ["Car", "Bus", "Walking"],
    },
    {
      name: "TimeFrame",
      title: "How long did it take for you to get here?",
      type: "dropdown",
      choices: [
        "< 30 minutes",
        "30 minutes - 1 hour",
        "1 - 2 hours",
        "2 - 3 hours",
        "3 + hours",
      ],
    },
  ],
};
