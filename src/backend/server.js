import express, { query } from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a connection to the MySQL server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mathan",
});

// Connect to the MySQL server
con.connect((err) => {
  if (err) throw err;
  console.log("connect to MYSQL");

  // create a new database
  con.query("CREATE DATABASE IF NOT EXISTS Buy_sell_shopee", (err, results) => {
    if (err) throw err;
    console.log("Database connected");
  });

  //create a new table
  con.query("USE Buy_sell_shopee");
  const createTableQuery =
    "CREATE TABLE IF NOT EXISTS customers (id int auto_increment PRIMARY KEY, firstname VARCHAR(30), lastname VARCHAR(30), email VARCHAR(30), password VARCHAR(30), mobile_number VARCHAR(12), address VARCHAR(255));";

  con.query(createTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Create table successfully");
  });
});

app.get("/", (req, res) => {
  res.send("Backend connection");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  con.query("USE Buy_sell_shopee");
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const mobile_number = req.body.number;
  const address = req.body.address;

  if (email && password) {
    console.log(firstname, lastname, email, password, mobile_number, address);

    const insertQuery = `INSERT INTO customers(firstname, lastname, email, password, mobile_number, address) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      firstname,
      lastname,
      email,
      password,
      mobile_number,
      address,
    ];

    con.query(insertQuery, values, (queryerror) => {
      if (queryerror) {
        console.log("Query error", queryerror);
        res.send("0");
      } else {
        res.send("1");
        console.log("Insert successfully");
      }
    });
  }
});

app.post("/login", (req, res) => {
  console.log("login");
  console.log(req.body);
  con.query("USE Buy_sell_shopee");
  // Capture the input fields
  const email = req.body.email;
  const password = req.body.password;
  // Ensure the input fields exists and are not empty
  if (email && password) {
    console.log("Checking username and password");
    // Execute SQL query that'll select the account from the database based on the specified username and password
    con.query(
      "SELECT * FROM customers WHERE email = ? AND password = ?",
      [email, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          console.log("Login success");
          res.send("1");
        } else {
          res.send("0");
          console.log("Incorrect username or password");
        }
        res.end();
      }
    );
  } else {
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${3001}`);
});
