const {ipcRenderer} = require('electron')
const msql = require('mysql');

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "lms"
})
connection.connect();
let un;

let log=document.getElementById('log');
let sd = document.getElementById('dob')

log.addEventListener('click',e => {
  let cred;
  let un=document.getElementById('regNo').value;
  let ps = document.getElementById('password').value;

      cred = checkCredStudent(un,ps);

      ipcRenderer.on('LOG-IN',(events,args1)=>{
        ipcRenderer.send('student-details',args1)
        log.href="student.html"

    })


})
