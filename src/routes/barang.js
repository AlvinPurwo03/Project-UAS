const router = require('express').Router();
const { barang } = require('../controllers');

// mengeluarkan semua daftar Barang
router.get('/', barang.getDataBarang);

// show data berdasarkan parameter 'id'
router.get('/:id', barang.getDataBarangById);

// menambah data Barang
router.post('/add', barang.addDataBarang);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', barang.editDataBarang);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', barang.deleteDataBarang);

module.exports = router;