// switch case yapıları
/*
switch : koşulu başlatır
case   : koşulları belirtir.casein içerisinde kosul sonucu kontrol edilir.
break  : koşul kontrolunu sonlandırır.
default : koşul olumsuzlukları sonucu 
*/

// ÖNEMLİ :  switch yapılarında bir değer depolanır ve gelen cevaba göre işlem yapılır. if - else if yapısında ise true false değerlerine göre işlem yapılır


var metin = ""
console.log(metin.length)

switch(metin.length) { // 6 (metin uzunluğu)
    case 1 :
        document.write("metin 1 karakter");
    break;
    case 2:
        console.log("metin karakter sayisi 2");
    break;
    case 3:
        console.log("metin karakter sayisi 3");
    break;
    case 6 : 
        console.log("metin 6 karakter");
    break;
    default:
        console.log("hata")
};

var işlem = "özkan";
console.log(işlem + "işlem")

switch(işlem) { // 6 (metin uzunluğu)
    case "mehmet" :
        console.log("işlem sonucu 1");
    break;
    case "deniz":
        console.log("işlem sonucu 2");
    break;
    case "özkan":
        console.log("işlem sonucu  " + işlem);
    break;
    case "kemal": 
        console.log("işlem sonucu 4");
    break;
    default:
        console.log("hata")
}