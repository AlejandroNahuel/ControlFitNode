const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

//Importamos emailService.js
const { EmailService } = require('../service/emailService');

//Importamos customer
let { Customer } = require('../customer/Customer');

//Importo el creador de mensajes para el cliente
const { MessageForCustomer } = require('../service/messageForCustomer');

//Importo el creador de mensajes para el propietario de la app
const { MessageForOwner } = require('../service/messageForOwner');

router.post('/send-email', async(req,res)=>{
    
    console.log(Customer);
    
    Customer.name = req.body.name;
    Customer.lastName = req.body.lastName;
    Customer.gymName = req.body.gymName;
    Customer.email = req.body.email;
    Customer.phone = req.body.phone;
    Customer.notiWhatsapp = req.body.notiWhatsapp;
    Customer.membersApp = req.body.membersApp;
    Customer.extraComputer = req.body.extraComputer;
    Customer.numberOfMembers = req.body.numberOfMembers;

    console.log(Customer.notiWhatsapp);
    console.log(Customer.membersApp);
    console.log(Customer.extraComputer);

    console.log(Customer);

    //PROBAMOS ENVIAR EMAILS IMPORTANDO EL SERVICIO DE emailService.js
    //Enviamos un mensaje al cliente primero que nada a ver que pasa
    await EmailService.transporter.sendMail(MessageForCustomer.createMessage(Customer));
    
    //Enviamos un email al propietario de la aplicacion
    await EmailService.transporter.sendMail(MessageForOwner.createMessage(Customer));

    //Acá escribimos el mensaje para enviar por mail en formato HTML
    // contentHTML = `
    //     <h1>User Information</h1>
    //     <ul>
    //         <li>Username: ${name}</li>
    //         <li>Email: ${email}</li>
    //     </ul>
    //     <p>Message: ${message}</p>
    // `;

    // const transporter = nodemailer.createTransport({
    //     host: Config.host,
    //     port: Config.gmailPort,
    //     secure: false,
    //     auth: {
    //         user: Config.email,
    //         pass: Config.applicationPassword,
    //     }
    // });

    // const info = await transporter.sendMail({
    //     from: "'Zurdo probando cosas' <democontrolfit@gmail.com>",
    //     to:'alejandro.nahuel15817@gmail.com',
    //     subject:'Zurdo probando coses',
    //     html: "Vaaaamo Zurdis vo podés"
    // });

    

    //Respondemos con otra vista
    res.redirect('/success.html');
});

module.exports = router;