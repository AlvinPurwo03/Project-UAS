const pembeli = require('./pembeliController')
const suplier = require('./suplierController')
const barang = require('./barangController')
const pesanan = require('./pesananController')
const pembelian = require('./pembelianController')
const nama_data = require('./')
// other controller

module.exports = {
    pembeli,
    suplier,
    barang,
    pesanan,
    pembelian
}