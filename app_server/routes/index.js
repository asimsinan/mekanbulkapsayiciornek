
var express=require('express');
var router=express.Router();

//mekanlar.js yolu
var ctrlMekanlar=require('../controllers/mekanlar');
//digerleri.js yolu
var ctrlDigerleri=require('../controllers/digerleri');

//Anasayfa rotası
router.get('/',ctrlMekanlar.anaSayfa);
//Mekan bilgisi rotası
router.get('/mekan/:mekanid', ctrlMekanlar.mekanBilgisi);
//Yeni yorum rotası
router.get('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumEkle);
//Yorumumu ekle tuşunun çağıracağı metodun rotası
router.post('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumumuEkle); 

//Admin Sayfası rotası
router.get('/admin', ctrlMekanlar.adminSayfa);
//Mekan ekleme sayfası rotası
router.get('/admin/mekan/yeni', ctrlMekanlar.mekanEkle);
//Mekanı ekle tuşunun çağıracağı metodun rotası
router.post('/admin/mekan/yeni', ctrlMekanlar.mekaniEkle);
//Mekan sil tuşunun çağıracağı metodun rotası
router.get('/admin/mekan/:mekanid/sil', ctrlMekanlar.mekanSil);
//Mekanı güncelleme sayfasının rotatı
router.get('/admin/mekan/:mekanid/guncelle', ctrlMekanlar.mekanGuncelle);
//Mekanı güncelle tuşunun çağıracağı metodun rotası
router.post('/admin/mekan/:mekanid/guncelle', ctrlMekanlar.mekaniGuncelle);

//Hakkında rotası
router.get('/hakkinda', ctrlDigerleri.hakkinda)
module.exports=router;

