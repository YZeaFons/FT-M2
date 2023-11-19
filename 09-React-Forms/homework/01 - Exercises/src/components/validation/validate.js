// import regexEmail from '../Contact/Contact'
export default function validate(input) {

    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


    if (input.name === '') errors.name = "Se requiere un nombre";

    if (!regexEmail.test(input.email)) errors.email = "Debe ser un correo electrónico"

    if (input.message === '') errors.message = 'Se requiere un mensaje';

    return errors;
}
// const pruebas = validate({
//     name: "",
//     email: "henry@gmail.com",
//     message: "Mensaje Henry",
// })
// console.log(pruebas);