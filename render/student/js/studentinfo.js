// dom nodes
//const {ipcRenderer}=require('electron')
//bookSearch
var d = new Date();

mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})

connection.connect();
const {ipcRenderer} = require('electron')
let v = document.getElementById('viewStudentDetails')
let studentDetail;
let sn = document.getElementById('studentName');
let rn = document.getElementById('RegNo');
let db= document.getElementById('dob');
let m = document.getElementById('mn');
let f = document.getElementById('fp')
let table = document.getElementById('bookTable')

function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}
function showDetails(){
  ipcRenderer.send('need-details')
  ipcRenderer.on('throw-details',(events,args)=>{
    showStudent(args)
  })
}

function showStudent(res){
  sn.innerHTML=res[0].StudentName;
  rn.innerHTML=res[0].RegNo
  db.innerHTML=convertDate(res[0].DOB)
  m.innerHTML=res[0].PhoneNumber
  f.innerHTML=res[0].Fine
  //book Borrowed
  var sql ="SELECT * FROM `lms`.`book-transaction` where studentid="+res[0].RegNo+";"
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      var rowCount = table.rows.length;
     for (var i = rowCount - 1; i > 0; i--) {
         table.deleteRow(i);
     }
      console.log(res);
      len = res.length;
      for (var i =0; i<len;i++){
        var row=table.insertRow(-1);
         var cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10;
         cell1=row.insertCell(0);
         cell1.innerHTML=res[i].bookid;
         cell2=row.insertCell(1);
         cell2.innerHTML=convertDate(res[i].borrowDate);
         cell3=row.insertCell(2);
        cell3.innerHTML=convertDate(res[i].returnDate);
      }
    }
  })
}
