//http modülünü çağırdık
const http = require("http");
const fs = require("fs");


// API gelen istekleri izler ve cevap gönderir

/* 
---createServer methoduna verdiğimiz dinleyici fonksiyon her api isteği alındığında tetiklenir.
Bu fonksiyon 2 parametre alır
*1) request > istek ile alakalı veriler
*2) response > gönderilecek cevap

* Bu fonksiyon içerisinde her gelen isteği dinleyip bir cevap göndericez
*Routing
*API'a gelen isteğin hangi endpoin (uç nokta)'e geldiğini tesğit edip ona göre cevap gönderme işlemine routing denir.
*Routing için client'ın hangi yola ve hangi http method ile istek attığını bilmemiz gerekiyor
*/


//ana sayfa için html dosyasu içeriğini oku
let tempOverview = fs.readFileSync("templates/overview.html", "utf-8");
let tempProduct = fs.readFileSync("templates/product.html", "utf-8");
//card htmlini oku
let tempCard = fs.readFileSync("templates/card.html", "utf8");


//ürün verilerini oku (json formatında alır)
let data = fs.readFileSync("dev-data/data.json", "utf-8");

//json formatındaki veriyi js formatına çevir
let dataObj = JSON.parse(data);




let server = http.createServer((req, res) => {
    // console.log("istek tespit edildi");
    // console.log("İstekk", req);
    // if(req.url === "/"){
    //   return  res.end("<h1>Şuan ana sayfadasınız</h1>");
    // }else if(req.url=="/detay") {
    //    return res.end("Şuan detay sayfadasınız")
    // }
    // res.end("sayfa bulunamadı");

    switch (req.url) {
        case "/overview":



            //ürünler dizisini dön dizideki eleman kadar kart oluştur
            let cards = dataObj.map((card) => tempCard);

            tempOverview = tempOverview.replace("{%PRODUCT_CARDS%}", cards);
            return res.end(tempOverview);



        case "/product":
            return res.end(tempProduct);
        default:
            return res.end("aranan sayfa bulunamadı");
    }
});

//Bir dinleyici oluşturup hangi adrese gelen istekleri dinleyeceğimizi söylemeliyiz

server.listen(4000, "127.0.0.1", () => {
    console.log("Server 4000 porta gelen istekleri dinlemeye başladı");
});