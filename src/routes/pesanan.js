const router = require('express').Router();
const { pesanan } = require('../controllers');

// mengeluarkan semua daftar pesanan
router.get('/', pesanan.getDataPesanan);

// show data berdasarkan parameter 'id'
router.get('/:id', pesanan.getDataPesananById);

// menambah data pesanan
router.post('/add', pesanan.addDataPesanan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pesanan.editDataPesanan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pesanan.deleteDataPesanan);

module.exports = router;