var mongoose = require("mongoose");
var dbURI = "mongodb://mongo/mekanbul"; 
//var dbURI= 'mongodb+srv://useer:pass@mekanbul.a194ddm.mongodb.net/mekanbul?retryWrites=true&w=majority';
mongoose.connect(dbURI);
function kapat(msg, callback) {
  mongoose.connection.close(function () {
    console.log(msg);
    callback();
  });
}
process.on("SIGINT", function () {
  kapat("Uygulama kapatıldı!", function () {
    process.exit(0);
  });
});
mongoose.connection.on("connected", function () {
  console.log(dbURI + " adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("error", function () {
  console.log("Bağlantı hatası\n");
});
mongoose.connection.on("disconnected", function () {
  console.log("Bağlantı kesildi!\n");
});
require("./mekansema");
require("./kullanicilar");
