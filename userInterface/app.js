const formulario = document.getElementById('ProfForm');
const nameProf = document.getElementById('profName');
const {remote} = require('electron');
const consulta = remote.require('./main')
const printPRof = document.getElementById('printProf')
let nameProfesores = []

formulario.addEventListener('submit', async (e) =>{
    e.preventDefault();
    console.log(nameProf.value);

    const profesor ={ 
        nombre: nameProf.value
    }
    const result = await consulta.saveProf(profesor)
    getProf();
})

const getProf = async () =>{
    nameProfesores = await consulta.getProf();
    renderProf(nameProfesores);
}

function renderProf(Profesores){
    printPRof.innerHTML = '';

    Profesores.forEach(Profesores => {
        printPRof.innerHTML += `
            <div class="card card-body my-2 animate__fadeInLeft">
                <h4>${Profesores.nombre}</h4>
                <p>
                <button class = "btn btn-danger">Eliminar</button>
                <button class = "btn btn-secondary">Editar</button>
                </p>
            </div>
        `;
    });
}
async function init (){
    await getProf();
}

init();