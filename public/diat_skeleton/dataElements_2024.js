
function giveElements(){

dataelements = {
    nodes: [
        { id: "Green_Energy", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Enron_2", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "US_Styrofoam", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "MF_for_Gasoline", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Boeing", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},

        { id: "Affordable_Housing", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Cardboard_Homes", group: 3 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},

        { id: "Paul_SuchAndSuch", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},    
        { id: "Some_Guy", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},       
    ],

    links: [
        { source: "Green_Energy", target: "Paul_SuchAndSuch", value: 1}, 
        { source: "Green_Energy", target: "Enron_2", value: 1},  
        { source: "Green_Energy", target: "US_Styrofoam", value: 1},  
        { source: "Green_Energy", target: "MF_for_Gasoline", value: 1},  
        { source: "Green_Energy", target: "Boeing", value: 1},      

        { source: "Affordable_Housing", target: "Paul_SuchAndSuch", value: 1}, 
        { source: "Affordable_Housing", target: "Some_Guy", value: 1}, 
        { source: "Affordable_Housing", target: "Cardboard_Homes", value: 1},  

    ]
};

return dataelements;
}
