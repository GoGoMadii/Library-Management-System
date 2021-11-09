//Dom Nodes
const {ipcRenderer}=require('electron')
//bookSearch
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();

let bid = document.getElementById('bookID');
let bn = document.getElementById('bookTitle');
let ba = document.getElementById('author');
let bt = document.getElementById('bookType');
let br = document.getElementById('rackNo');
let bc = document.getElementById('bookCost');
let bav= document.getElementById('avail');
let bq = document.getElementById('quant');

function showDetails(){
let bi = document.getElementById('bookID').value;
var sql = "SELECT * FROM `lms`.`books` WHERE id= "+bi+"; ";
connection.query(sql,(err,res)=>{
  if(err||res.length==0)
      {console.log("no book found");
      ipcRenderer.send("No-Book-Found");
    }
  else{
    // ipcRenderer.send('update-books',res);
    bid.value=bi;
    bn.value=res[0].Name;
    ba.value=res[0].Author;
    bt.value=res[0].Type;
    br.value=res[0].RackNo;
    bc.value=res[0].Cost;
    bav.value=res[0].Availability;
    bq.value=res[0].Quantity;
  }
})
}

function updateBook(){
  var sql ="UPDATE `lms`.`books` SET `Name` = '"+bn.value+"', `Author` = '"+ba.value+"', `Type` = '"+bt.value+"', `RackNo` = '"+br.value+"', `Cost` = '"+bc.value+"', `Quantity` = '"+bq.value+"', `Availability` = '"+bav.value+"' WHERE (`id` = '"+bid.value+"');"
  connection.query(sql,(err,res)=>{
    if(err) throw error;
    else{
      ipcRenderer.send("book-update-success")
    }
  })
}
