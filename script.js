
let skaiсius1;
let skaiсius2;
let rezultatas;
let veiksmas;

function calculate (a, b, c) {
  switch(parseInt(c)){
  case 0:
    console.log(`Nepasirinktas veiksmas `);
    document.getElementById(`rez`).innerHTML = `Nepasirinktas    veiksmas`;
    return;
  case 1:
    rezultatas = a - b;
    console.log(`Atimtis. Rezultatas: ` + rezultatas);
    document.getElementById(`rez`).innerHTML = `Atimtis. Rezultatas: ` + rezultatas;
    return;
  case 2:
    rezultatas = +a + +b;
    console.log(`Sudėtis. Rezultatas: ` + rezultatas);
    document.getElementById(`rez`).innerHTML = `Sudėtis. Rezultatas: ` + rezultatas;
    return;
  case 3:
    rezultatas = a * b;
    console.log(`Daugyba. Rezultatas: ` + rezultatas);
    document.getElementById(`rez`).innerHTML = `Daugyba. Rezultatas: ` + rezultatas;
    return;
  case 4:
    rezultatas = a / b;
    console.log(`Dalyba. Rezultatas: ` + rezultatas);
    document.getElementById(`rez`).innerHTML = `Dalyba. Rezultatas: ` + rezultatas;
    return;
  }
}

 function isEmpty(){
    skaicius1= document.getElementById(`num1`).value;
    skaicius2= document.getElementById(`num2`).value;
    veiksmas=document.getElementById(`sarasas`).value;
    
   if (skaicius1 !== "" && skaicius2 !== ""){
      calculate(skaicius1, skaicius2, veiksmas);
      document.getElementById(`rez`).style.color = "black";
      document.getElementById(`rez`).style.removeProperty("background-color");
   }
   else {
     console.log(`neįvestas skaičius`);
     document.getElementById(`rez`).innerHTML = `Neįvestas skaičius`;
     document.getElementById("rez").style.color = "#a30a17";
     document.getElementById("rez").style.backgroundColor = " #ed8077";
   }
 }







//function arSkaicius (pirmas, antras){
 //if (typeof(pirmas) == 'number' && typeof(antras) == 'number' ){
 // calculate(pirmas, antras);
 // }
// else {
//    console.log(`Blogai ivestas skaicius `);
 // console.log(typeof(pirmas));
 //  console.log(typeof(antras));
 // }
//}

//veiksmas = window.prompt(`Kokį veiksmą norite atlikti? Atimti: įveskite 0, sudėti: įveskite 1, dauginti: įveskite 2, dalinti: įveskite 3`);