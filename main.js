const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


function createWindow(){
	//create window
	win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/icon.jpg'});

   //load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	//Open devtools
	//win.webContents.openDevTools();
	win.on('closed',() => {
		win = null;
	});
}

// Run createWindow
app.on('ready',createWindow);

//Quit when all windows are closed
app.on('window-all-closed',() => {
  app.quit();  
});
