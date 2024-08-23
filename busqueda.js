import {cargarDatos} from './cargar.js'
const buscar = document.querySelector('.buscar')
const container = document.querySelector('tbody')

export const busqueda = () => {
    fetch('https://66b69fc87f7b1c6d8f19d832.mockapi.io/productos')
        .then(response => response.json())
        .then(data => {
    const item = buscar.value.toLowerCase();
    const resultado = data.filter((user) => user.name.toLowerCase().startsWith(item));
    let datos = ''
    resultado.forEach((user) => {
        datos += `
                    <tr id="row-${user.id}">
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.price}</td>
                        <td>${user.description}</td>
                        <td>${user.createdAt.substr(0,10)}</td>
                    </tr>
                `
    })
    if (container) {
        container.innerHTML = datos
    }
    if (buscar.value === ""){
        cargarDatos()
    }
})}
