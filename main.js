const {app,BrowserWindow,Menu,shell}=require('electron');
const path=require('path');
if(!app.requestSingleInstanceLock()){app.quit()}
let win;
function create(){
  win=new BrowserWindow({width:1240,height:820,minWidth:420,minHeight:600,title:'Benchwell Quotation',
    icon:path.join(__dirname,'build','icon.png'),backgroundColor:'#f6f6f7',autoHideMenuBar:true,
    webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});
  if(process.platform!=='darwin')Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname,'www','index.html'));
  win.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return {action:'deny'}});
}
app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus()}});
app.whenReady().then(create);
app.on('window-all-closed',()=>{app.quit()});
