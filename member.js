// routes/member.js
const express = require("express");
const router = express.Router();
const pool = require("../db");//db.js

// READ - ดึงผู้ใช้ทั้งหมด
router.get("/", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM member");
      res.json(rows);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  });

  // insert - method post
router.post("/", async (req, res) => {

  const { name, email } = req.body;

    try {
        const [result] = await pool.query(
          "INSERT INTO member (name, email) VALUES (?, ?)",  [name, email]
        );
        res
          .status(201)
          .json({id: result.insertId});
      } catch (err) {
        res.status(500).json({error: err.message});
      }
  });

module.exports = router;
