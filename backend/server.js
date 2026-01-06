const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

console.log("🔥 BACKEND SERVER.JS IS RUNNING 🔥");

// ================= DATABASE =================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant_db",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB CONNECTION ERROR:", err);
  } else {
    console.log("✅ DB CONNECTED");
  }
});

db.query("SELECT DATABASE() AS db", (err, result) => {
  if (!err) {
    console.log("🟢 BACKEND CONNECTED TO DB:", result[0].db);
  }
});

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.json("Restaurant backend running");
});

// ================= CATEGORIES (Food / Drinks) =================
// menu table columns used here:
// main_category | sub_category | name | description | price | image

app.get("/api/categories", (req, res) => {
  const sql = `
    SELECT DISTINCT main_category, sub_category
    FROM menu
  `;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json(err);

    const result = {};
    rows.forEach((row) => {
      if (!result[row.main_category]) {
        result[row.main_category] = [];
      }
      if (!result[row.main_category].includes(row.sub_category)) {
        result[row.main_category].push(row.sub_category);
      }
    });

    res.json(
      Object.keys(result).map((cat) => ({
        name: cat,
        subcategories: result[cat],
      }))
    );
  });
});

// ================= ITEMS BY CATEGORY =================
app.get("/api/menu/:main/:sub", (req, res) => {
  const { main, sub } = req.params;

  const sql = `
    SELECT id, name, description, price, image
    FROM menu
    WHERE main_category = ? AND sub_category = ?
  `;

  db.query(sql, [main, sub], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// ================= SINGLE ITEM =================
app.get("/api/item/:name", (req, res) => {
  const name = decodeURIComponent(req.params.name);

  const sql = `
    SELECT id, name, description, price, image
    FROM menu
    WHERE name = ?
    LIMIT 1
  `;

  db.query(sql, [name], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data[0]);
  });
});

// ================= SAVE ORDER =================
app.post("/api/orders", (req, res) => {
  console.log("🔥 /api/orders HIT");
  console.log("BODY:", req.body);

  const { items, total } = req.body;

  const sql = `
    INSERT INTO orders (items, total)
    VALUES (?, ?)
  `;

  db.query(sql, [JSON.stringify(items), total], (err, result) => {
    if (err) {
      console.log("❌ ORDER INSERT ERROR:", err);
      return res.status(500).json(err);
    }

    console.log("✅ ORDER INSERTED ID:", result.insertId);

    res.json({
      message: "Order saved successfully",
      orderId: result.insertId,
    });
  });
});

// ================= CONTACT FORM =================
app.post("/api/contact", (req, res) => {
  console.log("🔥 CONTACT ROUTE HIT", req.body);

  const { name, email, message } = req.body;

  const sql = `
    INSERT INTO contact_messages (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.log("❌ CONTACT ERROR:", err);
      return res.status(500).json({ message: "Error saving message" });
    }

    res.json({ message: "Message sent successfully ✅" });
  });
});

// ================= SERVER =================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
