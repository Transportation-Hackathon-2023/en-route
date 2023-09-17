export const surveyJson = {
  completedHtmlOnCondition: [
    {
      expression:
        "{Language} ='' or {Language} ='English' or {Language} ='Spanish'  or {Language} ='Chinese' or {Language} ='Portugese' or {Language} ='Hindi' or {Language} ='French'",
      html: {
        default:
          "<div id='stuff'><h2>Thanks for your feedback, enjoy your free cup of coffee!</h2><img src='https://cdn.discordapp.com/attachments/1148364974847185036/1152993338539134976/1000006984-01.jpg' width='500px' height='500px'></div>",
      },
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          name: "Language",
          title: "Select your language",
          type: "dropdown",
          choices: [
            "English",
            "Spanish",
            "Chinese",
            "Portugese",
            "Hindi",
            "French",
          ],
        },
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
          type: "checkbox",
          choices: [
            "Personal Vehicle",
            "Friend/Family's Vehicle",
            "Public Transit",
            "Walking",
            "Bike",
            "Taxi",
            "Access a ride",
            "Other",
          ],
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
        {
          name: "ChallengesToTransportation",
          title: "Were there any challenges to getting here?",
          type: "checkbox",
          choices: [
            "Traffic",
            "Safety",
            "Late transit",
            "Unavailable time to commute",
            "Cost",
            "Other",
          ],
        },
      ],
    },
  ],
};
