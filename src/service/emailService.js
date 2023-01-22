//Importamos nodeMailer
const nodeMailer = require('nodemailer');

//Importamos las variables de entorno
const {Config} = require('../config');

//Importo el objeto cliente
const { Customer } = require('../customer/Customer');

const transporter = nodeMailer.createTransport({
    host: Config.host,
    port: Config.gmailPort,
    secure: false,
    auth:{
        user: Config.email,
        pass: Config.applicationPassword
    }
})

HTMLTextForCustomer = `
<h1>Este es un mensaje para el cliente</h1>
    <ul>
        <li>Username: ${Customer.name} </li>
        <li>Email: ${Customer.email}</li>
    </ul>
    <p>Message: Palalalala</p>
`;

HTMLMessageForCustomer = {
    from: "'Otro día, otro dólar' <democontrolfit@gmail.com>",
        to:'alejandro.nahuel15817@gmail.com',
        subject:'Mensaje para el cliente',
        html: HTMLTextForCustomer
};

HTMLMessageForOwner = {
    from: "'Zurdo probando cosas' <democontrolfit@gmail.com>",
        to:'alejandro.nahuel15817@gmail.com',
        subject:'Mensaje para el dueños',
        text: "Vaaaamo Zurdis vo podés"
}



module.exports.EmailService = {
    transporter: transporter,
    customer: Customer,
    messageForCustomer: HTMLMessageForCustomer
};
