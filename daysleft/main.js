// use constructor to create todays date
today = new Date();

// use constructor to create date to count up to (5=june since Jan=0 in array)
let endDay = new Date(today.getFullYear(), 05, 30);


if (today.getMonth() == 05 && today.getDate()>30) 
{
    endDay.setFullYear(endDay.getFullYear()+1); 
}
// 1000ms/minute/hour/day

let oneDay = 1000*60*60*24;

let oneWeek = (oneDay*7);

let oneMonth = ((oneDay*365)/12);

// round up, subtract today date number from end date number
let totalDays = ((Math.ceil((endDay.getTime()-today.getTime())/(oneDay)))*1);
let totalWorkDays = (((Math.ceil((endDay.getTime()-today.getTime())/(oneDay)/7*5))*1));
let totalWeeks = ((Math.ceil((endDay.getTime()-today.getTime())/(oneWeek))*1));
let totalMonths = ((Math.ceil((endDay.getTime()-today.getTime())/(oneMonth))*1));
let totalWorkHours = totalWorkDays*8;

// css class select and replace text with function output
document.querySelector([".monthsToProgram"]).textContent = totalMonths;
document.querySelector([".weeksToProgram"]).textContent = totalWeeks;
document.querySelector([".daysToProgram"]).textContent = totalDays;
document.querySelector([".workDaysToProgram"]).textContent = totalWorkDays;
document.querySelector([".workHours"]).textContent = totalWorkHours;


    