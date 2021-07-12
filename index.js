const {createWindow} = require('./main')
const {app} = require('electron')
require('./database')
require('electron-reload')(__dirname)
const muestraProf = require('./main')

muestraProf.getProf();

app.whenReady().then(createWindow); 