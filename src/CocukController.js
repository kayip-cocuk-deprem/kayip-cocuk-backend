const CocukModel = require('./CocukModel');

exports.add = function(req, res) {
    const cocuk = new CocukModel({
        isim: req.body.isim,
        sehir: req.body.sehir,
        ilce: req.body.ilce,
        konum : req.body.konum,
        aciklama: req.body.aciklama,
        resim_link: req.body.resim_link,
    });
    cocuk.save()
        .then(
            () => res.send("success"), 
            (err) => res.send("error")
        );
}

exports.get = function(req, res) {
    console.log(req.params);
    CocukModel.findById(req.params.id, (err, found) => {
        if (!err) {
            res.send(found);
        }
    }).catch(err => console.log("Error occured, " + err));
}

exports.getAll = function(req, res) {
    CocukModel.find({
    }, (err, found) => {
        if (!err) {
            res.send(found);
        }
    }).catch(err => console.log("Error occured, " + err));
}