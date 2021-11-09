// dom nodes
const {ipcRenderer}=require('electron')
//bookSearch
var d = new Date();

mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})

function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}

connection.connect();
let sid = document.getElementById('searchid')
let table = document.getElementById('bookTable')

function searchBook(){
  if(document.getElementById('Book Name').checked){
    var name = sid.value
    var sql = "SELECT * FROM `lms`.`books` WHERE Name LIKE '%"+name+"%' ;"
    connection.query(sql,(err,res)=>{
      if(err)  throw err;
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
           cell1.innerHTML=res[i].id;
           cell2=row.insertCell(1);
           cell2.innerHTML=res[i].Name;
           cell3=row.insertCell(2);
           cell3.innerHTML=res[i].Author;
           cell4=row.insertCell(3);
           cell4.innerHTML=res[i].Type;
           cell5=row.insertCell(4);
           cell5.innerHTML=res[i].RackNo;
           // cell6=row.insertCell(5)
           // cell6.innerHTML=res[i].Cost;
           cell6=row.insertCell(5)
           cell6.innerHTML=res[i].Quantity;
           cell7=row.insertCell(6)
           cell7.innerHTML=res[i].Availability;
           cell8=row.insertCell(7)
           if(res[0].AvailableBy==null){
            cell8.innerHTML = convertDate(d)
           }
           else{
                  cell8.innerHTML=res[0].AvailableBy;
           }
        }
      }

    })
  }
  else if ( document.getElementById('Author Name').checked){
    var name = sid.value
    var sql = "SELECT * FROM `lms`.`books` WHERE Author LIKE '%"+name.toUpperCase()+"%' ;"
    connection.query(sql,(err,res)=>{
      if(err)  throw err;
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
           cell1.innerHTML=res[i].id;
           cell2=row.insertCell(1);
           cell2.innerHTML=res[i].Name;
           cell3=row.insertCell(2);
           cell3.innerHTML=res[i].Author;
           cell4=row.insertCell(3);
           cell4.innerHTML=res[i].Type;
           cell5=row.insertCell(4);
           cell5.innerHTML=res[i].RackNo;
           // cell6=row.insertCell(5)
           // cell6.innerHTML=res[i].Cost;
           cell6=row.insertCell(5)
           cell6.innerHTML=res[i].Quantity;
           cell7=row.insertCell(6)
           cell7.innerHTML=res[i].Availability;
           cell8=row.insertCell(7)
           if(res[0].AvailableBy==null){
            cell8.innerHTML = convertDate(d)
           }
           else{
                  cell8.innerHTML=res[0].AvailableBy;
           }
        }
      }

    })
  }
  else if (document.getElementById('book id').checked) {
    var name = sid.value
    var sql = "SELECT * FROM `lms`.`books` WHERE id="+name+";"
    connection.query(sql,(err,res)=>{
      if(err||res.length==0) {ipcRenderer.send("No-Book-Found")}
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
           cell1.innerHTML=res[i].id;
           cell2=row.insertCell(1);
           cell2.innerHTML=res[i].Name;
           cell3=row.insertCell(2);
           cell3.innerHTML=res[i].Author;
           cell4=row.insertCell(3);
           cell4.innerHTML=res[i].Type;
           cell5=row.insertCell(4);
           cell5.innerHTML=res[i].RackNo;
           // cell6=row.insertCell(5)
           // cell6.innerHTML=res[i].Cost;
           cell6=row.insertCell(5)
           cell6.innerHTML=res[i].Quantity;
           cell7=row.insertCell(6)
           cell7.innerHTML=res[i].Availability;
           cell8=row.insertCell(7)
           if(res[0].AvailableBy==null){
            cell8.innerHTML = convertDate(d)
           }
           else{
                  cell8.innerHTML=res[0].AvailableBy;
           }
        }
      }

    })

  }
}
