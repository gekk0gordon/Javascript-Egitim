// FOR DÖNGÜSÜ
/*
for(1.parametre ; 2.paramtere;3.parametre) {

calısacak kodlar
}

1.parametre : döngünün başkangıc değeri
2.parametre : koşul
3.parametre : iterasyon arttırma yada azaltma

*/

// for(let i=1 ;i<=50;i++){
//     console.log(i)
// }

// i 1 olarak tanımlandı ve inin değeri kontrol edildi kosula bakıldı ve i bir arttırıldı.
// döndü her döndüğünde süslü parantez içindeki kod bloğu calıstırıldı.
// yukarıdaki döngü 1 kere döndü ve ekrana i nin değerini yazdı tekrar döndü ve inin değeri 2 oldu yine ekrana yazıldı.

// FOR IN döngüsü
// nesne ve dizilerde kuıllanılır.
/*
for(1.parametre in 2.parametre){
calıstırılacak kodlar
}
1.parametre : değişken adı
2.parametre : dizi veya değişken adı
*/
// örnek 1 DİZİLERDE KULLANIM
// try {
//   let dizi = ["özkan", "kemal", "deniz", "mehmet"];
//   let sonuc;
//   console.log(dizi);
//   for (sonuc in dizi) {
//      console.log(sonuc , dizi[sonuc])
//     if (dizi[sonuc] == "kemal") {
//       console.log("kemal başkan");
//     } else if (dizi[sonuc] == "özkan") {
//       console.log("ozkan tekin");
//     } else if (dizi[sonuc] == "deniz") {
//       console.log("Deniz aslan");
//     } else if (dizi[sonuc] == "mehmet") {
//       console.log("mehmet akkoc");
//     }
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("test");
// }

// ÖRNEK 2 NESNELERDE KULLANIM
let ornek = {
    isim : "ozkan",
    soyisim:"tekin",
    yas : 34
}
let sonuc;
console.log(ornek)
let i = 1;
for(sonuc in ornek){
  console.log(sonuc, "sonuc")
    if(ornek[sonuc] == "ozkan"){ // sonuc değişkenine 1.index değeri olan isimi attı ve kontrol etti ifade true döndüğü için konsola logu bastı
        console.log("ozkan", "" + sonuc +" " + i)
    } else if(ornek[sonuc]=="tekin"){
        console.log("soyisim" + " " + i)
    } else if(ornek[sonuc] == 34){
        console.log(sonuc + "34" + " " + i)
    }
    i++;
}

// DÖNGÜLERDE BREAK İFADESİ
for(i=1;i<=50;i++){
    console.log(i)
    if(i==22){ 
        break; // i'yi 22 ye eşit olana kdar arttırdı ve 22 olduğudna break ifadesi ile döndüden cıktı.
    }
}

let ornek2 = ["özkan", "kemal", "deniz", "mehmet"];
let sonuc2;
for(sonuc2 in ornek2) {
    console.log(ornek2[sonuc2])
    if(sonuc2==1){ // ÖNEMLİ : değer yerine index değeri verildiğinde o index değerine kadar döner
        break;
    }
}


// DÖNGÜLERDE CONTİNUE İFADESİ
// döngünün o anki işlemini sonlandırır başa döner ve kaldığı yerdne devam eder.
for(i=1;i<=10;i++){
    if(i==8){
        continue;
    }
    console.log(i) // contineu da console atarken koşulun dısına atılır.
    // burada i=8 olduğunda işlem atlandı ve döndü kaldığı 9dan devam etti
}