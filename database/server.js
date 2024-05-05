const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')
const multer = require('multer')
const path = require('path')
const csv = require('fast-csv')
const fs = require('fs')
const { error } = require('console')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//multer config

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,__dirname+"\\Uploads\\")
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname+ "-" + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage:storage
})

//db config
const db_config = {
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'exam-manager'
    
}
connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
	    if(err) {
			console.log(' Error when connecting to db  (DBERR001):', err);
			setTimeout(handleDisconnect, 5000);
	    }
	});

app.get('/', (req, res)=>{
    return res.json("From Backend : Express up")
})

//csv-export
app.get('/csv-export',(req,res)=>{
    res.sendFile("../exam-manager/src/Components/students/AddStudents.js")
})

//csv-import
app.post('/student-import',upload.single('file'),(req,res)=>{
    uploadStudent(__dirname+"\\Uploads\\"+req.file.filename)
    res.send("Records Uploaded")
})

app.post('/teacher-import',upload.single('file'),(req,res)=>{
    uploadTeacher(__dirname+"\\Uploads\\"+req.file.filename)
    res.send("Records Uploaded")
})

app.post('/timetable-import',upload.single('file'),(req,res)=>{
    uploadTimetable(__dirname+"\\Uploads\\"+req.file.filename)
    res.send("Records Uploaded")
})

app.post('/subject-import',upload.single('file'),(req,res)=>{
    uploadSubject(__dirname+"\\Uploads\\"+req.file.filename)
    res.send("Records Uploaded")
})

app.get('/exams', (req, res)=>{
    const sql = 'SELECT * FROM timetable GROUP BY tb_exname';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})
app.get('/exam', (req, res)=>{
    let tb_exname = req.query.tb_exname ?? '';
    let tb_sub = req.query.tb_sub ?? '';
    const sql = 'SELECT * FROM timetable WHERE tb_exname = ? and tb_sub = ? ';
    connection.query(sql,[tb_exname,tb_sub], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/exam', (req, res)=>{
    let tb_exname = req.query.tb_exname ?? '';
    let tb_sub = req.query.tb_sub ?? '';
    const sql = 'DELETE FROM timetable WHERE tb_exname = ? and tb_sub = ? ';
    connection.query(sql,[tb_exname,tb_sub], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/allexam', (req, res)=>{
    const sql = 'TRUNCATE TABLE timetable ';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/classes', (req, res)=>{
    const sql = 'SELECT * FROM classes';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/students', (req, res)=>{
    const sql = 'SELECT * FROM students';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/student', (req, res)=>{
    let s_name = req.query.s_name ?? '';
    let s_rollno = req.query.s_rollno ?? '';
    const sql = 'SELECT * FROM students WHERE s_name = ? and s_rollno = ? ';
    connection.query(sql,[s_name,s_rollno], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/student', (req, res)=>{
    let s_name = req.query.s_name ?? '';
    let s_rollno = req.query.s_rollno ?? '';
    const sql = 'DELETE FROM students WHERE s_name = ? and s_rollno = ? ';
    connection.query(sql,[s_name,s_rollno], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/allstudent', (req, res)=>{
    const sql = 'TRUNCATE TABLE students ';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/allteacher', (req, res)=>{
    const sql = 'TRUNCATE TABLE teachers ';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/allclassroom', (req, res)=>{
    const sql = 'TRUNCATE TABLE classes ';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/allsubject', (req, res)=>{
    const sql = 'TRUNCATE TABLE subjects ';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/teachers', (req, res)=>{
    const sql = 'SELECT * FROM teachers';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/teacher', (req, res)=>{
    let t_name = req.query.t_name ?? '';
    let t_phone = req.query.t_phone ?? '';
    const sql = 'SELECT * FROM teachers WHERE t_name = ? and t_phone = ? ';
    connection.query(sql,[t_name,t_phone], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/teacher', (req, res)=>{
    let t_name = req.query.t_name ?? '';
    let t_phone = req.query.t_phone ?? '';
    const sql = 'DELETE FROM teachers WHERE t_name = ? and t_phone = ? ';
    connection.query(sql,[t_name,t_phone], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/subjects', (req, res)=>{
    const sql = 'SELECT * FROM subjects';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/addsubjects',(req, res) => {
    const data = [
        req.body.sb_id,
        req.body.sb_code,
        req.body.sb_name,
        req.body.sb_dept,
        req.body.sb_semester
    ]
    const sql = "INSERT INTO subjects VALUES (?)";
    connection.query(sql, [data],(err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    });
});

app.get('/subject', (req, res)=>{
    let sb_name = req.query.sb_name ?? '';
    let sb_code = req.query.sb_code ?? '';
    const sql = 'SELECT * FROM subjects WHERE sb_name = ? and sb_code = ? ';
    connection.query(sql,[sb_name,sb_code], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

// app.get('/searchsubject', (req, res)=>{
//     let sb_searchkey1 = req.query.sb_searchkey ?? '';
//     let sb_searchkey2 = req.query.sb_searchkey ?? '';
//     let sb_searchkey3 = req.query.sb_searchkey ?? '';
//     const sql = 'SELECT * FROM subjects WHERE sb_name LIKE ? or sb_dept LIKE ? or sb_semester LIKE ?';
//     connection.query(sql,[sb_searchkey1,sb_searchkey2,sb_searchkey3], (err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data)
//     })
// })

app.delete('/subject', (req, res)=>{
    let sb_name = req.query.sb_name ?? '';
    let sb_code = req.query.sb_code ?? '';
    const sql = 'DELETE FROM subjects WHERE sb_name = ? and sb_code = ? ';
    connection.query(sql,[sb_name,sb_code], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/disabled', (req, res)=>{
    const sql = 'SELECT count(*) as c_dcount FROM classes WHERE c_disability="true"';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/classcount', (req, res)=>{
    const sql = 'SELECT count(*) as c_count FROM classes';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/classroom', (req, res)=>{
    let c_name = req.query.c_name ?? '';
    let c_id = req.query.c_id ?? '';
    const sql = 'SELECT * FROM classes WHERE c_name = ? and c_id = ? ';
    connection.query(sql,[c_name,c_id], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/admin', (req, res)=>{
    let a_email = req.query.a_email ?? '';
    let a_password = req.query.a_password ?? '';
    const sql = 'SELECT * FROM admin WHERE a_email = ? and a_password = ? ';
    connection.query(sql,[a_email,a_password], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/classroom', (req, res)=>{
    let c_name = req.query.c_name ?? '';
    let c_id = req.query.c_id ?? '';
    const sql = 'DELETE FROM classes WHERE c_name = ? and c_id = ? ';
    connection.query(sql,[c_name,c_id], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/createclass',(req, res) => {
    const data = [
        req.body.c_id,
        req.body.c_name,
        req.body.c_block,
        req.body.c_type,
        req.body.c_sections,
        req.body.c_benches,
        req.body.c_seats,
        req.body.c_sel_seats,
        req.body.c_disability
    ]
    const sql = "INSERT INTO classes VALUES (?)";
    connection.query(sql, [data],(err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    });
});

app.post('/student',(req, res) => {
    const data = [
        req.body.s_id,
        req.body.s_name,
        req.body.s_gender,
        req.body.s_email,
        req.body.s_phone,
        req.body.s_rollno,
        req.body.s_semester,
        req.body.s_department,
        req.body.s_examids,
        req.body.s_password
    ]
    const sql = "INSERT INTO students VALUES (?)";
    connection.query(sql, [data],(err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    });
});

app.post('/teacher',(req, res) => {
    const data = [
        req.body.t_id,
        req.body.t_name,
        req.body.t_gender,
        req.body.t_desig,
        req.body.t_dept,
        req.body.t_email,
        req.body.t_phone,
        req.body.t_password
    ]
    const sql = "INSERT INTO teachers VALUES (?)";
    connection.query(sql, [data],(err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    });
});

app.post('/registeradmin',(req, res) => {
    const data = [
        req.body.a_id,
        req.body.a_fname,
        req.body.a_lname,
        req.body.a_email,
        req.body.a_password
    ]
    const sql = "INSERT INTO admin VALUES (?)";
    connection.query(sql, [data],(err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    });
});

app.get('/schedules', (req, res)=>{
    const sql = 'SELECT * FROM timetable';
    connection.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

function uploadStudent(path){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv.parse().on('data',function(data){
        csvDataColl.push(data)
    }).on('end',function(){
        csvDataColl.shift()
        let sql = "INSERT INTO students (s_name,s_gender,s_email,s_phone,s_rollno,s_semester,s_department,s_examids,s_password) VALUES ?"
        connection.query(sql,[csvDataColl]),(error,res) => {
        if(err) return res.json(error);
        return res.json(data) 
    }
    fs.unlinkSync(path)
    })
    stream.pipe(fileStream)
}

function uploadTeacher(path){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv.parse().on('data',function(data){
        csvDataColl.push(data)
    }).on('end',function(){
        csvDataColl.shift()
        let sql = "INSERT INTO teachers (t_name,t_gender,t_desig,t_dept,t_email,t_phone,t_password) VALUES ?"
        connection.query(sql,[csvDataColl]),(error,res) => {
        if(err) return res.json(error);
        return res.json(data)  
    }
    fs.unlinkSync(path)
    })
    stream.pipe(fileStream)
}

function uploadTimetable(path){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv.parse().on('data',function(data){
        csvDataColl.push(data)
    }).on('end',function(){
        csvDataColl.shift()
        let sql = "INSERT INTO timetable (tb_date,tb_day,tb_time,tb_sub,tb_subduration,tb_exname) VALUES ?"
        connection.query(sql,[csvDataColl]),(error,res) => {
        if(err) return res.json(error);
        return res.json(data)  
    }
    fs.unlinkSync(path)
    })
    stream.pipe(fileStream)
}

function uploadSubject(path){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv.parse().on('data',function(data){
        csvDataColl.push(data)
    }).on('end',function(){
        csvDataColl.shift()
        let sql = "INSERT INTO subjects (sb_code,sb_name,sb_dept,sb_semester) VALUES ?"
        connection.query(sql,[csvDataColl]),(error,res) => {
        if(err) return res.json(error);
        return res.json(data)  
    }
    fs.unlinkSync(path)
    })
    stream.pipe(fileStream)
}

app.listen(8081, ()=>{
    console.log('listening')
})

function handleDisconnect() {
	console.log('handleDisconnect()');
	connection.destroy();
}