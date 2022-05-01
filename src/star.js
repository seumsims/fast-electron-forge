const { app, BrowserWindow } = require('electron');
const windowStateKeeper = require('electron-window-state');
const isDev = require('electron-is-dev');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    title: "Salamoon Alaikoom from star js with auto window state",
    webPreferences: {
      preload: path.join(__dirname , 'preload.js'),
      contextIsolation: false
    }
  });

  

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.loadFile('src/index.html');
  // mainWindow.loadURL("https://google.com");

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  if (isDev) {
    mainWindow.webContents.openDevTools();
    console.log('Running in development');
  } else {
    console.log('Running in production');
  }

  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(mainWindow);

  
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);

app.whenReady().then(() => {
  createWindow();
  console.log("console log from star js");

});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
