users = []
let idCounter = 0
const tbody = document.getElementById('table_body')

const add_user = () => {
    // Capturamos y pedimos los datos al usuario
    let user_name = prompt('Digite su nombre')
    let user_age = prompt('Digite su edad')
    // Convertimos la edad en entero
    age = parseInt(user_age)

    // Validaciones y muestra el mensaje
    if (isNaN(age)) {
        console.error('Error: Por favor, ingresa una edad válida en números.')
    } else if (user_age < 18) {
        alert(`Hola ${user_name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
    } else {
        alert(`Hola ${user_name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!.`)
    }

    users.push({ id: idCounter ,'name': user_name, 'age': user_age, 'state': true })

    // create row
    const row = document.createElement('div');
    row.classList.add('table_row');

    // Crear cells
    row.innerHTML = `
      <div class="table_row_item">${idCounter++}</div>
      <div class="table_row_item">${user_name}</div>
      <div class="table_row_item">${user_age}</div>
      <div class="table_row_item">${'active'}</div>
    `;

    // Agregar al cuerpo de la tabla
    tbody.appendChild(row);

    console.log(users);
}
