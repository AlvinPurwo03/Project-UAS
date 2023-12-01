const router = require('express').Router();
const { pembelian } = require('../controllers');

// mengeluarkan semua daftar pembelian
router.get('/', pembelian.getDataPembelian);

// show data berdasarkan parameter 'id'
router.get('/:id', pembelian.getDataPembelianById);

// menambah data pembelian
router.post('/add', pembelian.addDataPembelian);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pembelian.editDataPembelian);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pembelian.deleteDataPembelian);

module.exports = router;