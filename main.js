import {cargarDatos} from './cargar.js'
import {busqueda} from './busqueda.js'

const buscar = document.querySelector('.buscar')


buscar.addEventListener("input", busqueda)


function main() {
    cargarDatos()
}

main()

