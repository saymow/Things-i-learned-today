const { app, BrowserWindow, globalShortcut } = require("electron");
const config = require("./config");
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(config.url);
}

function toggleDevTools() {
  win.webContents.toggleDevTools();
}

function createHotKeys() {
  globalShortcut.register("CmdOrCtrl+j", toggleDevTools);
}

app.whenReady().then(createWindow).then(createHotKeys);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
