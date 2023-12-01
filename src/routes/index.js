const router = require('express').Router();
//another route below this line
const pembeliRoute = require('./pembeli');
const suplierRoute = require('./suplier');
const barangRoute = require('./barang');
const pesananRoute = require('./pesanan');
const pembelianRoute = require('./pembelian');


router.use('/pembeli', pembeliRoute);
router.use('/suplier', suplierRoute);
router.use('/barang', barangRoute);
router.use('/pesanan', pesananRoute);
router.use('/pembelian', pembelianRoute);

// other route
module.exports = router;