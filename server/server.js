const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API route for receiving enrollment data
app.post("/api/enroll", (req, res) => {
  const data = req.body;

  console.log("📥 New Enrollment Received:");
  console.log(data);

  return res.json({
    ok: true,
    message: "Enrollment saved successfully!",
  });
});

// Run server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:5000`);
});
