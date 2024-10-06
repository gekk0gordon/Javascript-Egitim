// DEĞİŞKENLER
// let : local olarak calısavbilen sonradan değeri değiştirilebilen değişkenlerdir
let a = 12
 a = 15
console.log(a)
// const : global olarak tanımlanabilen ve değeri sonradan değiştirlemeyen sabit değişkenlerdir.
const b = 12
//b = 15 ;
console.log(b)  //  Assignment to constant variable. şeklinde hata döner.

// birden falza değişkenin birbirine atanması
let a1 = 12
let b2= 15
let sonuc = a1 + b2
console.log(sonuc) 

// tanımsız değişken olusturma
let a2 ; // noktalı virgül kullanıldığında değişken sonradan tanımlanmak üzere bos gönderilebilr.
a2 = "ozkan"


// DEĞİŞKEN METODLARI
// length : değişkenin içeriğini sayar ver karakter adedini verir.
let a3 = "ozkan";
console.log(a3.length) // sonuc 5 olarak döner ozkan kelimesi 5 karakterdir.

// trim : değişkenin başındaki ve sonundaki boslukları temizler
let a4 = "     ozkan    "
console.log(a4)
let trimmetod = a4.trim()
console.log(trimmetod)  // baştaki ve sondaki bosluk ifadeleri temizlendi.

// toString() : değişken içeriğini stringe dönüştürür.
let a5 = 8
console.log(typeof a5)
console.log(typeof a5.toString()) // number değer string değere dönüştürüldü.

// Number() : değişken içeriğini mutlak olarak sayısal veri türüne dönüştürür.
let a6 = "8"
console.log(typeof a6);
console.log(typeof Number(a6) + a6) // 8 değeri string iken number veri tipine dönüştürüldü.

// indexOf() : aldığı parametrenin değişken içerisindeki index değerini döndürür.
let a7 ="ozkan hamurtekin"
console.log(a7.indexOf("h")) ;// index 0 dan başladığı için h. nin index değeri olan 6 yı geriye döndürdü.

// search() : parametre olarak verilen değeri değişken içerisinde arayarak ilk eşleymeyi sağyalan içeriğin index değerini verir.
let a8 = "ozkan hamurtekin"
console.log(a8.search("e")) // e nin index değeri olan 12yi buldu ve geriye döndürdü.

// includes() : metodu parametre olarak verilen değerin değişken içinde olup olmadığını boolean olarak geriye döndürür.
let a9 = "ozkan tekin"
console.log(a9.includes("tekin")) // tekin string değeri veri içinde mevcut olduğundan sonuc TRUE olarak döndürükdü..

// replace() : parametre olarak verilen değerin değişkenin içinde değişmesini sağlayarak geriye kalanı kopyalar
let a10 = "hamurtekin ozkan irem"
console.log(a10.replace("irem","orhan")) // irem değeri orhan ile değişti

// split() : değişkenin içeriğindeki tüm elemanları bir dizi şeklinde geir döndürür.
let a11 = "ozkan irem hamur tekin"
console.log(a11.split(""))  // diziye döndürdü ve her harf bir dizi elemanı oldu.
console.log(a11.split(" ")) // boşluklardan ayırdı ve her kelime bir dizi elemanı oldu

// charAt() : kendisine parametre olarak verilen değeri değişken içinden bularak geriye döndürür.
let a12 = " volkan alakent javascript";
let sonuc1 = a12.charAt(14)
console.log(sonuc1)   // 14.ü index değerine sahip olan t harfi geriye döndürüldü.

// encodeURI , decodeURI  : değeri utf-8 formatına dönüştürür. türkce karakterleri temizler

// toUpperCase : değişken içindeki metnin tamamını büyük harf yapar.
let metin = "özkan hamurtekin İrem";
console.log(metin.toUpperCase())

// toLowerCase : değişken içindeki metnin tamamını kücük harf yapar.
let metin2 = "ÖZKAN HAMURTEKİN"
console.log(metin2.toLowerCase())