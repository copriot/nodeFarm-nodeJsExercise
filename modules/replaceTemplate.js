//Card htmlini alıcak ve ürün bilgilerini alıp card htmlinde değişken olarak tanımlanan bütün değerlerin yerine ürün bilgilerini aktaran fonksiyon

const replaceTemplate = (cardHTML, data) => {
    let output = cardHTML.replace(/{%PRODUCTNAME%}/g, data.productName);
    output = output.replace(/{%QUANTITY%}/g, data.quantity);
    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/{%ID%}/g, data.id);
    //regex kullan / /g birden fazla aynı değerin yerini değiştirmek için
    output = output.replace(/{%IMAGE%}/g, data.image);
    output = output.replace(/{%FROM%}/g, data.from);
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);


    //eğer ürün organic değilse not-organic ifadesi ekle

    if (!data.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    }

    return output;
};

//replaceTemplate isimli ffonksiyonu projedeki diğer dosyaların erişilebilir hale getirmek için export ediyoruz
module.exports = replaceTemplate;