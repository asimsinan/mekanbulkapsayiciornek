const axios = require("axios");
const apiSecenekleri = {
  sunucu:"http://mekanbulapi:9000",
  apiYolu: "/api",
  mekanYolu: "/mekanlar/",
  girisYolu: "/girisyap",
  kayitYolu: "/kayitol",
  adminYolu: "/admin",
  profilYolu: "/profil",
  profilGuncelleYolu: "/profilguncelle",
  sifreYenilemeYolu: "/sifreyenile",
};
function sessionKontrol(req) {
  if (req.session.kullanici) return req.session.kullanici;
  else return false;
}

function setToken(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
hataGoster = function (req, res, hata) {
  let mesaj;
  let kullanici = sessionKontrol(req);
  let cevap = JSON.parse(JSON.stringify(hata));
  if (cevap.status == 404) {
    mesaj = "Sayfa bulunamadı!";
  } else if (cevap.status == 401) {
    mesaj = "Bu sayfaya erişmek için yetkiniz yok!";
  }else if (cevap.status == 402) {
    mesaj = "Bu kullanıcı mevcut!";
  } 
  else if (cevap.status == 400) {
    mesaj = "Girilmesi gereken alanlardan birini boş geçtiniz!";
  }
  else
  mesaj = "İşlem başarısız!";
  res.render("error", {
    mesaj: mesaj,
    kullanici: kullanici,
  });
};

mekanBilgisiGetir = function (req, res, callback) {
  axios
    .get(
      apiSecenekleri.sunucu +
        apiSecenekleri.apiYolu +
        apiSecenekleri.mekanYolu +
        req.params.mekanid
    )
    .then(function (response) {
      let gelenMekan = response.data;
      gelenMekan.koordinat = {
        enlem: gelenMekan.koordinat[0],
        boylam: gelenMekan.koordinat[1],
      };
      callback(req, res, gelenMekan);
    });
};
module.exports = {
  apiSecenekleri,
  sessionKontrol,
  hataGoster,
  mekanBilgisiGetir,
  setToken
};
