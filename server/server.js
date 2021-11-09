//JS for Checking User Credentials.

const mysql = require('mysql');

//Database Connection
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();

//Function to Convert Date-String to yyyy/mm/dd
function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}

//ADMIN LOGIN CREDENTIALS
function checkCredAdmin(user,pass){
  let result;
  let dob;
  //console.log("server connected");
  var sql = "SELECT * FROM `lms`.`admin` WHERE RegNo = "+user+"";
  connection.query(sql,(err,res)=>{
      result = res;
    //  console.log(res);
      if(res.length==0){
        ipcRenderer.send('login-failed')
      }
      else {
        dob = convertDate(res[0].DOB)
        if(pass==dob){
        //  console.log("sucess");
          ipcRenderer.send('login-sucess',result,dob)
          ipcRenderer.send('student-details',result)
        }
        else {
          ipcRenderer.send('login-failed')
        }

      }
  })

}
//STUDENT LOGIN CREDENTIALS

function checkCredStudent(user,pass){
  let result;
  let dob;
  //console.log("server connected");
  var sql = "SELECT * FROM `lms`.`students` WHERE RegNo = "+user+"";
  connection.query(sql,(err,res)=>{
      result = res;
    //  console.log(res);
      if(res.length==0){
        ipcRenderer.send('login-failed')
      }
      else {
        dob = convertDate(res[0].DOB)
        if(pass==dob){
          ipcRenderer.send('student-details',res)
          ipcRenderer.send('login-sucess',result,dob)
        }
        else {
          ipcRenderer.send('login-failed')
        }

      }
  })

}
//STAFF LOGIN CREDENTIALS

function checkCredStaff(user,pass){
  let result;
  let dob;
  //console.log("server connected");
  var sql = "SELECT * FROM `lms`.`staff` WHERE StaffID = "+user+"";
  connection.query(sql,(err,res)=>{

      result = res;
     console.log(res);
      if(res.length==0){
        ipcRenderer.send('login-failed')
      }
      else {
        dob = convertDate(res[0].DOB)
        if(pass==dob){
          //  ipcRenderer.send('student-details',res)
          ipcRenderer.send('login-sucess',result,dob)
        }
        else {
          ipcRenderer.send('login-failed')
        }

      }
  })
}
