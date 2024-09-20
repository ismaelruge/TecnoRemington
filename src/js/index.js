// Inicializa Contactenos
let formContact = document.getElementById('formContact');
let nameContact = document.getElementById('nameContact');
let emailContact = document.getElementById('emailContact');
let messageContact = document.getElementById('messageContact');

formContact.addEventListener('submit', (e) => {
    e.preventDefault();

    let dtn = {
        nombre: nameContact.value,
        correo: emailContact.value,
        mensaje: messageContact.value
    };

    alert(`Hola ${dtn.nombre}, se te enviará un correo a ${dtn.correo} cuando nuestros asesores hayan analizado tu mensaje, muchas gracias.`);
});

// Finaliza Contactenos

// Inicializa BtnCompras

async function btnCompras(params) {
    alert(`haz comprado el articulo ${params}`);
}

// Finaliza Compras