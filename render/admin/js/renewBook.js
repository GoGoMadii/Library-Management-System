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
let bid = document.getElementById('bookId');
let sn = document.getElementById('studentID');
let bd = document.getElementById('borrowDate');
let brd = document.getElementById('ReturnDate');
let br = document.getElementById('RenewDate');

function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}
var st = document.getElementById('student');
var staff= document.getElementById('staff');
function showBook(){
  if(st.checked)
  showStudentBook()
  else if (staff.checked) {
    showStaffBook();
  }
}
//staff-book
function showStaffBook(){
  let bi = document.getElementById('bookID').value;
  var sql = "SELECT * FROM `lms`.`book-transaction` WHERE bookid= "+bi+"; ";
  connection.query(sql,(err,res)=>{
    if(err||res.length==0)
        {console.log("no book found");
        ipcRenderer.send("No-Book-Found");
      }
    else{
      if (res[0].Returned=="Yes") {
        ipcRenderer.send("book-already-returned")
      }

    bid.innerHTML= res[0].bookid;
    sn.innerHTML=res[0].studentid;
    bd.innerHTML=convertDate(res[0].borrowDate);
    brd.innerHTML=convertDate(res[0].returnDate);
    var rtd =  res[0].returnDate;
    rtd = new Date(convertDate(rtd));
    var td = new Date(convertDate(d));
    var diff = rtd.getTime() - td.getTime()
    var daydiff = diff/(1000*60*60*24)
    console.log(daydiff);
    if(daydiff<0){
      daydiff = -1 * daydiff
      ipcRenderer.send('fine-pending',daydiff);
      var sqlfine = "UPDATE `lms`.`staff` SET `FINE` = '"+daydiff+"' WHERE (`StaffID` = '"+sn.innerHTML+"');"
      connection.query(sqlfine,(err,res)=>{
        if(err) {console.log("Fine Error");}
        else{
          console.log("fine details has been updated");
        }
      })
    }
  }
  })
}
function showStudentBook(){
  let bi = document.getElementById('bookID').value;
  var sql = "SELECT * FROM `lms`.`book-transaction` WHERE bookid= "+bi+"; ";
  connection.query(sql,(err,res)=>{
    if(err||res.length==0)
        {console.log("no book found");
        ipcRenderer.send("No-Book-Found");
      }
    else{
      if (res[0].Returned=="Yes") {
        ipcRenderer.send("book-already-returned")
      }

    bid.innerHTML= res[0].bookid;
    sn.innerHTML=res[0].studentid;
    bd.innerHTML=convertDate(res[0].borrowDate);
    brd.innerHTML=convertDate(res[0].returnDate);
    var rtd =  res[0].returnDate;
    rtd = new Date(convertDate(rtd));
    var td = new Date(convertDate(d));
    var diff = rtd.getTime() - td.getTime()
    var daydiff = diff/(1000*60*60*24)
    console.log(daydiff);
    if(daydiff<0){
      daydiff = -1 * daydiff
      ipcRenderer.send('fine-pending',daydiff);
      var sqlfine = "UPDATE `lms`.`students` SET `Fine` = '"+daydiff+"' WHERE (`RegNo` = '"+sn.innerHTML+"');"
      connection.query(sqlfine,(err,res)=>{
        if(err) {console.log("Fine Error");}
        else{
          console.log("fine details has been updated");
        }
      })
    }
  }
  })
}
function renewBook() {
if(st.checked){
  studentRenew();

}
else if (staff.checked) {
staffRenew();
}
}
function studentRenew() {
  br.innerHTML=convertDate(d);
  var sql="UPDATE `lms`.`book-transaction` SET `returnDate` = '"+convertDate(dt)+"', `RenewDate` = '"+convertDate(d)+"' WHERE (`bookid` = '"+bid.innerHTML+"');"
  connection.query(sql, (err,res)=>{
    if(err) throw err;
    else{
      console.log("sucess-1");
      var sql2 ="UPDATE `lms`.`books` SET `AvailableBy` = '"+convertDate(dt)+"' WHERE (`id` = '"+bid.innerHTML+"');"
      connection.query(sql2,(err,res)=>{
        if(err) { console.log("error-2");}
        else{
          ipcRenderer.send("book-renewed");
        }
      })
    }
  })
}

function staffRenew(){
  br.innerHTML=convertDate(d);
  var sql="UPDATE `lms`.`book-transaction` SET `returnDate` = '"+convertDate(dt)+"', `RenewDate` = '"+convertDate(d)+"' WHERE (`bookid` = '"+bid.innerHTML+"');"
  connection.query(sql, (err,res)=>{
    if(err) throw err;
    else{
      console.log("sucess-1");
      var sql2 ="UPDATE `lms`.`books` SET `AvailableBy` = '"+convertDate(dt)+"' WHERE (`id` = '"+bid.innerHTML+"');"
      connection.query(sql2,(err,res)=>{
        if(err) { console.log("error-2");}
        else{
          ipcRenderer.send("book-renewed");
        }
      })
    }
  })
}
