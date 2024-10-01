// KOŞULLU İFADELER
// if : eğer  - else if: değilse eğer - else : değilse.

// YAPISI
/*
if(koşul) {
} else if(kosul){
 } else {
  }
*/

let a1 = 5;
let a2 = 5;
if (5<10) {
    console.log("doğru") // 5 10dan kücük olduığu için burası calısırıldı.
} 

if (a1>a2) {
    console.log("doğru")
} else if(a1==a2){
    console.log("eşit") // a1 değeri 5 a2 değeri 5 iken ikiside eşit olduğu için bu kısım calısır
} else {
    console.log("yanlıs") // a1 5 a2 10 iken iki kosulda gecersiz olduiğu için bu kısım calısır.
}

let saat =2;
if(saat==0){
    console.log("saat 00.00")
} else if (saat >=1 && saat <=4) {
    console.log("su an saat gece" + " " + saat )
    
} else {
    console.log("iyi günler su an gündüz")
}


