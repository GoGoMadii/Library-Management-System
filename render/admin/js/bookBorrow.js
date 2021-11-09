//Dom Nodes
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
let bid = document.getElementById('bookID');
let bn = document.getElementById('bookTitle');
let ba = document.getElementById('author');
let bt = document.getElementById('bookType');
let br = document.getElementById('rackNo');
let bc = document.getElementById('bookCost');
let bav= document.getElementById('avail');
let bq = document.getElementById('quant');
//student
let sn = document.getElementById('studentName');
let sr = document.getElementById('studentReg');
let sd = document.getElementById('studentDOB');
let sf = document.getElementById('studentFine');
let si = document.getElementById('studentID');
//LEND details
let bod =document.getElementById('borrowDate');
let bor = document.getElementById('ReturnDate')
let biid = document.getElementById('bookid')

function showBooks(){
let bi = document.getElementById('bookID').value;
var sql = "SELECT * FROM `lms`.`books` WHERE id= "+bi+"; ";
connection.query(sql,(err,res)=>{

  if(err||res.length==0)
      {//console.log("no book found");
      ipcRenderer.send("No-Book-Found");
    }
    else if (res[0].Availability=="No") {
      //console.log("enteres");
      ipcRenderer.send("book-lent");
    }
  else{
    console.log(res);
      biid.innerHTML=res[0].id;
      bn.innerHTML=res[0].Name;
      ba.innerHTML=res[0].Author;
      bt.innerHTML=res[0].Type;
      br.innerHTML=res[0].RackNo;

      bav.innerHTML=res[0].Availability;
      bq.innerHTML=res[0].Quantity;
      var bookt = res[0].Type
      if(bookt.toLowerCase()!="book"){
        ipcRenderer.send("not-for-lend");
        //document.getElementById("lend").disabled = true;
      }


  }
})
}
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
function showPatronDetails(){

  if(st.checked){
    console.log("student");
    showStudentDetails();
  }
  else if(staff.checked) {
    showStaffDetails();
  }

}
//Show Student DETAILS


function showStudentDetails(){

var sql = "SELECT * FROM `lms`.`students` WHERE RegNo="+si.value+";"
connection.query(sql,(err,res)=>{
  if(err||res[0]==undefined){ipcRenderer.send("student-not-found")}
  else{
    if (res[0].LendAllowed=="Yes"||res[0].LendAllowed=="") {
      sn.innerHTML=res[0].StudentName;
      sr.innerHTML=res[0].RegNo;
      sd.innerHTML=convertDate(res[0].DOB);
      sf.innerHTML=res[0].Fine;
      if(res[0].Fine>0){
        ipcRenderer.send('Fine-OverDue',res[0].Fine)
        //document.getElementById("lend").disabled = true;
      }
      else{
          bod.innerHTML=convertDate(d);
          bor.innerHTML=convertDate(dt)
      }
    }
    else {
      ipcRenderer.send("Student-limit")
    }


  }
})

}

//Staff Details
function  showStaffDetails(){

  var sql = "SELECT * FROM `lms`.`staff` WHERE StaffID="+si.value+";"

  connection.query(sql,(err,res)=>{
    console.log(res[0]);
    if(err||res[0]==undefined){ipcRenderer.send("student-not-found")
    console.log(err);}
    else{
      if (res[0].LendAllowed=="Yes"||res[0].LendAllowed=="") {
        sn.innerHTML=res[0].StaffName;
        sr.innerHTML=res[0].StaffID;
        sd.innerHTML=convertDate(res[0].DOB);
        sf.innerHTML=res[0].FINE;
        if(res[0].FINE>0){
          ipcRenderer.send('Fine-OverDue',res[0].FINE)
        }
        else{
            bod.innerHTML=convertDate(d);
            bor.innerHTML=convertDate(dt)
        }
      }
      else {
        ipcRenderer.send("Student-limit")
      }


    }
  })
}




function borrowBook() {
  if(st.checked){
    studentBorrow();
  }
  else if (staff.checked) {
    staffBorrow();
  }
}
function studentBorrow(){
  let bi = document.getElementById('bookID').value;
  let studentid;
  var sql1 = "SELECT * FROM `lms`.`students` WHERE RegNo="+si.value+";"
  connection.query(sql1,(err,res)=>{
    if(err) throw err;
    else{
      studentid=res[0].id;
      var sql2 = "SELECT * FROM `lms`.`books` WHERE id= "+bi+"; ";
      connection.query(sql2,(err,res)=>{
        if(err) throw err
        else{
          var sql3 = "INSERT INTO `lms`.`book-transaction` (`bookid`, `studentid`, `borrowDate`, `returnDate`, `Returned`) VALUES ('"+bi+"', '"+si.value+"', '"+convertDate(d)+"', '"+convertDate(dt)+"', 'No');"
          connection.query(sql3,(err,res3)=>{
            if(err) {throw err}
            else {

              console.log("borrow success");
              var sql4 = "UPDATE `lms`.`books` SET `Availability` = 'No', `AvailableBy` = '"+convertDate(dt)+"' WHERE (`id` = '"+bi+"');"
              connection.query(sql4,(err,res4)=>{
                if(err){console.log("error - four");}
                else{
                  console.log("success-4");
                  var sql5 ="UPDATE `lms`.`students` SET `LendAllowed` = 'No' WHERE (`RegNo` = '"+si.value+"');"
                  connection.query(sql5,(err,res5)=>{
                    if(err){console.log("error-5");}
                    else{
                      console.log("Book has been lent successfully...");
                      ipcRenderer.send("borrow-Action-success")
                    }
                  })
                }
              })
            }

          })
        }
      })
    }
  })

}
function staffBorrow(){
  let bi = document.getElementById('bookID').value;
  let studentid;
  var sql1 = "SELECT * FROM `auto`.`staff` WHERE StaffID="+si.value+";"
  connection.query(sql1,(err,res)=>{
    if(err) throw err;
    else{
      studentid=res[0].id;
      var sql2 = "SELECT * FROM `auto`.`books` WHERE id= "+bi+"; ";
      connection.query(sql2,(err,res)=>{
        if(err) throw err
        else{
          var sql3 = "INSERT INTO `auto`.`book-transaction` (`bookid`, `studentid`, `borrowDate`, `returnDate`, `Returned`) VALUES ('"+bi+"', '"+si.value+"', '"+convertDate(d)+"', '"+convertDate(dt)+"', 'No');"
          connection.query(sql3,(err,res3)=>{
            if(err) {throw err}
            else {
              console.log("borrow success");
              var sql4 = "UPDATE `auto`.`books` SET `Availability` = 'No', `AvailableBy` = '"+convertDate(dt)+"' WHERE (`id` = '"+bi+"');"
              connection.query(sql4,(err,res4)=>{
                if(err){console.log("error - four");}
                else{
                  console.log("success-4");
                  var sql5 ="UPDATE `auto`.`staff` SET `LendAllowed` = 'No' WHERE (`StaffID` = '"+si.value+"');"
                  connection.query(sql5,(err,res5)=>{
                    if(err){console.log("error-5");}
                    else{
                      console.log("Book has been lent successfully...");
                      ipcRenderer.send("borrow-Action-success")
                    }
                  })
                }
              })
            }

          })
        }
      })
    }
  })

}
