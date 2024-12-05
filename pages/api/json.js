function giveElements(){

dataelements = {
    nodes: [
        { id: "Green_Energy", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Affordable_Housing", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Microfinance", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Regenerative_Agriculture", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Education", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Gender_Equality", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Healthcare", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Clean_Technology", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Social_Enterprises", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},
        { id: "Animal_Wellness", group: 1 , ntype: "cause", depth: 0, supportteam: "IS-Finance"},

        //Green Energy companies
        { id: "VivoPower_International", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Brookfield_Renewable", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Spruce_Power_Holding", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Enphase_Energy", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "First_Solar", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Tesla", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "NextEra_Energy", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Nexans_SA", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "HA_Sustainable_Infrastructure", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Fluence_Energy_Inc", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Corn_To_Fuel_Guys", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Affordable Housing companies
        { id: "MI_Homes_Inc", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "NexPoint_Residential_Trust_Inc", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "KB_Home", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Century_Communities", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Loews_Corp", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Jons_Basement", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Microfinance companies
        { id: "Pacific_Community_Ventures", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "CDC_Small_Business_Finance_Corp", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "BRAC_USA", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Grameen_America_Inc", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"}, //social enterprises
        { id: "Kiva", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "BlueHub_Loan_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "EdwardJones_Ventures", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},

        //Regenerative agriculture companies
        { id: "Nutrien_Ltd", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Origin_Materials_Inc", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Gladstone_Land_Corp", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Bioceres_Crop_Solutions_Corp", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Monsanto", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Chickens_R_Us", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Education companies
        { id: "iGravity_Impact_Investment_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "NZ_Dairy_Portfolio", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "5Stone_Green_Cap", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Access_Africa_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Adenia_Capital", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Rural_Enterprise_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Gender Equality companies
        { id: "Business_Partners_International", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Cheyne_Social_Impact_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Community_Investment_Note", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Social_Venture", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Progress_Ltd", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Livelihood_Impact_Fund", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Healthcare companies
        { id: "Spring_Health", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Click_Therapy", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Healthee", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Flatiron_Health", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Definitive_Healthcare", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Cookies_N_Cream_Rehab", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Clean technology companies
        { id: "Aurora_Solar", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "EnergyCap", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "EV_Connect", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Fusion_Solutions", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Carbon_Capture_Corp", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        //Social enterprises companies
        { id: "Warby_Parker", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Toms", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},

        { id: "Ben_and_Jerrys", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},
        { id: "Last_Mile_Health", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"}, //Healthcare
        { id: "Fair_Trade_Coffee", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},

        { id: "Mars", group: 3 , ntype: "opp", depth: 0, supportteam: "IS-Finance"},


        //Advisors
        { id: "John", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Paul", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Ringo", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "George", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Penny", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Ryan", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Frank", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Troy", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Brad", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Jon", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Dave", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Debra", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Stacy", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Faith", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Chris", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"},
        { id: "Jacob", group: 2 , ntype: "advisor", depth: 0, supportteam: "IS-Finance"}
    ],

    links: [
        //Causes to companies
        { source: "Green_Energy", target: "VivoPower_International", value: 1},
        { source: "Green_Energy", target: "Brookfield_Renewable", value: 1},
        { source: "Green_Energy", target: "Spruce_Power_Holding", value: 1},
        { source: "Green_Energy", target: "Enphase_Energy", value: 1},
        { source: "Green_Energy", target: "First_Solar", value: 1},
        { source: "Green_Energy", target: "Tesla", value: 1},
        { source: "Green_Energy", target: "NextEra_Energy", value: 1},
        { source: "Green_Energy", target: "Nexans_SA", value: 1},
        { source: "Green_Energy", target: "HA_Sustainable_Infrastructure", value: 1},
        { source: "Green_Energy", target: "Fluence_Energy_Inc", value: 1},
        { source: "Green_Energy", target: "Corn_To_Fuel_Guys", value: 1},
        { source: "Green_Energy", target: "EV_Connect", value: 1},
        { source: "Affordable_Housing", target: "MI_Homes_Inc", value: 1},
        { source: "Affordable_Housing", target: "NexPoint_Residential_Trust_Inc", value: 1},
        { source: "Affordable_Housing", target: "KB_Home", value: 1},
        { source: "Affordable_Housing", target: "Century_Communities", value: 1},
        { source: "Affordable_Housing", target: "Loews_Corp", value: 1},
        { source: "Affordable_Housing", target: "Jons_Basement", value: 1},
        { source: "Microfinance", target: "Pacific_Community_Ventures", value: 1},
        { source: "Microfinance", target: "CDC_Small_Business_Finance_Corp", value: 1},
        { source: "Microfinance", target: "BRAC_USA", value: 1},
        { source: "Microfinance", target: "Grameen_America_Inc", value: 1},
        { source: "Microfinance", target: "Kiva", value: 1},
        { source: "Microfinance", target: "BlueHub_Loan_Fund", value: 1},
        { source: "Microfinance", target: "EdwardJones_Ventures", value: 1},
        { source: "Regenerative_Agriculture", target: "Nutrien_Ltd", value: 1},
        { source: "Regenerative_Agriculture", target: "Origin_Materials_Inc", value: 1},
        { source: "Regenerative_Agriculture", target: "Gladstone_Land_Corp", value: 1},
        { source: "Regenerative_Agriculture", target: "Bioceres_Crop_Solutions_Corp", value: 1},
        { source: "Regenerative_Agriculture", target: "Monsanto", value: 1},
        { source: "Regenerative_Agriculture", target: "Chickens_R_Us", value: 1},
        { source: "Regenerative_Agriculture", target: "NZ_Dairy_Portfolio", value: 1},
        { source: "Education", target: "iGravity_Impact_Investment_Fund", value: 1},
        { source: "Education", target: "NZ_Dairy_Portfolio", value: 1},
        { source: "Education", target: "5Stone_Green_Cap", value: 1},
        { source: "Education", target: "Access_Africa_Fund", value: 1},
        { source: "Education", target: "Adenia_Capital", value: 1},
        { source: "Education", target: "Rural_Enterprise_Fund", value: 1},
        { source: "Gender_Equality", target: "Business_Partners_International", value: 1},
        { source: "Gender_Equality", target: "Cheyne_Social_Impact_Fund", value: 1},
        { source: "Gender_Equality", target: "Community_Investment_Note", value: 1},
        { source: "Gender_Equality", target: "Social_Venture", value: 1},
        { source: "Gender_Equality", target: "Progress_Ltd", value: 1},
        { source: "Gender_Equality", target: "Livelihood_Impact_Fund", value: 1},
        { source: "Gender_Equality", target: "Rural_Enterprise_Fund", value: 1},
        { source: "Healthcare", target: "Spring_Health", value: 1},
        { source: "Healthcare", target: "Click_Therapy", value: 1},
        { source: "Healthcare", target: "Healthee", value: 1},
        { source: "Healthcare", target: "Flatiron_Health", value: 1},
        { source: "Healthcare", target: "Definitive_Healthcare", value: 1},
        { source: "Healthcare", target: "Cookies_N_Cream_Rehab", value: 1},
        { source: "Healthcare", target: "Century_Communities", value: 1},
        { source: "Clean_Technology", target: "Aurora_Solar", value: 1},
        { source: "Clean_Technology", target: "EnergyCap", value: 1},
        { source: "Clean_Technology", target: "EV_Connect", value: 1},
        { source: "Clean_Technology", target: "Fusion_Solutions", value: 1},
        { source: "Clean_Technology", target: "Carbon_Capture_Corp", value: 1},
        { source: "Social_Enterprises", target: "Warby_Parker", value: 1},
        { source: "Social_Enterprises", target: "Toms", value: 1},
        { source: "Social_Enterprises", target: "Ben_and_Jerrys", value: 1},
        { source: "Social_Enterprises", target: "Last_Mile_Health", value: 1},
        { source: "Social_Enterprises", target: "Fair_Trade_Coffee", value: 1},
        { source: "Animal_Wellness", target: "Mars", value: 1},

        // Causes to FAs
        { source: "Animal_Wellness", target: "Jacob", value: 1},

        { source: "Green_Energy", target: "John", value: 1},
        { source: "Green_Energy", target: "Paul", value: 1},
        { source: "Green_Energy", target: "Ringo", value: 1},

        { source: "Affordable_Housing", target: "George", value: 1},
        { source: "Affordable_Housing", target: "Penny", value: 1},
        { source: "Affordable_Housing", target: "Ryan", value: 1},

        { source: "Microfinance", target: "Frank", value: 1},
        { source: "Microfinance", target: "Troy", value: 1},
        { source: "Microfinance", target: "Brad", value: 1},
        { source: "Microfinance", target: "Jon", value: 1},
        { source: "Microfinance", target: "Chris", value: 1},

        { source: "Regenerative_Agriculture", target: "Dave", value: 1},
        { source: "Regenerative_Agriculture", target: "Debra", value: 1},
        { source: "Regenerative_Agriculture", target: "Stacy", value: 1},

        { source: "Education", target: "Faith", value: 1},
        { source: "Education", target: "John", value: 1},
        { source: "Education", target: "Paul", value: 1},
        { source: "Education", target: "Ringo", value: 1},

        { source: "Gender_Equality", target: "George", value: 1},
        { source: "Gender_Equality", target: "Penny", value: 1},
        { source: "Gender_Equality", target: "Frank", value: 1},

        { source: "Healthcare", target: "Ryan", value: 1},
        { source: "Healthcare", target: "Brad", value: 1},
        { source: "Healthcare", target: "Jon", value: 1},
        { source: "Healthcare", target: "Dave", value: 1},

        { source: "Clean_Technology", target: "Debra", value: 1},
        { source: "Clean_Technology", target: "Stacy", value: 1},
        { source: "Clean_Technology", target: "Faith", value: 1},
        { source: "Clean_Technology", target: "John", value: 1},
        { source: "Clean_Technology", target: "Paul", value: 1},

        { source: "Social_Enterprises", target: "Penny", value: 1},
        { source: "Social_Enterprises", target: "Jon", value: 1},
        { source: "Social_Enterprises", target: "Brad", value: 1},
        { source: "Social_Enterprises", target: "Chris", value: 1}


    ]
};

return dataelements;
}