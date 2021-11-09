const { app, BrowserWindow,ipcMain, dialog  } = require('electron')
let win;
let tempData;
const d = new Date();
function createWindow () {
  const win = new BrowserWindow({
    fullscreen : true,
    autoHideMenuBar: true,
    webPreferences : {
      nodeIntegration : true,
      contextIsolation: false}
  })

  win.loadFile('render/home/index.html')
}


app.whenReady().then(() => {
  createWindow()
})
 ipcMain.on('login-failed', ()=>{
   console.log("Login Failed");
   const option = {
     buttons : ["OK"],
     title : "LOGIN FAILED",
     message : "INVALID USERNAME OR PASSWORD",
   }
   dialog.showMessageBox(null,option)
 })
ipcMain.on("Patron-no-book",()=>{
  const option = {
    buttons : ["OK"],
    type:"info",
    title : "INFO",
    message : "Patron has no book in hand"

  }
  dialog.showMessageBox(null,option)
})


ipcMain.on('admin-logout',()=>{
  console.log("Admin logs out at" + d);

})
 //true or false
ipcMain.on('login-sucess',(events,args1)=>{
  tempData =args1;
//  console.log(args1);
  events.sender.send('LOG-IN',args1)
})
ipcMain.on('need-details',(e,a)=>{
  console.log("Requested");
  e.reply('throw-details',tempData)
})




//addBooks
//add-book-FAILED
ipcMain.on("add-book-failed",()=>{
  const option = {
    buttons : ["OK"],
    type:"error",
    title : "Action Failed",
    message : "BOOK ID ALREADY BEEN TAKEN"

  }
  dialog.showMessageBox(null,option)
})

ipcMain.on("add-book-success",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "BOOK ADDED SUCCESSFULLY"
  }
dialog.showMessageBox(null,option)
})
//no-book-Found
ipcMain.on("No-Book-Found",()=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "NO BOOK FOUND",
    message : "BOOK WITH THIS ID IS NOT FOUND"
  }
dialog.showMessageBox(null,option)
})

//book-update
ipcMain.on("update-books",(events,args)=>{

  events.sender.send("book-details",args)
})
//book-update-success
ipcMain.on("book-update-success",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "BOOK UPDATED SUCCESSFULLY"
  }
dialog.showMessageBox(null,option)
})

ipcMain.on('student-not-found',()=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "No Info",
    message : "Patron with this ID not found"
  }
dialog.showMessageBox(null,option)
})
//book not for Lend

ipcMain.on("not-for-lend",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Book not For Lend",
    message : "Book is a research/Project/Reference Material."
  }
dialog.showMessageBox(null,option)
})
//Fine OverDue
ipcMain.on("Fine-OverDue",(events,args)=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "Fine OverDue",
    message : "Fine of ₹"+args+" is OverDue"
  }
dialog.showMessageBox(null,option)
})
//Borrow action Success
ipcMain.on("borrow-Action-success",()=>{

  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Book has been lent Successfully"
  }
dialog.showMessageBox(null,option)
})
//book-returned
ipcMain.on("book-returned",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Book has been Returned Successfully"
  }
  dialog.showMessageBox(null,option)
})
//book-already-retuen
ipcMain.on("book-already-returned",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Book already has been returned"
  }
  dialog.showMessageBox(null,option)
})
//book-renewed
ipcMain.on("book-renewed",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Book Renewed"
  }
  dialog.showMessageBox(null,option)
})
// fine-pending
ipcMain.on("fine-pending",(events,args)=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "Action Success",
    message : "The Patron has fine of  ₹"+args+" is OverDue"
  }
  dialog.showMessageBox(null,option)
})
//fine-UPDATED
ipcMain.on("fine-updated",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Fine has been updated Successfully"
  }
  dialog.showMessageBox(null,option)
})

//no-FINE
ipcMain.on("No-fine",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "No Fine Pending"
  }
  dialog.showMessageBox(null,option)

})

//book-replaced
ipcMain.on("Book-replaced",()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "Book data has been cleared"
  }
  dialog.showMessageBox(null,option)
})
//file-INVALID
ipcMain.on("file-invalid",()=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "Action failed",
    message : "Save the file on specified location"
  }
  dialog.showMessageBox(null,option)
})

ipcMain.on('file-updated',()=>{
  const option={
    buttons : ["OK"],
    type : "info",
    title : "Action Success",
    message : "File has been updated succesfully"
  }
  dialog.showMessageBox(null,option)
})
ipcMain.on("Student-limit",()=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "Action Failed",
    message : "Patron already has Book in hand"
  }
  dialog.showMessageBox(null,option)
})

ipcMain.on("book-lent",()=>{
  const option={
    buttons : ["OK"],
    type : "error",
    title : "Action Failed",
    message : "Book already has been Lent"
  }
  dialog.showMessageBox(null,option)
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
