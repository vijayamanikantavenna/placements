const d=new Date();
console.log(d);

const date= new Date(24 * 60 * 60 * 1000);
console.log(date);
//tostring method in dates
console.log(d.toString());
//todatestring method
console.log(d.toDateString());
//toutcstring method
console.log(d.toUTCString());
//toisostring
console.log(d.toISOString());
//date input parsing date
let dates=Date.parse("March,25,2003");
console.log(dates);
const de = new Date("2021-03-25");
console.log(de.getDate());   
//getHours() method
console.log(d.getHours());
//getminuute() method
console.log(d.getMinutes());
//getseconds method
console.log(d.getSeconds());
//getmilliseconds() method
console.log(d.getMilliseconds());
//getday() method 
console.log(d.getDay());
//gettime() method
console.log(d.getTime());
//getnow() method
console.log(Date.now)
//setfullyear method
const dat=new Date();
dat.setFullYear(2023);
console.log(dat)
