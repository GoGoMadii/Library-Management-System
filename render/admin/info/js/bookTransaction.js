//JS for Book-Transaction from MYSQL

//dom nodes
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
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

let table = document.getElementById('bookTransactionTable')

 var sql = "SELECT * FROM auto.`book-transaction`;"

 connection.query(sql,(err,res)=>{
   if(err) throw err;
   else{
     console.log(res);
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
       cell1.innerHTML=res[i].bookid;
       cell2=row.insertCell(1);
       cell2.innerHTML=res[i].studentid;
       cell3=row.insertCell(2);
       cell3.innerHTML=convertDate(res[i].borrowDate);
       cell4=row.insertCell(3);
       cell4.innerHTML=convertDate(res[i].returnDate);
       cell5=row.insertCell(4);
       if(res[i].RenewDate==null){
         cell5.innerHTML=""
       }
       else {
       cell5.innerHTML=convertDate(res[i].RenewDate)
       }


    }
   }
 })
