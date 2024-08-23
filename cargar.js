const container = document.querySelector('tbody')

export function cargarDatos() {
    fetch('https://66b69fc87f7b1c6d8f19d832.mockapi.io/productos')
        .then(response => response.json())
        .then(data => {
            let datos = ''
            data.forEach(user => {
                datos += `
                    <tr id="row-${user.id}">
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.price}</td>
                        <td>${user.description}</td>
                        <td>${user.createdAt.substr(0,10)}</td>
                    </tr>
                `
            });
            if (container) {
                container.innerHTML = datos
            }
        })
        .catch(err => console.error(err));
}
