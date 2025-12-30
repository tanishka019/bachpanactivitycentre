const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Database_19",
  database: "bachpan",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

app.post("/api/enroll", (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO enrollments
    (child_name, child_age, age_group, parent_name, phone, email, program, time_slot, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.childName,
    data.childAge,
    data.ageGroup,
    data.parentName,
    data.phone,
    data.email,
    data.program,
    data.timeSlot,
    data.notes,
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Enrollment successful" });
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
