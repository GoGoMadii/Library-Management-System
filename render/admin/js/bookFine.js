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

let sn = document.getElementById('studentName');
let sr = document.getElementById('studentReg');
let sd = document.getElementById('studentDOB');
let sf = document.getElementById('studentFine');
let si = document.getElementById('studentID');
var st = document.getElementById('student');
var staff= document.getElementById('staff');
function showPatronDetails(){
  if(st.checked){
    showStudenDet()
  }
else if (staff.checked) {
  showStaffD();
}
}
function showStudenDet() {
  var sql = "SELECT * FROM `lms`.`students` WHERE RegNo="+si.value+";"
  connection.query(sql,(err,res)=>{
    if(err||res[0]==undefined){ipcRenderer.send("student-not-found")}
    else{
        sn.innerHTML=res[0].StudentName;
        sr.innerHTML=res[0].RegNo;
        sd.innerHTML=convertDate(res[0].DOB);
        sf.innerHTML=res[0].Fine;
        if(res[0].Fine==0){
          ipcRenderer.send("No-fine");
        }

    }
  })
}
function showStaffD() {
  var sql = "SELECT * FROM `lms`.`staff` WHERE StaffID="+si.value+";"
  connection.query(sql,(err,res)=>{
    if(err||res[0]==undefined){ipcRenderer.send("student-not-found")}
    else{
        sn.innerHTML=res[0].StaffName;
        sr.innerHTML=res[0].StaffID;
        sd.innerHTML=convertDate(res[0].DOB);
        sf.innerHTML=res[0].FINE;
        if(res[0].FINE==0){
          ipcRenderer.send("No-fine");
        }
    }
  })
}
function fineStudent(){
  var sql = "select * from `lms`.`book-transaction` where studentid="+si.value+""
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      console.log(res);
      var sqlUpdate = "UPDATE `lms`.`book-transaction` SET `returnDate` = '"+convertDate(d)+"' WHERE (`bookid` = '"+res[0].bookid+"');"
      connection.query(sqlUpdate,(err,ress)=>{
        if(err) { console.log("Error in update");}
        else{
          connection.query(sql,(err,res)=>{
            if(err){console.log("Error");}
            else{
              var sql3 = "UPDATE `lms`.`students` SET `Fine` = '0' WHERE (`RegNo` = '"+si.value+"');"
              connection.query(sql3,(err,ress)=>{
                if(err) throw err
                else{
                  ipcRenderer.send("fine-updated")
                }
              })


            }
          })
        }
      })
    }
  })
}
function fineStaff(){
  var sql = "select * from `lms`.`book-transaction` where studentid="+si.value+""
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      console.log(res);
      var sqlUpdate = "UPDATE `lms`.`book-transaction` SET `returnDate` = '"+convertDate(d)+"' WHERE (`bookid` = '"+res[0].bookid+"');"
      connection.query(sqlUpdate,(err,ress)=>{
        if(err) { console.log("Error in update");}
        else{
          connection.query(sql,(err,res)=>{
            if(err){console.log("Error");}
            else{
              var sql3 = "UPDATE `lms`.`staff` SET `FINE` = '0' WHERE (`StaffID` = '"+si.value+"');"
              connection.query(sql3,(err,ress)=>{
                if(err) throw err
                else{
                  ipcRenderer.send("fine-updated")
                }
              })
            }
          })
        }
      })
    }
  })
}
function payFine(){
    if(st.checked){
      fineStudent();

    }
    else if (staff.checked) {
      fineStaff();
    }
}
