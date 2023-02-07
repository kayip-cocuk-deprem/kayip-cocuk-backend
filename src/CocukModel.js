const cocuklar = require('../db').db().collection('cocuklar')

let CocukModel = function(data) {

    this.name = data.name;
    this.sehir = data.sehir;
    this.ilce = data.ilce;
    this.konum = data.konum;
    this.aciklama = data.aciklama;
    this.resim_link = data.resim_link;

}

CocukModel.prototype.validate = function() {

    return new Promise( async (resolve, reject) => {
        if (this.name == "") { this.errors.push("İsim alanı boş olamaz!") }
        if (this.sehir == "") { this.errors.push("Şehir alanı boş olamaz!") }
        if (this.ilce == "") { this.errors.push("İlçe alanı boş olamaz!") }
        if (this.konum == "") { this.errors.push("Konum alanı boş olamaz!") }
        if (this.aciklama == "") { this.errors.push("Açıklama alanı boş olamaz!") }
        if (this.resim_link == "") { this.errors.push("Resim alanı boş olamaz!") }

        resolve()
    }) 
}

CocukModel.prototype.save = function(){
    return new Promise(async (resolve, reject) => {

        await this.validate()
    
        if(!this.errors.length) {

            await cocuklar.insertOne({name: this.name, sehir: this.sehir, ilce: this.ilce, konum: this.konum, aciklama: this.aciklama, resim_link: this.resim_link})

            resolve()
        } else {
            reject(this.errors)
        }
    })
}


module.exports = CocukModel