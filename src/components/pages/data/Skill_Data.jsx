const skill_Data = {
    "Web Design And Development": {
        index: 0,
        ionIcon_name: "desktop-outline",
        skillLink: "/resume/skill/Web-Design-And-Development",
        skillText: "The most modern and high-quality design made at a professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": 1,
                "Day": 1
            },
            "Completed Project": {
                "Personal Website": 0,
                "School Website": 0,
                "Social Organization Website": 0,
                "Commercial Store Website": 0
            },
            "Total Project To Complete": {
                "Personal Website": 25,
                "School Website": 25,
                "Social Organization Website": 25,
                "Commercial Store Website": 25
            },
            "Remaining Project": {
                "Personal Website": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["Personal Website"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["Personal Website"]
                } ,
                "School Website": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["School Website"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["School Website"]
                },
                "Social Organization Website": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["Social Organization Website"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["Social Organization Website"]
                },
                "Commercial Store Website": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["Commercial Store Website"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["Commercial Store Website"]
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": 1,
                "Day": 1
            },
        },
    },
    "Graphics Design": {
        index: 1,
        ionIcon_name: "color-palette-outline",
        skillLink: "/resume/skill/Graphics-Design",
        skillText: "I make high-quality print and digital design.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": 1,
                "Day": 1
            },
            "Completed Project": {
                "Personal Banner Design": 0,
                "School Banner Design": 0,
                "Social Organization Banner Design": 0,
                "Commercial Store Banner Design": 0
            },
            "Total Project To Complete": {
                "Personal Banner Design": 25,
                "School Banner Design": 25,
                "Social Organization Banner Design": 25,
                "Commercial Store Banner Design": 25
            },
            "Remaining Project": {
                "Personal Website": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Personal Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Personal Website"]
                } ,
                "School Website": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["School Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["School Website"]
                },
                "Social Organization Website": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Social Organization Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Social Organization Website"]
                },
                "Commercial Store Website": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Commercial Store Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Commercial Store Website"]
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": 1,
                "Day": 1
            },
        },
    },
    "Front-End Web Dev. Mentoring": {
        index: 2,
        ionIcon_name: "people-circle-outline",
        skillLink: "/resume/skill/Front-End-Web-Dev.-Mentoring",
        skillTitle: "Front-End Web Dev. Mentoring",
        skillText: "High-quality mentoring of web design and development at the professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": 1,
                "Day": 1
            },
            "Completed Project": {
                "Bootcamp at College" : 0
            },
            "Total Project To Complete": {
                "Bootcamp at College" : 2
            },
            "Remaining Project": {
                "Personal Website": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["Bootcamp at College"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["Bootcamp at College"]
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": 1,
                "Day": 1
            },
        },
    },
    "Wordpress": {
        index: 3,
        ionIcon_name: "logo-wordpress",
        skillLink: "/resume/skill/Wordpress",
        skillText: "I make high-quality photos of any category at a professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": 1,
                "Day": 1
            },
            "Completed Project": {
                "Personal Wordpress Website": 0,
                "School Wordpress Website": 0,
                "Social Wordpress Organization Website": 0,
                "Commercial Wordpress Store Website": 0
            },
            "Total Project To Complete": {
                "Personal Wordpress Website": 25,
                "School Wordpress Website": 25,
                "Social Wordpress Organization Website": 25,
                "Commercial Wordpress Store Website": 25
            },
            "Remaining Project": {
                "Personal Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Personal Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Personal Website"]
                } ,
                "School Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["School Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["School Website"]
                },
                "Social Organization Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Social Organization Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Social Organization Website"]
                },
                "Commercial Store Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Commercial Store Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Commercial Store Website"]
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": 1,
                "Day": 1
            },
        },
    }
};

// console.log(skill_Data[0]["skillInfo"]["Remaining Project"])

export { skill_Data }
// console.log(skill_Data)