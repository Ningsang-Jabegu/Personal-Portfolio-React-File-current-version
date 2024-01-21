// import {total} from "./total"
const skill_Data = {
    "Web Design And Development": {
        index: 0,
        ionIcon_name: "desktop-outline",
        skillLink: "/resume/skill/Web-Design-And-Development",
        skillExternalLinks: {
            "Github":"",
            "FreeCodeCamp":"",
            
        },
        skillText: "The most modern and high-quality design made at a professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
            "Completed Project": {
                "Personal Website": 0,
                "School Website": 0,
                "Social Organization Website": 0,
                "Commercial Store Website": 0,
                "Total" : function() {
                    return(
                        this["Personal Website"] + this["School Website"] + this["Social Organization Website"] + this["Commercial Store Website"]
                    )
                }
                
                // "Total" : total(skill_Data, "Web Design And Development", "Completed Project")
            },
            "Total Project To Complete": {
                "Personal Website": 25,
                "School Website": 25,
                "Social Organization Website": 25,
                "Commercial Store Website": 25,
                "Total" : function() {
                    return(
                        this["Personal Website"] + this["School Website"] + this["Social Organization Website"] + this["Commercial Store Website"]
                    )
                }
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
                },
                "Total" : function() {
                    return(
                        this["Personal Website"]() + this["School Website"]() + this["Social Organization Website"]() + this["Commercial Store Website"]()
                    )
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
        },
    },
    "Graphics Design": {
        index: 1,
        ionIcon_name: "color-palette-outline",
        skillLink: "/resume/skill/Graphics-Design",
        skillExternalLinks: {
            "Github":"",
            "FreeCodeCamp":"",
            
        },
        skillText: "I make high-quality print and digital design.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
            "Completed Project": {
                "Personal Banner Design": 0,
                "School Banner Design": 0,
                "Social Organization Banner Design": 0,
                "Commercial Store Banner Design": 0,
                "Total" : function() {
                    return(
                        this["Personal Banner Design"] + this["School Banner Design"] + this["Social Organization Banner Design"] + this["Commercial Store Banner Design"]
                    )
                }
            },
            "Total Project To Complete": {
                "Personal Banner Design": 25,
                "School Banner Design": 25,
                "Social Organization Banner Design": 25,
                "Commercial Store Banner Design": 25,
                "Total" : function() {
                    return(
                        this["Personal Banner Design"] + this["School Banner Design"] + this["Social Organization Banner Design"] + this["Commercial Store Banner Design"]
                    )
                }
            },
            "Remaining Project": {
                "Personal Banner Design": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Personal Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Personal Website"]
                } ,
                "School Banner Design": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["School Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["School Website"]
                },
                "Social Organization Banner Design": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Social Organization Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Social Organization Website"]
                },
                "Commercial Store Banner Design": function() {
                    return skill_Data[skill_Data["Graphics Design"].index].skillInfo["Total Project To Complete"]["Commercial Store Website"] - skill_Data[skill_Data["Graphics Design"].index].skillInfo["Completed Project"]["Commercial Store Website"]
                },
                "Total" : function() {
                    return(
                        this["Personal Banner Design"]() + this["School Banner Design"]() + this["Social Organization Banner Design"]() + this["Commercial Store Banner Design"]()
                    )
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
        },
    },
    "Front-End Web Dev. Mentoring": {
        index: 2,
        ionIcon_name: "people-circle-outline",
        skillLink: "/resume/skill/Front-End-Web-Dev.-Mentoring",
        skillExternalLinks: {
            "Github":"",
            "FreeCodeCamp":"",
            
        },
        skillTitle: "Front-End Web Dev. Mentoring",
        skillText: "High-quality mentoring of web design and development at the professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
            "Completed Project": {
                "Bootcamp at College" : 0,
                "Total" : function() {
                    return(
                        this["Bootcamp at College"] 
                    )
                }
            },
            "Total Project To Complete": {
                "Bootcamp at College" : 2,
                "Total" : function() {
                    return(
                        this["Bootcamp at College"]
                    )
                }
            },
            "Remaining Project": {
                "Bootcamp at College": function() {
                    return skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Total Project To Complete"]["Bootcamp at College"] - skill_Data[skill_Data["Front-End Web Dev. Mentoring"].index].skillInfo["Completed Project"]["Bootcamp at College"]
                },
                "Total" : function() {
                    return(
                        this["Bootcamp at College"]()
                    )
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
        },
    },
    "Wordpress": {
        index: 3,
        ionIcon_name: "logo-wordpress",
        skillLink: "/resume/skill/Wordpress",
        skillExternalLinks: {
            "Github":"",
            "FreeCodeCamp":"",
            
        },
        skillText: "I make high-quality photos of any category at a professional level.",
        skillInfo: {
            "Started Date": {
                "Year": 2024,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
            "Completed Project": {
                "Personal Wordpress Website": 0,
                "School Wordpress Website": 0,
                "Social Wordpress Organization Website": 0,
                "Commercial Wordpress Store Website": 0,
                "Total" : function() {
                    return(
                        this["Personal Wordpress Website"] + this["School Wordpress Website"] + this["Social Wordpress Organization Website"] + this["Commercial Wordpress Store Website"]
                    )
                }
            },
            "Total Project To Complete": {
                "Personal Wordpress Website": 25,
                "School Wordpress Website": 25,
                "Social Wordpress Organization Website": 25,
                "Commercial Wordpress Store Website": 25,
                "Total" : function() {
                    return(
                        this["Personal Wordpress Website"] + this["School Wordpress Website"] + this["Social Wordpress Organization Website"] + this["Commercial Wordpress Store Website"]
                    )
                }
            },
            "Remaining Project": {
                "Personal Wordpress Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Personal Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Personal Website"]
                } ,
                "School Wordpress Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["School Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["School Website"]
                },
                "Social Wordpress Organization Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Social Organization Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Social Organization Website"]
                },
                "Commercial Wordpress Store Website": function() {
                    return skill_Data[skill_Data["Wordpress"].index].skillInfo["Total Project To Complete"]["Commercial Store Website"] - skill_Data[skill_Data["Wordpress"].index].skillInfo["Completed Project"]["Commercial Store Website"]
                },
                "Total" : function() {
                    return(
                        this["Personal Wordpress Website"]() + this["School Wordpress Website"]() + this["Social Wordpress Organization Website"]() + this["Commercial Wordpress Store Website"]()
                    )
                }
            },
            "Completion Date": {
                "Year": 2025,
                "Month": {
                    "name": "Jan",
                    "num" : 1
                },
                "Day": 1
            },
        },
    }
};

// Call the total function with the correct parameters
// alert(total(skill_Data, "Web Design And Development", "Completed Project"));


export { skill_Data }
// console.log(skill_Data)