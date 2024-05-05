const express = require('express'); 
 const  mysql = require('mysql')
 const cors = require('cors')
  
const app = express(); 
app.use(cors())
app.use(express.json());
app.get('/',(re,res)=>{
    return res.json("From Backend: Express is up");
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "autohub"
})
app.get('/admin', (req, res)=>{
    let email = req.query.email ?? '';
    let password = req.query.password ?? '';
    const sql = 'SELECT * FROM userreg WHERE email = ? and password = ? ';
    connection.query(sql,[email,password], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/users', (req, res)=>{
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})


// app.get('/users',(req,res)=>{
//     const sql = "SELECT * FROM userreg WHERE email = ? AND password = ?";
//    const values = [
//     req.body.email,
//     req.body.password
//    ]
   
//    db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if(err) return res.json("Login failed......");
//     if(data.length > 0) {
//         return res.json("Login successfully")
//     } else {
//     return res.json("no record");}

//    })
   
   
    // db.query(sql,(err,data)=>{
    //     if(err) return res.json(err);
    //     return res.json(data);
    // })
// })

app.post('/usereg',(req,res)=> {
    const sql='INSERT INTO userreg VALUES (?)';
    const values = [
        req.body.id,
        req.body.name,
        req.body.address,
        req.body.mobile,
        req.body.email,
        req.body.password
       
    ]
    db.query(sql,[values],(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
        // if(err) throw err;
        // res.send(JSON.stringify({"status": 200, "error": null,"response": results}));
    });
   
   
   
   
    // createConnection.query(sql, [data],(err, data) => {
        

    // });
});


// app.post("/login", (req,res)=>{

// const data ={
// }    
// const sql = ""
// db.query(sql,data,(err))
// })

app.listen(8081,()=>{
    console.log("listening")
})