// TRY CATCH HATA DENETİMİ 
/*
Hata denetimleri nasıl yapılır.hata olusabilecek kodlarda kullanılır.
try : hata olusturabilecek kodlar için kullanılır.
catch: hata olusursa calısacak kodlar için kullanılır.
finally: hata olussada olusmada calısacak olan kod için kullanılır.
throw: hata olusturabilecek kodlar için istisnai durumalrda kullanılır.TRY içinde kulanılır.

*/

// örnek 1 
 try {
     let a = "Volkan";  
     console.log(a, b )// a değişkeni tanımlandı fakat b değişkeni mevcut değil
 }
 catch(err) {
    console.log(err)  // b değişkeni mevcut olmadığı için hatayı yakaldı ve b değişkeni tanımsız hatasını consola gönderdi.
 }

// örnek 2 finally
 try {
     let a = "Volkan";  
     console.log(a, b )
 }
 catch(err) {
    console.log(err) 
    console.log("hata olustsu") 
}
finally{
    console.log("işlem tamamlandı")  // kodlarda hata olsada olmasa calısacak olan alan işlemin bitimini ifade etmek için kullanılır.
}

