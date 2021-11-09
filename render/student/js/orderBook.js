//Dom Nodes
const {ipcRenderer}=require('electron')
//bookSearch
var d = new Date();

mysql=require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "AUTO@2019",
  database : "my"
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
