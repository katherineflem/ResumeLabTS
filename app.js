"use strict";
var name = "Katherine Fleming";
var career = "Non-Profit Operations Administrator / wannabe Software Developer";
var upper = name.toUpperCase();
var description = "Description of Myself";
{
    console.log("Name:" + name.toUpperCase());
    console.log("Career:" + career);
    console.log("Description:" + description);
}
var myInterests = ["* Summertime and the beach", "* Music", "* Design", "* Animals"];
{
    console.log("My Interests:");
}
{
    for (var i = 0; i < myInterests.length; i++) {
        console.log(myInterests[i]);
    }
}
console.log("My Previous Experience");
function displayPosition(comp, job, desc) {
    console.log("*" + job + "at" + comp + "-" + desc);
}
displayPosition("Fleming Construction", "Administrative Assistant", "filing, data entry and invoicing");
displayPosition("Leukemia & Lymphoma Society", "Campaign Specialist", "marketing, fundraising, event planning");
displayPosition("Leukemia & Lymphoma Society", "Operations Administrator", "invoicing, daily deposits,office admin and campaign assistance");
{
    console.log("My Skills:");
}
var x = new Boolean(true);
function displaySkill(skill, x) {
    if (x) {
        console.log("*" + "BAM:" + skill);
    }
    else {
        console.log("*" + skill);
    }
}
displaySkill("Guitar", x);
displaySkill("html & css", x);
displaySkill("javascript");
displaySkill("graphic design", x);
