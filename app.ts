let name1: string= "Katherine Fleming"
let career: string= "Non-Profit Operations Administrator / wannabe Software Developer"
let description: string= "Description of Myself"
{
    console.log(`Name: ${name1.toUpperCase}`)
    console.log(`Career: ${career}`)
    console.log(`Description: ${description}`)
}
let myInterests = ["* Summertime and the beach", "* Music", "* Design", "* Animals"]
{
    for (var i = 0; i < myInterests.length; i++) {
        console.log(`My interests: ${myInterests[i]}`)
    }
}
console.log("My Previous Experience")




let displayPosition=(comp: string, job: string, desc: string) =>{
    console.log(`* ${job} at ${comp} - ${desc}`);
}
displayPosition("Fleming Construction", "Administrative Assistant", "filing, data entry and invoicing");
displayPosition("Leukemia & Lymphoma Society", "Campaign Specialist", "marketing, fundraising, event planning");
displayPosition("Leukemia & Lymphoma Society", "Operations Administrator", "invoicing, daily deposits,office admin and campaign assistance");

{
    console.log("My Skills:")
}
var x = new Boolean(true);


function displaySkill(skill:string, x:Boolean) {
    if (x) {
        console.log(
            `*BAM: ${skill}`);

    }else{
        console.log (`*${skill}`);
    }
}


displaySkill("Guitar", x)
displaySkill ("html & css", x)
displaySkill ("javascript", x)
displaySkill ("graphic design", x)


