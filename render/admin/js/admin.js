const {ipcRenderer} = require('electron');


let logout = document.getElementById('log-out');

logout.addEventListener('click',()=>{
  console.log("Logout clicked");
  ipcRenderer.send('admin-logout');
    logout.href="../home/index.html"
})

ipcRenderer.on("admin-logsout",()=>{
  console.log("LOGS-OUT");

})
