//JS for Staff Details from MYSQL
//dom nodes
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

let table = document.getElementById('staffTable')
let fn = document.getElementById('fine')
function filter(){
  if(fn.value=="nofine"){
    var sql = "SELECT * FROM auto.staff;"
    connection.query(sql,(err,res)=>{
      if(err) throw err;
      else{
        len = res.length;
        var rowCount = table.rows.length;
       for (var i = rowCount - 1; i > 0; i--) {
           table.deleteRow(i);
       }

       len = res.length;
       for (var i =0; i<len;i++){
         var row=table.insertRow(-1);
          var cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10;
          cell1=row.insertCell(0);
          cell1.innerHTML=res[i].StaffID;
          cell2=row.insertCell(1);
          cell2.innerHTML=res[i].StaffName;
          cell3=row.insertCell(2);
          cell3.innerHTML=res[i].Designation;
          cell4=row.insertCell(3);
          cell4.innerHTML=res[i].PhoneNumber;
          cell5=row.insertCell(4);
          cell5.innerHTML=res[i].FINE
       }
      }
    })
  }
  else if(fn.value=="fine"){
    var sql="SELECT * FROM auto.staff WHERE FINE >0;"
    connection.query(sql,(err,res)=>{
      if(err) throw err;
      else{
        len = res.length;
        var rowCount = table.rows.length;
       for (var i = rowCount - 1; i > 0; i--) {
           table.deleteRow(i);
       }

       len = res.length;
       for (var i =0; i<len;i++){
         var row=table.insertRow(-1);
          var cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10;
          cell1=row.insertCell(0);
          cell1.innerHTML=res[i].StaffID;
          cell2=row.insertCell(1);
          cell2.innerHTML=res[i].StaffName;
          cell3=row.insertCell(2);
          cell3.innerHTML=res[i].Designation;
          cell4=row.insertCell(3);
          cell4.innerHTML=res[i].PhoneNumber;
          cell5=row.insertCell(4);
          cell5.innerHTML=res[i].FINE
       }
      }
    })
  }

}
