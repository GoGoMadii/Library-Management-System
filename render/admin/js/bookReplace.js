//Dom Nodes
const {ipcRenderer}=require('electron')
//bookSearch
const d = new Date();
var dt = new Date();
dt.setDate(dt.getDate() +15 );
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();
function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}
let sn = document.getElementById('studentID')
let bn = document.getElementById('bookTitle')
let au = document.getElementById('author')
// let bt = document.getElementById('bookType')
let rn = document.getElementById('rackNo')
let cs = document.getElementById('bookCost')
let bd = document.getElementById('borrowDate')
let rd = document.getElementById('returnDate')
let bi = document.getElementById('bookid')

var st = document.getElementById('student');
var staff= document.getElementById('staff');

function showStudentBook(){
  var sql ="SELECT * FROM lms.`book-transaction` where studentid = "+sn.value+";"
  connection.query(sql,(err,res)=>{
  if(err||res[0].length==0) {ipcRenderer.send("Patron-no-book")}
    else{
      // var sqlbook = ""
      bi.innerHTML= res[0].bookid;
      bd.innerHTML=convertDate(res[0].borrowDate);
      rd.innerHTML=convertDate(res[0].returnDate);

     var sqlbook = "SELECT * FROM lms.books  where id="+bi.innerHTML+";";
     connection.query(sqlbook,(err,res)=>{
       if(err) throw err;
       else{
         bn.innerHTML= res[0].Name;
         au.innerHTML = res[0].Author;
         rn.innerHTML = res[0].RackNo;
         cs.innerHTML = res[0].Cost;
       }
     })

    }
  })
}
function showStaffBook(){
  var sql ="SELECT * FROM lms.`book-transaction` where studentid = "+sn.value+";"
  connection.query(sql,(err,res)=>{

    if(err||res[0].length==0) {ipcRenderer.send("Patron-no-book")}
    else{

      bi.innerHTML= res[0].bookid;
      bd.innerHTML=convertDate(res[0].borrowDate);
      rd.innerHTML=convertDate(res[0].returnDate);

     var sqlbook = "SELECT * FROM lms.books  where id="+bi.innerHTML+";";
     connection.query(sqlbook,(err,res)=>{
       if(err) {ipcRenderer.send('No-Book-Found')}
       else{
         bn.innerHTML= res[0].Name;
         au.innerHTML = res[0].Author;
         rn.innerHTML = res[0].RackNo;
         cs.innerHTML = res[0].Cost;
       }
     })

    }
  })
}

function showBooks(){
  if(st.checked){
    showStudentBook()
  }
  else if (staff.checked) {
    showStaffBook()
  }
}
function replaceStudentBook(){
  var sql = "delete from `lms`.`books` where id = "+bi.innerHTML+";"
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      var sql1= "DELETE FROM `lms`.`book-transaction` WHERE (`bookid` = '"+bi.innerHTML+"'); "
      connection.query(sql1,(err,res)=>{
        if(err){console.log("Error-1");}
        else{
                  console.log("Success-2");
                  var sql3="UPDATE `lms`.`students` SET `LendAllowed` = 'Yes' ,`Fine`=0 WHERE (`RegNo` = '"+sn.value+"');"
                  connection.query(sql3,(err,res)=>{
                    console.log("Success-3");
                    ipcRenderer.send("Book-replaced")
                  })
                }
              })
        }
      })
}
function replaceStaffBook(){
  let sn = document.getElementById('studentID')
  var sql = "delete from `lms`.`books` where id = "+bi.innerHTML+";"
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      var sql1= "DELETE FROM `lms`.`book-transaction` WHERE (`bookid` = '"+bi.innerHTML+"'); "
      connection.query(sql1,(err,res)=>{
        if(err){console.log("Error-1");}
        else{
                  console.log("Success-2");
                  var sql3="UPDATE `lms`.`staff` SET `FINE` = '0', `LendAllowed` = 'Yes' WHERE (`StaffID` = '"+sn.value+"');"
                  connection.query(sql3,(err,res)=>{
                    console.log("Success-3");
                    console.log(sql3);
                  if (err) {
                    console.log("err");
                  }
                  else {
                        ipcRenderer.send("Book-replaced")
                  }
                  })
                }
              })
        }
      })
}
function replace(){
  if(st.checked){
    replaceStudentBook()
  }
  else if (staff.checked) {
    replaceStaffBook()
  }
    }
