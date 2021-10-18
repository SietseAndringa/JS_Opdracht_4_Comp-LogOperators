/*
const age = 18;
const isFemale = true;
const driverStatus = "bob";
*/

const age = 19; 
const isFemale = false;
const driverStatus = "bert"; 
const firsName = "Sarah";
const totalAmount = 101;


if (age >= 18) {
  console.log("Je bent minimaal 18 jaar, dus mag je naar binnen!");
} else {
  console.log("Je bent nog geen 18 jaar. Je mag niet naar binnen!");
}

if (isFemale) {
  console.log("Je bent een vrouw. Gezellige avond!");
} else {
  console.log("Je bent een man. Helaas mag je dan niet naar binnen!");
}

if (driverStatus == "bob") {
  console.log("Je bent de bob. Rij voorzichtig!");
} else {
  console.log("Je bent geen bob. Laat iemand anders rijden!");
}

if (age >= 18 && age<= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas! Je krijgt geen korting");
}

if (firsName === "Sarah" || firsName === "Bram"){
    console.log("Gefeliciteerd! Je krijgt een gratis biertje, omdat je Sarah of Bram heet");
} else {
    console.log("Helaas! Je krijgt geen gratis biertje. Je hebt niet de juiste naam...");
}

if (totalAmount >25 && totalAmount <=50){
    console.log("Gefeliciteerd! Je krijgt een gratis portie (vega)bitterballen!");
}

if (totalAmount >50 && totalAmount <=100){
    console.log("Gefeliciteerd! Je krijgt een gratis portie nachos!");
}

if (totalAmount >=100){
    console.log("Gefeliciteerd! Je krijgt een gratis flesje champagne!");
}