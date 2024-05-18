let input=document.querySelector("input");
input.max=new Date().toISOString().split("T")[0];
let btn=document.querySelector("button")
let res=document.querySelector("#result")
btn.addEventListener("click",calculateAge);

function calculateAge() {
    
let bd=new Date(input.value)
// console.log(bd);
let bday=bd.getDate();
let bmon=bd.getMonth()+1;
let byear=bd.getFullYear();


// console.log(bday);
// console.log(bmon);
// console.log(byear);

let pd=new Date();
// console.log(pd);
let pday=pd.getDate();
let pmon=pd.getMonth()+1;
let pyear=pd.getFullYear();
// console.log("present day");

// console.log(pday);
// console.log(pmon);
// console.log(pyear);

let years;
let months;
let days;

years=pyear-byear;

if(pmon>=bmon){
    months=pmon-bmon;
}
else{
    years--;
    months=12+pmon-bmon;
}
if(pday>=bday){
    days=pday-bday;
}else{
    months--;
    days=getdaysInMonth(byear,bmon)+pday-bday;
}
if(months<0){
    months=11;
    years--;
}
res.innerHTML=`You are ${years} years ,${months} months and ${days} days old`

}
function getdaysInMonth(year,month) {
    return new Date(year,month,0).getDate();
}
// function calculateAge() {
//     let today=new Date();
//     let birthday=new Date(input.value);

//     const birthDetetails={
//         date:birthday.getDate(),
//         month:birthday.getMonth()+1,
//         year:birthday.getFullYear()
//     }
//     const todayDetails={
//         date:today.getDate(),
//         month:today.getMonth()+1,
//         year:today.getFullYear()
//     }
//     if(isFutureDate(birthDetetails,todayDetails)){
//         alert("Not born yet...");
//         res.innerHTML=" - , - , - ";
//         return;
//     }
//     const {years,months,days}=calculate(birthDetetails,todayDetails)
// }
// function isFutureDate(birthDetetails,todayDetails) {
//     return (

//         birthDetetails.year > todayDetails.year ||
//         birthDetetails.year === todayDetails.year && birthDetetails.month > todayDetails.month ||
//         birthDetetails.month === todayDetails.month && birthDetetails.date >todayDetails.date
//     )
// }
// function calculate(bd,td) {
//     let years=td.year-bd.year;
//     let months,days;

//     if(td.month<bd.month){
         
//     }
// }


