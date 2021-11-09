// JS to display the NPTEL Video Title and their QR.

//Dom nodeIntegration
//Database Connection
const {ipcRenderer} = require('electron')
mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();
let nos = document.getElementById('noa');
let table = document.getElementById('nptelTable')


function viewNPTEL(){
  let len;
  sql="SELECT * FROM `lms`.`nptellinks`";
  connection.query(sql,(err,res)=>{
    if(err) throw err;

    else {
      len = res.length;

      // console.log(res[0].qr);

      for(var i =0; i<len;i++){
       var row=table.insertRow(-1);
       var cell1,cell2,cell3,cell4;
       cell1=row.insertCell(0);
       cell1.innerHTML=res[i].id;
       cell2=row.insertCell(1);
       // cell2.innerHTML=<a href="#">res[i].Title</a>;
       var a = document.createElement('a');

              // Create the text node for anchor element.
               var link = document.createTextNode(res[i].Title);
               // Append the text node to anchor element.
               a.appendChild(link);
               // Set the title.
               a.href="#"
               a.onclick= function (){
                 var sql= "SELECT qr FROM `lms`.`nptellinks` WHERE ID = "+this.id+";"
                 connection.query(sql,(err,res)=>{
                   if(err) throw err;
                   else{

                   // ipcRenderer.send('nptel-Links',res[0].qr)
                   var data = res[0].qr

                  // Convert the string to bytes


                  // Make a Blob from the bytes
              var blob = new Blob([data], {type: 'image/bmp'});

              // Use createObjectURL to make a URL for the blob
                var image = new Image();
                image.src = URL.createObjectURL(blob);
                document.getElementById("qr").innerHTML=""
                  document.getElementById("qr").appendChild(image)
                   }
                 })
               }
               a.id = res[i].id;
            // console.log(a);
            cell2.appendChild(a)


        }

      }


    }
  )
}


viewNPTEL();
