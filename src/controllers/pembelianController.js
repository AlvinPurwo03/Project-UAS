const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataPembelian = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM pembelian", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

// menampilkan data by id
const getDataPembelianById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM pembelian WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}

// menambahkan data
const addDataPembelian = async (req, res) => {
    let data = {
        id: req.body.id,
        id_barang: req.body.id_barang,
        id_suplier: req.body.id_suplier,
        qty: req.body.qty,
        tanggal_beli: req.body.tanggal_beli
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO pembelian SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

// mengedit data Pembelian
const editDataPembelian = async (req, res) => {
    let id = req.params.id;
    let data = {
        id: req.body.id,
        id_barang: req.body.id_barang,
        id_suplier: req.body.id_suplier,
        qty: req.body.qty,
        tanggal_beli: req.body.tanggal_beli
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE pembelian SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

// menghapus data Pembelian
const deleteDataPembelian = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM pembelian where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}

module.exports = {
    getDataPembelian,
    getDataPembelianById,
    addDataPembelian,
    editDataPembelian,
    deleteDataPembelian,
}