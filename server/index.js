const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config();
const multer = require('multer')
const app = express()
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');



const db = mysql.createPool({
    host: "sql925.main-hosting.eu",
    user: "u951730070_root",
    password: "Password1",
    database: "u951730070_eden",
    
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./images"))
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
    });

    next();
});
app.use(express.static(
    path.join(__dirname, "../client/build", 'index.html')));


app.get("/api/login", (req, res) => {
    const sql = "select * FROM users";
    const password = req.query.pass;
    db.query(sql, (err, response) => {
        console.log(response[0].password);
        bcrypt.compare(password, response[0].password).then(function (result) {
            res.send(result);
        });

    })
})

app.get('/api/get_cus', (req, res) => {
    db.query("SELECT * FROM customer_messages ORDER BY id DESC", (err, response) => {
        if (err) {
            console.log(err);
        }
        res.send(response);
    })
});
app.get('/api/get_bus', (req, res) => {
    db.query("SELECT * FROM business_messages", (err, response) => {
        if (err) {
            console.log(err);
        }
        res.send(response);
    })
})

app.get('/api/getbusfields', (req, res) => {
    db.query("SHOW columns FROM business_messages", (err, response) => {
        if (err) {
            console.log(err)
        }
        res.send(response);
    })
})
app.get('/api/getcusfields', (req, res) => {
    db.query('SHOW columns FROM customer_messages', (err, response) => {
        if (err) {
            console.log(err)
        }
        res.send(response);
    })
})

app.post("/api/insert_customer", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const lodgingType = req.body.lodgingType;
    const nb_stars = req.body.nb_stars;
    const resort = req.body.resort;
    const nb_rooms = req.body.nb_rooms;
    const nb_persons = req.body.nb_persons;
    const sqlInsert = "INSERT INTO customer_messages (name,email,phone,type_lodging, nb_stars, resort, nb_rooms, nb_persons, message) VALUES (?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [name, email, phone, lodgingType, nb_stars, resort, nb_rooms, nb_persons, message], (err, result) => {
        console.log(result);
    })
})

app.post("/api/insert_business", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const bname = req.body.bname;
    const bemail = req.body.bemail;
    const bphone = req.body.bphone;
    const work = req.body.work;
    const message = req.body.message;
    const sqlInsert = "INSERT INTO business_messages (personal_name, personal_email, personal_phone, business_name, business_email, business_phone, business_desc, message) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [name, email, phone, bname, bemail, bphone, work, message], (err, response) => {
        console.log(response);
    })

})

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../client/src/assets/uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        
    }
})
 
const upload = multer({
    storage: storage
});
 
 
//@type   POST
//route for post data
app.post("/api/upload", upload.single('file'), (req, res) => {
    const file = req.file;
    res.send(file.filename);
});
app.post("/api/post",(req,res)=> {
    const title=req.body.title;
    const paragraph=req.body.paragraph;
    const image=req.body.image;
    const video=req.body.video;
    const q= "INSERT INTO blogs (title,paragraph,image,video,date) VALUES (?,?,?,?,now())";
    db.query(q,[title,paragraph,image,video],(err,response)=> {
        console.log(response);
    })
})
app.get("/api/getposts",(req,res)=> {
    const q= "SELECT * from blogs ORDER BY id DESC";
    db.query(q,(err,result)=> {
        res.send(result);
    })
})
app.get("/api/getPost/:id",(req,res) => {
    let id =req.params.id;
    db.query("SELECT * FROM blogs WHERE id=?",id,(err,result)=> {
        if(err) {
            console.log(err)
        }
        res.send(result);
    })
})



app.listen(process.env.PORT ||3001, () => {
    console.log("Running on server!");
});
