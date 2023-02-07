const mongoose = require("mongoose");

const cocukSchema = new mongoose.Schema({
    isim: String,
    sehir: String,
    ilce: String,
    konum : String,
    aciklama: String,
    resim_link: String,

});

const CocukModel = mongoose.model('KayipCocuklar', cocukSchema);

module.exports = CocukModel;
