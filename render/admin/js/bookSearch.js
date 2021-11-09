//Dom Nodes
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
let bid = document.getElementById('bookID');
let biid = document.getElementById('bookid')
let bn = document.getElementById('bookTitle');
let ba = document.getElementById('author');
let bt = document.getElementById('bookType');
let br = document.getElementById('rackNo');
let bc = document.getElementById('bookCost');
let bav= document.getElementById('avail');
let bq = document.getElementById('quant');
let bab = document.getElementById('availby');
function showBooks(){
let bi = document.getElementById('bookID').value;
var sql = "SELECT * FROM `lms`.`books` WHERE id= "+bi+"; ";
connection.query(sql,(err,res)=>{
  if(err||res.length==0)
      {console.log("no book found");
      ipcRenderer.send("No-Book-Found");
    }
  else{

    console.log(res);
      biid.innerHTML=res[0].id;
      bn.innerHTML=res[0].Name;
      ba.innerHTML=res[0].Author;
      bt.innerHTML=res[0].Type;
      br.innerHTML=res[0].RackNo;
      bc.innerHTML=res[0].Cost;
      bav.innerHTML=res[0].Availability;
      bq.innerHTML=res[0].Quantity;

      if(res[0].AvailableBy==null){
       bab.innerHTML = convertDate(d)
      }
      else{
             bab.innerHTML=res[0].AvailableBy;
      }



  }
})
}
