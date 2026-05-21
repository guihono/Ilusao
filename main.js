const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    title: 'ILUSÃO',
    icon: path.join(__dirname, 'images/icon.png')
  })

  win.loadFile('Ilusao.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})