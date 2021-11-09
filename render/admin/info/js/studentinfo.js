//JS for Student Details from MYSQL

//dom nodes
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "lms",
  database : ""
})
connection.connect();
let yr1 = document.getElementById('yr1');
let yr2 = document.getElementById('yr2');
let yr3 = document.getElementById('yr3');
let yr4 = document.getElementById('yr4');
let yr = document.getElementById('year');
let fn = document.getElementById('fine');
function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}

let table = document.getElementById('studentTable')

var sql = "SELECT   SUBSTR(RegNo, 1 , 4 ) FROM `auto`.`students` group by SUBSTR(RegNo, 1 , 4 ) having count(substr(RegNo,1,4))>=1;";
connection.query(sql,(err,res)=>{
  if(err) throw err;
  else{

        len = res.length;
        console.log(len);
        for(var i = 0 ; i<len ; i++){
          var opt = document.createElement('option');
            opt.value = Object.values(res[i]);
            opt.innerHTML = Object.values(res[i]);
            yr.appendChild(opt);
        }

  }
})

function filter(){
  //console.log(yr.value + fn.value);

  if (fn.value=="nofine"){

    var sql = "SELECT * FROM auto.students where RegNo Like '"+yr.value+"%';"
    connection.query(sql,(err,res)=>{
      if(err) throw err
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
        cell1.innerHTML=res[i].RegNo;
        cell2=row.insertCell(1);
        cell2.innerHTML=res[i].StudentName;
        cell3=row.insertCell(2);
        cell3.innerHTML=res[i].PhoneNumber;
        cell4=row.insertCell(3);
        cell4.innerHTML=res[i].Fine;
     }
      }
    })
  }
  else if ( fn.value=="fine"){
    var sql = "select * from `auto`.`students` where Fine > 0 and RegNo Like '"+yr.value+"%'"
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
          cell1.innerHTML=res[i].RegNo;
          cell2=row.insertCell(1);
          cell2.innerHTML=res[i].StudentName;
          cell3=row.insertCell(2);
          cell3.innerHTML=res[i].PhoneNumber;
          cell4=row.insertCell(3);
          cell4.innerHTML=res[i].Fine;
       }
      }

    })
  }
}
  // else if(fn.value="fine")
