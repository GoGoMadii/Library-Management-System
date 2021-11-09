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
function convertDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        hours  = ("0" + date.getHours()).slice(-2);
        minutes = ("0" + date.getMinutes()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}

function post(){
  let pt = document.getElementById('Title').value
  let pi = document.getElementById('myfile')
  let pn = document.getElementById('es')
  let pnn=document.getElementById('np')
if(pn.checked){
//  console.log('es');
  var main_path = pi.files[0].path;
  console.log(main_path);
  var check_path = "C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads";
  if(main_path.includes(check_path)){
    var fp = "C:\\\\ProgramData\\\\MySQL\\\\MySQL Server 8.0\\\\Uploads\\\\"+pi.files[0].name+"";
    var sql = "INSERT INTO `lms`.`recentUpdates` (`Title`, `qr`) VALUES ('"+pt+"', load_file('"+fp+"')); "
    connection.query(sql,(err,res)=>{
      if(err) throw err;
      else{
        ipcRenderer.send("file-updated")
      }
    })
  }
  else{
    ipcRenderer.send("file-invalid")
  }
}
else if(pnn.checked){
  let myfile;
    var main_path = pi.files[0].path;
    console.log(main_path);
    var check_path = "C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads";
    if(main_path.includes(check_path)){
      var fp = "C:\\\\ProgramData\\\\MySQL\\\\MySQL Server 8.0\\\\Uploads\\\\"+pi.files[0].name+"";
      var sql = "INSERT INTO `lms`.`nptellinks` (`Title`, `qr`) VALUES ('"+pt+"', load_file('"+fp+"')); "
      connection.query(sql,(err,res)=>{
        if(err) throw err;
        else{
          ipcRenderer.send("file-updated")
        }
      })
    }
    else{
      ipcRenderer.send("file-invalid")
    }

}

}
