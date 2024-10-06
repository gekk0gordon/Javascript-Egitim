// FONKSİYONLAR
/*
function fonksiyonIsım() {
calısacak kodlar
}


*/

// function deneme() {   // fonksiyon olusutuldu.
//     console.log("ilk fonksiyon") // burda herhangi bir cıktı dönmez cağırıldığınd acalısıtırç
// }


// function deneme2() {
//     console.log("ikkinci fonlsiyon")
// }
// deneme()
// deneme2()

// değişken içinde fonksiyon olusturla

// let ornekFonksiyon = function(){  // bu fonkisyon bir değişkene atandı ve değişken cağırıldığında fonkisyon calısır.
//  console.log("değişken içinde fonksiyon")
// }
// ornekFonksiyon()

// NOT : fonksiyon dısında tanımlanan değişkenlere fonksiyon içinden erişilebilr ama fonksiyon içinde tanımlanan dğeişkene dısarıdan erişlemez.


// FONKSİYONLADA RETURN İFADESİ !!!!!

// function demo() {
//     let isim = "Ozkan" // fınkisyon içine herhangi bir loglam işlemi yapılmadıysa fonksiyon cağırılsada atanacak bir değer yok.
//     let soyIsım = "tekin";
//     return isim;
// }
// var sonuc = demo();
// console.log(sonuc)


// RETURN İLE BRDEN FAZLA SONUC DÖNDÜRME
// function demo2() {
//     let isim = "Ozkan" // fınkisyon içine herhangi bir loglam işlemi yapılmadıysa fonksiyon cağırılsada atanacak bir değer yok.
//     let soyIsım = "tekin";
//     let adSoyad = [isim,soyIsım]
//     return adSoyad ;
// }
// var sonuc2 = demo2();  
// console.log(sonuc2)

// RETURN KULLANIMI  2: fonksiyondan cıkarmak için kullanımı
function demo3() {
    console.log("özkan")
    console.log("hakan")
    return;  // fonksiyon sonlandı ve diğer işlemleri yapmadı
    console.log("deniz")
    console.log("mehmet")
    console.log("kemal")
}
demo3()

// DERS 135 => koşula bağlı fonksiyonlar

let deger = "Renk";
if(deger=="Renk") {
    function text(){
        console.log("mavi","kırmızı")
    }
} else if(deger=="Meyve")
    {function text(){
    console.log("elma","muz")
}} else {
    function text() {
        console.log("bos")
    }
}
text()
// not : if blogun içinde bir fonkisyon adını birden fazla kez kullanabilir.

// FONKSİYONLARDA PARAMETRE İŞLEMLERİ
/*
function isim(parametre1 , parametre2) {
calısacak kod bloğı}
isim("parametre1" , "parametre2")

*/
// function param1(a){   
// console.log("merhaba" +" " + a) 
// };

// param1("ozkan");

// function param2(sayi1, sayi2 , sayi3){
//     let sonuc = (sayi1+sayi2)-sayi3;
//     console.log(sonuc)
// }
// param2(10,1,5) // 10 ilk parametreye atandı , 12.parametreye atandı, 5 ücüncü parametreye atandı.

// let param = param2(5,2,3)
// console.log(param)

// FONKSYINA ATANAN PARAMETREYE VARSAYILAN DEGER TANIMLAMASI

// function param3(tutar,kdv=18){  // sabit olarak varsayılan tutar parametreye fonksiyon içinde atanır.
//     let kdvTutari = (tutar/100)*kdv
//     let nettutar = kdvTutari + tutar
//     console.log(nettutar)
// }
// param3(1000);// istenirse değer burada yeniden atanabilir ilk tanımlamnada yazılmıs olsada. 

// DERS 139 - otomatik calsan fonksiyona parametre tanımlama

// (function test(){
//     console.log("ders 139")
// })();

// let deger1 = "ozkan"
// let deger2 = "tekin"
// function test3(parametre1,parametre2){
//     console.log(parametre1,parametre2)
// }

// DERS 141 - FONKSİYONDAN DİĞER FONKSİYONA DEĞER DÖNDÜRME

// örnek para birimi tutar hesaplama
// parametre bir para birimi
// parametre iki tutar 

function parabirimi(birim,tutar){
    let kur ;
    if(birim=="TL"){
         kur =1
    } else if(birim=="USD"){
         kur = 3
    } else if(birim=="EURO"){
        kur = 4
    } 
    return tutarHesapla(kur,tutar);

} 
function tutarHesapla(gelenkur,gelentutar){
    let hesapYap = gelenkur * gelentutar;
    console.log(hesapYap)
}
parabirimi("USD",100)

// DERS 142 -- İÇ İÇE COK BOYUTLU FONKSİYONLAR
// ÖRNEK 1
function icice1(par1,par2){
    function test(par3,par4){ // 1 ve 2 değeri icice1 fonksiyonuna atandı ve return içinde verilen parametreler test fonkisyonuna atandı
        console.log(par3,par4)

    }
   return test(par1,par2)  // icice fonksiyonun paramerreleri test fonksiyonun aktarıldı. 1 ve 2
}
icice1(1,2) // icice fonkisyonuna par1 yerine 1 par2 yerine 2 

// ÖRNEK 2
function bir(aa){  // burdaki değerine 5 tanımlandı
    function iki(bb){
        function uc(cc){
        return aa + bb + cc;
        
        }
        return uc;
    } 
    return iki;
}
var sonuc5 = bir(5)(10)(8);
console.log(sonuc5)

// ÖRNEK 3;
function deneme3(){
    deger = "örnek"   // undefined 
    function deneme4(deger){
        console.log(deger)
    } return deneme4;
}
deneme3()("özkan") // deneme4 fonksiyonundak parametreye özkan değeri atandı diğer değer değişkeni dikkat alınmadı

// ÖRNEK - 