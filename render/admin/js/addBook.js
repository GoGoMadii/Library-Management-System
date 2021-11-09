//Dom nodes
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();
//Add Book Functions


function addEntry() {
  let bi = document.getElementById('bookID').value;
  let bn = document.getElementById('bookTitle').value;
  let ba = document.getElementById('author').value;
  let bt = document.getElementById('bookType').value;
  let br = document.getElementById('rackNo').value;
  let bc = document.getElementById('bookCost').value;
  let bav= document.getElementById('avail').value;
  let bq = document.getElementById('quant').value;
//  ipcRenderer.send("add-books")

var sql = "INSERT INTO `lms`.`books` (`id`, `Name`, `Author`, `Type`, `RackNo`, `Cost`, `Quantity`, `Availability`) VALUES ('"+bi+"', '"+bn+"', '"+ba+"', '"+bt+"', '"+br+"', '"+bc+"', '"+bq+"', '"+bav+"');"
connection.query(sql,(err,res)=>{
  if(err) {ipcRenderer.send('add-book-failed')}
  else{
  ipcRenderer.send("add-book-success");
  }
})
}
