const {ipcRenderer} = require('electron')

let log=document.getElementById('log');

log.addEventListener('click',e => {
  let cred;
  let un=document.getElementById('regNo').value;
  let ps = document.getElementById('password').value;
      cred = checkCredAdmin(un,ps);

      ipcRenderer.on('LOG-IN',(events,args1,args2)=>{
        log.href="admin.html"
      })
    }


)
