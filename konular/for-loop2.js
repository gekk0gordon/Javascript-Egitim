/*
for(parametre1;parametre2;parametre3){
calısack kodlar}
1.parametre : döngü baslangıc değeri
2.parametre : koşul
3.parametre : iterasyon 
*/
// ÖRNEK FOR : 
// let i ;
// for(i = 0 ; i <= 50; i++ ){
//     console.log(i)
// }
// console i basıldı döngü calıstı i = 2 oldu console basıldı ve 50ye kadar devam edildi 

// FOR İN 
/*
for(1.parametre in diziveyaNesne){
}
1.parametre : dğeişken
2.parametre : dizi veua nesne
*/
// ÖRNEK FOR İN 
// let dizi = ["ozkan","deniz","burak","kemal"]
// console.log(dizi);
// let sonuc ;
// for(sonuc in dizi) {
//     console.log(dizi[sonuc]) /// döngü her döndüğünde dizi içindeki değerlerden birini alır ve döndürür.
// }

// kullanım amacı aranan değer yakalanıp onun üzerinde işlem yapılabilir.

// ÖRNEK FOR İN KULLANIMI :
// let dizi = ["ozkan","deniz","burak","kemal"];
// let sonuc;
// for(sonuc in dizi){
//     if(dizi[sonuc]== "ozkan"){
//         console.log("özkan test");   // döngü calıstı özkan değerini aldı ve consolea logu bastı
//     } else if(dizi[sonuc]=="deniz"){
//         console.log("deniz test") // döngü yeniden döndü k
//     } 

// }
// NOT :  döngü her döndüğünde gelen değeri kontrol eder gelen değere göre kosul calısır ve kosulun sonucunu işler.

// FOR İN NESNELERLE KULLANIMI
// let obje = {
//     isim : "özkan",
//     soyisim : "tekin",
//     yas : 34
// }
// let sonuc;
// for(sonuc in obje){
//     if(obje[sonuc] == "özkan"){
//         console.log("A kod bluğunu calıstır")
//     } else if(obje[sonuc] == "tekin"){
//         console.log("B kod bluğunu calıstır")

//     }
// }

// DÖNGÜLERDE BREAK 
// for(let i = 1;i <=50;i++){
//     console.log(i)
//     if(i==25){
//         break
//     }
// }
let nesne2 = {
    renk1:"siyah",
    renk2:"beyaz",
    renk3:"sarı",
    renk4:"kırmızı"
}   // nesne olusutuldu
let sonuc; // döndü her döndüğünde gelen değer bu değişken içine atandığı için değer girilmedi.
for(sonuc in nesne2){  
    console.log(nesne2[sonuc])  // nesne dizisi her döndüğünde gelen dğer sonuc değişkenine atandı
    if(sonuc == "renk3"){    // sonuc değişkeni renk3 itemine eşit olduğunda döngüden cıkıldı.
        break;
    }
}