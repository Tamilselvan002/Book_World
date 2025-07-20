const mysql = require("mysql");
const conn = mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});


exports.view=(req,res)=>{
    conn.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from users",(err,card)=>{
            if(!err){
                
                res.render("home",{card});
            }else{
                console.log("err in listing data" +err);
            }

        });
    })    
};


exports.show=(req, res)=>{
    conn.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from users",(err,don)=>{
            if(!err){
                
                res.render("books",{don});
            }else{
                console.log("err in listing data" +err);
            }

        });
    })    
};

exports.adduser=(req, res)=>{            
    res.render("adduser"); 
};

exports.save = (req, res) => {
  conn.getConnection((err, connection) => {
    if (err) throw err;
    const { title, author, price, image, summary } = req.body; // ✅ include summary
    connection.query(
      "INSERT INTO users (BNAME, BAUTHOR, PRICE, IMAGES, summary) VALUES (?, ?, ?, ?, ?)",
      [title, author, price, image, summary], // ✅ pass summary here
      (err, card) => {
        connection.release();
        if (!err) {
          res.render("adduser", { msg: "Book Added successfully" });
        } else {
          console.log("Insert Error:", err);
          res.render("adduser", { msg: "Error adding book" });
        }
      }
    );
  });
};



exports.edituser=(req, res)=>{
    conn.getConnection((err,connection)=>{
        if(err) throw err
        let id=req.params.id;
        connection.query("select * from users where id=?",[id],(err,card)=>{
            if(!err){
                
                res.render("edituser", {card});

            }else{
                console.log("err in listing data" +err);
            }

        });
    })    
};

exports.edit = (req, res) => {
  conn.getConnection((err, connection) => {
    if (err) throw err;
    const { title, author, price, image, summary } = req.body;
     let id=req.params.id;
    connection.query(
      "UPDATE users set BNAME=?, BAUTHOR=?, PRICE=?, IMAGES=?, summary=? where ID=?",
      [title, author, price, image, summary, id],
      (err, card) => {
        connection.release(); // ✅ release the connection
        if (!err) {
          res.render("edituser", { msg: "Book Updated successfully" });
        } else {
          console.log("Insert Error:", err);
          res.render("edituser", { msg: "Error Updating book" });
        }
      }
    );
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  conn.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("DELETE FROM users WHERE ID = ?", [id], (err) => {
      connection.release();
      if (!err) {
        res.redirect('/books');
      } else {
        console.log("Delete error:", err);
        res.status(500).send("Failed to delete");
      }
    });
  });
};

exports.register = (req,res)=>{
  res.render("register")
}

exports.reg = (req, res) => {
  conn.getConnection((err, connection) => {
    if (err) throw err;
    const { name,email,password } = req.body; // ✅ include summary
    connection.query(
      "INSERT INTO details (name, email, password) VALUES (?, ?, ?)",
      [name,email,password], // ✅ pass summary here
      (err, card) => {
        connection.release();
        if (!err) {
          res.render("register", { msg: "Registered Successfully" });
        } else {
          console.log("Insert Error:", err);
          res.render("register", { msg: "Wrong Details" });
        }
      }
    );
  });
};

exports.login = (req,res)=>{
  res.render("login")
}

exports.log = (req, res) => {
  const { email, password } = req.body;

  conn.query('SELECT * FROM details WHERE email = ?', [email], (err, result) => {
    if (err) throw err;

    if (result.length === 0) {
      return res.render('login', { msg: 'Invalid Email or Password' });
    }

    const user = result[0];

    // Plain text comparison
    if (user.password === password) {
      // Login success
      res.redirect('/dashboard');
    } else {
      // Password incorrect
      res.render('login', { msg: 'Invalid Email or Password' });
    }
  });
};
