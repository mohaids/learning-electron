console.log('Hello from Electron 👋')

const {app, BrowserWindow} = require('electron');

const openWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    openWindow()
})