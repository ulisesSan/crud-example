const {BrowserWindow, Notification} = require('electron')
const {getConnection} = require('./database')

async function getProf(){
    const conn = await getConnection()
    const result = await conn.query('select * from profesores');
    return result;
}

async function saveProf(nameProfesor){
    try {
        const conn = await getConnection();
        const resul = await conn.query('insert into profesores set ?',nameProfesor);
        console.log(resul);
        new Notification({
            title: 'Sistema de prestamo de equipo', 
            body: 'Nuevo usuario agregado satispactoriamente'
        }).show();
        
        nameProfesor.id = resul.insertId;
        return nameProfesor;

    } catch (error) {
        console.log(error)
    }
}
let window 

function createWindow(){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
    })
    window.loadFile('./src/userInterface/ui.html');
}

module.exports = {
    createWindow,
    saveProf,
    getProf
}