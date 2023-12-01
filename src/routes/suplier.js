const router = require('express').Router();
const { suplier } = require('../controllers');

// mengeluarkan semua daftar suplier
router.get('/', suplier.getDataSuplier);

// show data berdasarkan parameter 'id'
router.get('/:id', suplier.getDataSuplierById);

// menambah data suplier
router.post('/add', suplier.addDataSuplier);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', suplier.editDataSuplier);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', suplier.deleteDataSuplier);

module.exports = router;