//JS for Admin Details from MYSQL


//Dom nodeIntegration
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();
let nos = document.getElementById('noa');
let table = document.getElementById('adminTable')

function viewadmininfo(){
  let len;
  sql="SELECT * FROM `auto`.`admin`";
  connection.query(sql,(err,res)=>{
    if(err) throw err;

    else {
      len = res.length;

      console.log(res);

      for(var i =0; i<len;i++){
       var row=table.insertRow(-1);
       var cell1,cell2,cell3,cell4;
       cell1=row.insertCell(0);
       cell1.innerHTML=res[i].RegNo;
       cell2=row.insertCell(1);
       cell2.innerHTML=res[i].Name;
       cell3=row.insertCell(2);
       cell3.innerHTML=res[i].MobileNo;
       cell4=row.insertCell(3);
       cell4.innerHTML=res[i].emailid;
        }

      }


    }
  )
}
 viewadmininfo();
