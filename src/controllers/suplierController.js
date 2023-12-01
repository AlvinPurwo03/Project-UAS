const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataSuplier = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM suplier", function (error, rows) {
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
const getDataSuplierById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM suplier WHERE id = ?";
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
const addDataSuplier = async (req, res) => {
    let data = {
        id: req.body.id,
        nama: req.body.nama,
        alamat: req.body.alamat,
        kode_pos: req.body.kode_pos,
        kota: req.body.kota
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO suplier SET ?';
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

// mengedit data Suplier
const editDataSuplier = async (req, res) => {
    let id = req.params.id;
    let data = {
        id: req.body.id,
        nama: req.body.nama,
        alamat: req.body.alamat,
        kode_pos: req.body.kode_pos,
        kota: req.body.kota
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE suplier SET ? where id = ?';
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

// menghapus data Suplier
const deleteDataSuplier = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM suplier where id = ?';
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
    getDataSuplier,
    getDataSuplierById,
    addDataSuplier,
    editDataSuplier,
    deleteDataSuplier
}