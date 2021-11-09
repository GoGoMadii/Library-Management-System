//Dom Nodes
const {ipcRenderer}=require('electron')
//bookSearch
const d = new Date();
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
function showDetails(){
if(st.checked){
  showBook();
}
else if (staff.checked) {
  showBook();
}
}


function showBook(){
let bi = document.getElementById('bookID').value;
var sql = "SELECT * FROM `lms`.`book-transaction` WHERE bookid= "+bi+"; ";
connection.query(sql,(err,res)=>{
  if(err||res.length==0)
      {console.log("no book found");
      ipcRenderer.send("No-Book-Found");
    }
  else{

  bid.innerHTML= res[0].bookid;
  sn.innerHTML=res[0].studentid;
  bd.innerHTML=convertDate(res[0].borrowDate);
  brd.innerHTML=convertDate(res[0].returnDate);

  }
})
}
function returnBook(){
  if(st.checked){
    returnStudentBook();
  }
  else if(staff.checked){
    returnStaffBook()
  }
}
function returnStudentBook(){
  let s = document.getElementById('studentID').innerHTML;
  let b = document.getElementById('bookId').innerHTML;
  var sql= "SELECT `studentid`,`returnDate` FROM `lms`.`book-transaction` WHERE `bookid`="+b+"";
  connection.query(sql,(err,res)=>{
    if(err) throw err;
    else{
      console.log(res);
      var rtd =  res[0].returnDate;
      rtd = new Date(convertDate(rtd));
      var td = new Date(convertDate(d));
      var diff = rtd.getTime() - td.getTime()
      var daydiff = diff/(1000*60*60*24)
      console.log(daydiff);
      if(daydiff<0){
        daydiff = -1 * daydiff
        ipcRenderer.send('fine-pending',daydiff);
        var sqlfine = "UPDATE `lms`.`students` SET `Fine` = '"+daydiff+"' WHERE (`RegNo` = '"+s+"');"
        connection.query(sqlfine,(err,res)=>{
          if(err) {console.log("Fine Error");}
          else{
            console.log("fine details has been updated");
          }
        })
      }
      else {
        var sql1= "DELETE FROM `lms`.`book-transaction` WHERE (`bookid` = '"+b+"'); "
        connection.query(sql1,(err,res)=>{
          if(err){console.log("Error-1");}
          else{
                var sql2 = "UPDATE `lms`.`books` SET `Availability` = 'Yes', `AvailableBy` = '"+convertDate(d)+"' WHERE (`id` = '"+b+"');"
                connection.query(sql2,(err,res2)=>{
                  if(err){console.log("Error-2");}
                  else{
                    console.log("Success-2");
                    var sql3="UPDATE `lms`.`students` SET `LendAllowed` = 'Yes' WHERE (`RegNo` = '"+sn.innerHTML+"');"
                    connection.query(sql3,(err,res)=>{
                      console.log("Success-3");
                      ipcRenderer.send("book-returned")
                    })
                  }
                })
          }
        })
      }
    }
  })
  }
  function returnStaffBook(){
    let s = document.getElementById('studentID').innerHTML;
    let b = document.getElementById('bookId').innerHTML;
    var sql= "SELECT `studentid`,`returnDate` FROM `lms`.`book-transaction` WHERE `bookid`="+b+"";
    connection.query(sql,(err,res)=>{
      if(err) throw err;
      else{
        console.log(res);
        var rtd =  res[0].returnDate;
        rtd = new Date(convertDate(rtd));
        var td = new Date(convertDate(d));
        var diff = rtd.getTime() - td.getTime()
        var daydiff = diff/(1000*60*60*24)
        console.log(daydiff);
        if(daydiff<0){
          daydiff = -1 * daydiff
          ipcRenderer.send('fine-pending',daydiff);
          var sqlfine = "UPDATE `lms`.`staff` SET `FINE` = '"+daydiff+"' WHERE (`StaffID` = '"+s+"');"
          connection.query(sqlfine,(err,res)=>{
            if(err) {console.log("Fine Error");}
            else{
              console.log("fine details has been updated");
            }
          })
        }
        else {
          var sql1= "DELETE FROM `lms`.`book-transaction` WHERE (`bookid` = '"+b+"'); "
          connection.query(sql1,(err,res)=>{
            if(err){console.log("Error-1");}
            else{
                  var sql2 = "UPDATE `lms`.`books` SET `Availability` = 'Yes', `AvailableBy` = '"+convertDate(d)+"' WHERE (`id` = '"+b+"');"
                  connection.query(sql2,(err,res2)=>{
                    if(err){console.log("Error-2");}
                    else{
                      console.log("Success-2");
                      var sql3="UPDATE `lms`.`staff` SET `LendAllowed` = 'Yes' WHERE (`StaffID` = '"+sn.innerHTML+"');"
                      connection.query(sql3,(err,res)=>{
                        console.log("Success-3");
                        ipcRenderer.send("book-returned")
                      })
                    }
                  })
            }
          })
        }
      }
    })
  }
