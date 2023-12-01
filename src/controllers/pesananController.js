const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataPesanan = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM pesanan", function (error, rows) {
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
const getDataPesananById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM pesanan WHERE id = ?";
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
const addDataPesanan = async (req, res) => {
    let data = {
        id_pembeli: req.body.id_pembeli,
        id: req.body.id,
        id_barang: req.body.id_barang,
        qty: req.body.qty,
        tanggal_pesanan: req.body.tanggal_pesanan
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO pesanan SET ?';
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

// mengedit data Pesanan
const editDataPesanan = async (req, res) => {
    let id = req.params.id;
    let data = {
        id_pembeli: req.body.id_pembeli,
        id: req.body.id,
        id_barang: req.body.id_barang,
        qty: req.body.qty,
        tanggal_pesanan: req.body.tanggal_pesanan
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE pesanan SET ? where id = ?';
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

// menghapus data Pesanan
const deleteDataPesanan = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM pesanan where id = ?';
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
    getDataPesanan,
    getDataPesananById,
    addDataPesanan,
    editDataPesanan,
    deleteDataPesanan
}